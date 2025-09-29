document.addEventListener("DOMContentLoaded", () => {
    // ... (your existing register patient modal logic) ...

    const createAccountModal = document.getElementById("createAccountModal");
    const createAccountBtn = document.getElementById("createAccountBtn");
    const cancelCreateAccountBtn = document.getElementById("cancelCreateAccount");
    const createAccountForm = document.getElementById("createAccountForm");
    const createAccountLoading = createAccountModal.querySelector(".create-account-loading");
    const submitCreateAccountBtn = document.getElementById("submitCreateAccount");
    const accountMessageDiv = document.getElementById("accountMessage");
    const accountNumberInput = document.getElementById("accountNumber");

    // You need the 'state' object for renderPatientInfoBox to work without errors
    const state = {
        searchByPhone: false,
    };

    // Function to show the create account modal
    function showCreateAccountModal() {
        createAccountModal.style.display = "flex";
        createAccountForm.reset();
        createAccountLoading.style.display = "none";
        submitCreateAccountBtn.disabled = false;
        const today = new Date();
        const pastDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        const year = pastDate.getFullYear();
        const month = String(pastDate.getMonth() + 1).padStart(2, '0');
        const day = String(pastDate.getDate()).padStart(2, '0');
        document.getElementById("createDob").max = `${year}-${month}-${day}`;
    }

    // Function to hide the create account modal
    function hideCreateAccountModal() {
        createAccountModal.style.display = "none";
    }

    // Function to format date for API (MM/DD/YYYY)
    function formatDateForApi(dateString) {
        if (!dateString) return "";
        const [year, month, day] = dateString.split('-');
        return `${month}/${day}/${year}`;
    }

    // --- NEWLY ADDED HELPER FUNCTION (Required by renderPatientInfoBox) ---
    // Helper function to format date from YYYY-MM-DD to MM/DD/YYYY for display
    function formatDOBToMMDDYYYY(dateString) {
        if (!dateString || !dateString.includes('-')) {
            return dateString; // Return as is if format is unexpected or already correct
        }
        const [year, month, day] = dateString.split('-');
        return `${month}/${day}/${year}`;
    }

    // --- NEWLY ADDED FUNCTION ---
    function renderPatientInfoBox(patient) {
        const infoBox = document.getElementById("accountInfoBox");
        if (!infoBox) return;

        // When creating an account, we treat it like searching by account number (state.searchByPhone is false)
        if (state.searchByPhone) {
            // This block is for future use if you search by phone; it won't be hit now.
            if (patient && patient.first_name) {
                infoBox.innerHTML = `
                    <p><strong>Name:</strong> ${patient.first_name} ${patient.last_name}</p>
                    <p><strong>Email:</strong> ${patient.email || "N/A"}</p>
                    <p><strong>Phone:</strong> ${patient.phone_number || "N/A"}</p>
                    <p><strong>DOB:</strong> ${patient.date_of_birth ? formatDOBToMMDDYYYY(patient.date_of_birth) : "N/A"}</p>
                `;
                infoBox.style.color = "black";
                infoBox.style.display = "block";
            } else {
                infoBox.style.display = "none";
            }
        } else {
            // This is the path that will be taken after creating an account.
            if (patient && patient.first_name) {
                infoBox.innerHTML = `
                    <p><strong>Name:</strong> ${patient.first_name} ${patient.last_name}</p>
                    <p><strong>Email:</strong> ${patient.email || "N/A"}</p>
                    <p><strong>Phone:</strong> ${patient.phone_number || "N/A"}</p>
                    <p><strong>DOB:</strong> ${patient.date_of_birth ? formatDOBToMMDDYYYY(patient.date_of_birth) : "N/A"}</p>
                `;
                infoBox.style.color = "black";
                infoBox.style.display = "block";
            } else {
                infoBox.style.color = "red";
                infoBox.innerHTML = `<p>Patient not found or invalid account number.</p>`;
                infoBox.style.display = "block";
            }
        }
    }


    // Event listener for the "Create Account" button
    if (createAccountBtn) {
        createAccountBtn.addEventListener("click", showCreateAccountModal);
    }

    // Event listener for the "Cancel" button
    if (cancelCreateAccountBtn) {
        cancelCreateAccountBtn.addEventListener("click", hideCreateAccountModal);
    }

    // Event listener for clicking outside the modal content
    createAccountModal.addEventListener("click", (event) => {
        if (event.target === createAccountModal) {
            hideCreateAccountModal();
        }
    });

    // Event listener for the create account form submission
    if (createAccountForm) {
        createAccountForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const firstName = document.getElementById("createFirstName").value.trim();
            const lastName = document.getElementById("createLastName").value.trim();
            const dob = document.getElementById("createDob").value; // Format: YYYY-MM-DD
            const phone = document.getElementById("createPhone").value.trim();
            const email = document.getElementById("createEmail").value.trim();

            if (!firstName || !lastName || !dob) {
                alert("Please fill in First Name, Last Name, and Date of Birth.");
                return;
            }

            createAccountLoading.style.display = "flex";
            submitCreateAccountBtn.disabled = true;
            accountMessageDiv.textContent = "";

            try {
                // 1. Check if account exists first
                const formattedDob = formatDateForApi(dob); // This returns MM/DD/YYYY

                const checkAccountResponse = await fetch(
                    "https://ecw-fast-api-277265452244.us-central1.run.app/check-account",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            first_name: firstName,
                            last_name: lastName,
                            dob: formattedDob,
                            phone_number: phone,
                        }),
                    }
                );
                const checkAccountResult = await checkAccountResponse.json();

                if (checkAccountResponse.ok && checkAccountResult.account_number) {
                    accountMessageDiv.textContent = "Account already exists.";
                    accountMessageDiv.style.color = "orange";
                    accountNumberInput.value = checkAccountResult.account_number;
                    // You might want to fetch and render the patient info here as well
                    hideCreateAccountModal();
                    return;
                } else if (checkAccountResponse.status !== 404 && !checkAccountResponse.ok) {
                    throw new Error(`Error checking account: ${checkAccountResult.message || checkAccountResponse.statusText}`);
                }

                // 2. Create the account
                const createAccountResponse = await fetch(
                    "https://ecw-automation-service-277265452244.us-central1.run.app/create-account",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            first_name: firstName,
                            last_name: lastName,
                            dob: formattedDob, // Sends MM/DD/YYYY
                            phone_number: phone || null,
                            email: email || null,
                        }),
                    }
                );

                const createAccountResult = await createAccountResponse.json();

                // --- MODIFIED SUCCESS BLOCK ---
                if (createAccountResponse.ok) {
                    accountMessageDiv.textContent = "Account created successfully!";
                    accountMessageDiv.style.color = "green";

                    // Create a patient object from the form data to display it
                    const newPatientData = {
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        phone_number: phone,
                        date_of_birth: dob // Use the original YYYY-MM-DD from the form
                    };

                    // Call the function to display the new patient's info on the main page
                    renderPatientInfoBox(newPatientData);

                    // Populate the account number from the API response
                    if (createAccountResult.account_number) {
                        accountNumberInput.value = createAccountResult.account_number;
                    } else {
                        console.warn("Account created, but no account_number returned from API.");
                    }

                    hideCreateAccountModal();
                } else {
                    throw new Error(`Failed to create account: ${createAccountResult.message || createAccountResponse.statusText}`);
                }

            } catch (error) {
                console.error("Account creation or check error:", error);
                accountMessageDiv.textContent = `Error: ${error.message || "Please try again."}`;
                accountMessageDiv.style.color = "red";
            } finally {
                createAccountLoading.style.display = "none";
                submitCreateAccountBtn.disabled = false;
            }
        });
    }

    // ... (rest of your DOMContentLoaded logic) ...
});