// ----------------- Configuration -----------------
// const API_BASE_URL = "https://nexhealth-custom-server-1081644116068.us-central1.run.app/api";
// const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = "https://ecw-fast-api-277265452244.us-central1.run.app";

// Location options from the original rich content
// const locationOptions = [
//     {
//         id: [{ primary: 233163 }, { urgent: 233164 }],
//         text: "AST",
//         name: "Astoria",
//     },
//     {
//         id: [{ primary: 233165 }, { urgent: 233166 }],
//         text: "BRTW",
//         name: "Bronx Bartow",
//     },
//     {
//         id: [{ primary: 233167 }, { urgent: 233168 }],
//         name: "Bronx 174th St",
//         text: "BX174",
//     },
//     {
//         id: [{ primary: 233170 }, { urgent: 233171 }],
//         name: "Crown Heights",
//         text: "CH",
//     },
//     {
//         id: [{ primary: 233172 }, { urgent: 233192 }],
//         name: "Downtown Manhattan",
//         text: "DWNT",
//     },
//     {
//         id: [{ primary: 233174 }],
//         name: "Hicksville",
//         text: "HIX",
//     },
//     {
//         id: [{ primary: 233175 }, { urgent: 233176 }],
//         name: "Jackson Heights",
//         text: "JH",
//     },
//     {
//         name: "Jamaica",
//         text: "JAM",
//         id: [{ primary: 233177 }, { urgent: 233178 }],
//     },
//     {
//         id: [{ primary: 233179 }, { urgent: 233193 }],
//         name: "Long Island City",
//         text: "LIC",
//     },
//     {
//         name: "Mineola",
//         text: "MIN",
//         id: [{ primary: 233183 }, { urgent: 233194 }],
//     },
//     {
//         name: "Nutrition - Virtual",
//         text: "NU",
//         id: [233184],
//     },
//     {
//         name: "Mental Health - Virtual",
//         text: "PSY",
//         id: [233186],
//     },
//     {
//         id: [{ primary: 233213 }, { urgent: 233195 }],
//         name: "Williamsburg",
//         text: "WIL",
//     },
//     {
//         name: "Telemedicine",
//         text: "TELE",
//         id: [233173],
//     }
// ];

const locationOptions = [
    {
        'site_name': 'Bartow Statcare Urgent and walk-in medical care',
        'value': 'BRTW',
        'status': 'urgent'
    },
    {
        'site_name': 'BX174 Statcare Urgent and Walk-In Medical Care',
        'value': 'BX174',
        'status': 'urgent'
    },
    {
        'site_name': 'Astoria Statcare Urgent and Walk-In Medical',
        'value': 'AST',
        'status': 'urgent'
    },
    {
        'site_name': 'Crown Heights Statcare Urgent and Walk-In Medical Care',
        'value': 'CH',
        'status': 'urgent'
    },
    {
        'site_name': 'Jackson Heights Statcare Urgent and Walk-in Medical Care',
        'value': 'JH',
        'status': 'urgent'
    },
    {
        'site_name': 'Jamaica Statcare Urgent and Walk-In Medical Care',
        'value': 'JAM',
        'status': 'urgent'
    },
    {
        'site_name': 'NaoMed-CLINIC-Downtown Manhattan',
        'value': 'DWNT',
        'status': 'urgent'
    },
    {
        'site_name': 'NaoMed-CLINIC-Long Island City',
        'value': 'LIC',
        'status': 'urgent'
    },
    {
        'site_name': 'NaoMed-CLINIC-Mineola',
        'value': 'MIN',
        'status': 'urgent'
    },
    {
        'site_name': 'NaoMed-CLINIC-Williamsburg',
        'value': 'WIL',
        'status': 'urgent'
    },
    {
        'site_name': 'Astoria - HFMC',
        'value': 'AST',
        'status': 'primary'
    },
    {
        'site_name': 'Bartow - HFMC',
        'value': 'BRTW',
        'status': 'primary'
    },
    {
        'site_name': 'BX174 - HFMC',
        'value': 'BX174',
        'status': 'primary'
    },
    {
        'site_name': 'Crown Heights - HFMC',
        'value': 'CH',
        'status': 'primary'
    },
    {
        'site_name': 'Jackson Heights - HFMC',
        'value': 'JH',
        'status': 'primary'
    },
    {
        'site_name': 'Jamaica - HFMC',
        'value': 'JAM',
        'status': 'primary'
    },
    {
        'site_name': 'Downtown Manhattan - HFMC',
        'value': 'DWNT',
        'status': 'primary'
    },
    {
        'site_name': 'Long Island City - HFMC',
        'value': 'LIC',
        'status': 'primary'
    },
    {
        'site_name': 'Statcare Urgent and Walkin Medical Care',
        'value': 'HIX',
        'status': 'urgent'
    },
    {
        'site_name': 'Mineola - HFMC',
        'value': 'MIN',
        'status': 'primary'
    },
    {
        'site_name': 'Williamsburg - HFMC',
        'value': 'WIL',
        'status': 'primary'
    }
]

// ----------------- DOM Elements -----------------
const elements = {

    form: document.getElementById("bookingForm"),
    accountSelect: document.getElementById('accountSelect'),
    accountNumber: document.getElementById("accountNumber"),
    accountSelection: document.getElementById('accountSelection'),
    locationSelect: document.getElementById("locationSelect"),
    appointmentResults: document.getElementById("appointmentResults"),
    appointmentOutput: document.getElementById("appointmentOutput"),
    visitType: document.getElementById("visitType"),
    sameProvider: document.getElementById("sameProvider"),
    sameProviderSection: document.getElementById("sameProviderSection"),
    appointDate: document.getElementById("appointDate"),
    providerSection: document.getElementById("providerSection"),
    providerSelect: document.getElementById("providerSelect"),
    timeSlotsSection: document.getElementById("timeSlotsSection"),
    timeSlots: document.getElementById("timeSlots"),
    submitBtn: document.getElementById("submitBtn"),
    loadingOverlay: document.getElementById("loadingOverlay"),
    noProvidersMessage: document.getElementById("noProvidersMessage"),
    successModal: document.getElementById("successModal"),
    closeSuccessModal: document.getElementById("closeSuccessModal"),
    searchAccountBtn: document.getElementById("searchAccountBtn"),
    // Step navigation buttons
    step1Next: document.getElementById("step1Next"),
    step2Next: document.getElementById("step2Next"),
    step2Back: document.getElementById("step2Back"),
    step3Back: document.getElementById("step3Back"),
    visitReason: document.getElementById("visitReason"),
    // Progress steps
    progressSteps: document.querySelectorAll(".progress-step"),
    formSteps: document.querySelectorAll(".form-step"),
};

// ----------------- State -----------------
const state = {
    lastProviderId: null,
    patientDetails: null,
    selectedSlotId: null,
    providers: [],
    appointments: [],
    currentStep: 1,
    patientId: null,
    searchedPatient: false,
    searchByPhone: false,
    patients: [],
    accounts: [],
};

// ----------------- Helper Functions -----------------

// Format date to YYYY-MM-DD
function formatDate(date) {
    return date.toISOString().split("T")[0];
}

// Get selected location IDs
function getSelectedLocationIds() {
    return elements.locationSelect.value;
}


// Show loading indicator
function showLoading() {
    elements.loadingOverlay.classList.add("active");
}

// Hide loading indicator
function hideLoading() {
    elements.loadingOverlay.classList.remove("active");
}

// Show success modal
function showSuccessModal() {
    elements.successModal.classList.add("active");
}

// Hide success modal
function hideSuccessModal() {
    elements.successModal.classList.remove("active");
}

// Navigate to step
function goToStep(step) {
    // Update state
    state.currentStep = step;

    // Update progress steps
    elements.progressSteps.forEach((progressStep) => {
        const stepNumber = Number.parseInt(progressStep.dataset.step);
        progressStep.classList.remove("active", "completed");

        if (stepNumber === step) {
            progressStep.classList.add("active");
        } else if (stepNumber < step) {
            progressStep.classList.add("completed");
        }
    });

    // Update form steps
    elements.formSteps.forEach((formStep) => {
        const stepNumber = Number.parseInt(formStep.dataset.step);
        formStep.classList.remove("active");

        if (stepNumber === step) {
            formStep.classList.add("active");
        }
    });

    // If going to step 3, check if we need to fetch providers
    if (step === 3) {
        const locationIds = getSelectedLocationIds();
        const appointDate = elements.appointDate.value;
        const visitType = elements.visitType.value;

        if (locationIds && appointDate && visitType) {
            fetchProviders();
        }
    }
}

// Check if step is valid
function isStepValid(step) {
    switch (step) {
        case 1:
            return (
                elements.accountNumber.value.trim() !== "" &&
                state.searchedPatient === true &&
                !!state.patientId &&
                elements.locationSelect.value !== ""
            );
        case 2:
            return elements.visitType.value !== "" && elements.appointDate.value !== "";
        case 3:
            return elements.providerSelect.value !== "" && state.selectedSlotId !== null;
        default:
            return false;
    }
}

// Check if form is valid
function checkFormValidity() {
    const isValid = isStepValid(1) && isStepValid(2) && isStepValid(3);
    elements.submitBtn.disabled = !isValid;
}

// ----------------- API Functions -----------------

// Fetch patient appointments (REVISED)
async function fetchAppointments() {
    const accountNumber = elements.accountNumber.value.trim();
    const locationIds = getSelectedLocationIds();
    const selectedPatientId = state.selectedPatientId;

    // Get the container element (ensure it exists in your HTML with this ID)
    const sameProviderSection = elements.sameProviderSection;

    if (!accountNumber || !locationIds || !selectedPatientId) {
        // If inputs are cleared, reset appointment display and hide same provider option
        renderAppointments([]); // Clear display
        if (sameProviderSection) {
            sameProviderSection.style.display = "none";
            elements.sameProvider.checked = false; // Reset checkbox
        }
        const noAppointmentsMessage = document.getElementById("noAppointmentsMessage");
        if (noAppointmentsMessage) {
            noAppointmentsMessage.style.display = "none"; // Hide the message too
        }
        state.lastProviderId = null; // Clear last provider ID
        return;
    }

    showLoading();

    try {
        const response = await fetch(`${API_BASE_URL}/follow/patient-foreign`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nexId: accountNumber,
                locaId: locationIds,
                alreadyId: selectedPatientId
            }),
        });

        const result = await response.json();
        console.log("🚀 ~ fetchAppointments ~ result:", result)

        const appointments = Array.isArray(result.appointments)
            ? result.appointments
            : result.appointment
                ? [result.appointment]
                : [];

        state.appointments = appointments;
        const noAppointmentsMessage = document.getElementById("noAppointmentsMessage"); // Get message element

        if (appointments.length > 0) {
            const firstAppointment = appointments[0];
            state.lastProviderId = firstAppointment.provider_id?.toString();

            // ✅ Update checkbox text to show provider name
            const label = document.getElementById("sameProviderText");
            if (label && firstAppointment.provider_name) {
                label.textContent = `Same Provider (${firstAppointment.provider_name})`;
            }

            if (noAppointmentsMessage) noAppointmentsMessage.style.display = "none";
            if (sameProviderSection) sameProviderSection.style.display = "";
        }
        else {
            state.lastProviderId = null; // Clear last provider ID if no appointments
            if (noAppointmentsMessage) noAppointmentsMessage.style.display = "block"; // Show message
            // Hide the "Same Provider" option if no appointments exist
            if (sameProviderSection) {
                sameProviderSection.style.display = "none";
                elements.sameProvider.checked = false; // Uncheck the box when hiding
            }
        }

        renderAppointments(appointments); // Render the appointments list
    } catch (error) {
        console.error("Error fetching appointments:", error);
        // Optionally hide the section on error too
        if (sameProviderSection) {
            sameProviderSection.style.display = "none";
            elements.sameProvider.checked = false;
        }
        const noAppointmentsMessage = document.getElementById("noAppointmentsMessage");
        if (noAppointmentsMessage) noAppointmentsMessage.style.display = "block"; // Show message on error
        renderAppointments([]); // Clear display on error
        state.lastProviderId = null; // Clear last provider ID on error
    } finally {
        hideLoading();
    }
}

// Fetch available providers
async function fetchProviders() {
    const locationIds = getSelectedLocationIds();
    const appointDate = elements.appointDate.value;
    const visitType = elements.visitType.value;

    if (!locationIds || !appointDate || !visitType) return;

    showLoading();
    elements.noProvidersMessage.style.display = "none";

    try {
        // Find the selected location's status (urgent/primary)
        const selectedLocation = locationOptions.find(loc => loc.value === locationIds);
        const locationStatus = selectedLocation ? selectedLocation.status : null;

        const payload = {
            patientLocationKey: locationIds,
            theDate: appointDate,
        };

        const response = await fetch(`https://nexhealth-custom-server-1081644116068.us-central1.run.app/api/custom/cal-providers`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const responseData = await response.json();

        // Always use the "formatted" field from the response
        let formatted = responseData.formatted || {};

        // Determine which key to use based on location status
        let providerKey = null;
        if (locationStatus === "urgent") {
            providerKey = "urgent Care";
        } else if (locationStatus === "primary") {
            providerKey = "primary Care";
        }

        // Get the relevant providers array
        let providersArr = (providerKey && formatted[providerKey]) ? formatted[providerKey] : [];

        // Map to the structure expected by renderProviders
        const availableProviders = providersArr.map((p, idx) => ({
            id: idx + 1, // or use a better unique id if available
            text: p.provider,
            available_date: p.start ? p.start.split("T")[0] : "",
            begin_time: p.start,
            end_time: p.end,
        }));

        state.providers = availableProviders;

        if (availableProviders.length === 0) {
            elements.noProvidersMessage.style.display = "flex";
            elements.providerSection.style.display = "none";
            elements.timeSlotsSection.style.display = "none";
            return;
        }

        renderProviders(availableProviders);

        // Automatically update appointment date input to the available date of the first provider
        if (availableProviders.length > 0) {
            const firstProviderDate = availableProviders[0].available_date;
            if (firstProviderDate) {
                elements.appointDate.value = firstProviderDate;
            }
        }
    } catch (error) {
        console.error("Error fetching providers:", error);
        elements.noProvidersMessage.style.display = "flex";
    } finally {
        hideLoading();
    }
}

// Fetch time slots
async function fetchTimeSlots(providerId, availableDate, start_time, end_time) {
    const locationIds = getSelectedLocationIds();

    if (!providerId || !availableDate || !locationIds || !start_time || !end_time) return;

    showLoading();

    try {
        // Date is already in MM/DD/YYYY format or similar, so just ensure it
        let dateObj = new Date(availableDate);
        const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
        const dd = String(dateObj.getDate()).padStart(2, "0");
        const yyyy = dateObj.getFullYear();
        // const formattedDate = `${mm}/${dd}/${yyyy}`;
        const formattedDate = `${yyyy}-${mm}-${dd}`;


        // Helper to extract integer hour from "7/29/2025, 9:00:00 AM" or "2025-07-29T13:00:00.000Z"
        function toHourInt(dateTimeStr) {
            let date;
            if (dateTimeStr.includes(",")) {
                date = new Date(dateTimeStr);
            } else {
                date = new Date(dateTimeStr);
            }
            return date.getHours(); // returns 0-23
        }

        const businessStartHour = toHourInt(start_time);
        const businessEndHour = toHourInt(end_time);

        // Get the selected site_name directly from the dropdown
        const selectedOption = elements.locationSelect.options[elements.locationSelect.selectedIndex];
        const siteName = selectedOption ? selectedOption.textContent : locationIds;

        // Find the provider name from state.providers using the id, format as "LastName,FirstName" (no spaces)
        let providerName = "";
        const providerObj = state.providers.find(p => String(p.id) === String(providerId));
        if (providerObj && providerObj.text) {
            let [last, first] = providerObj.text.split(',').map(s => s.trim());
            if (first && last) {
                providerName = `${last},${first}`.replace(/\s+/g, '');
            } else {
                let parts = providerObj.text.trim().split(' ');
                if (parts.length >= 2) {
                    providerName = `${parts[1]},${parts[0]}`.replace(/\s+/g, '');
                } else {
                    providerName = providerObj.text.replace(/\s+/g, '');
                }
            }
        } else {
            providerName = providerId;
        }

        const payload = {
            facility_name: siteName,
            target_date: formattedDate,
            business_start_hour: businessStartHour, // integer hour (0-23)
            business_end_hour: businessEndHour,     // integer hour (0-23)
            slot_length: 15,
            provider_name: providerName,
        };

        const response = await fetch(`${TIME_SLOTS_API_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const slotData = await response.json();

        // Map slot strings to objects for renderTimeSlots
        const slots = Array.isArray(slotData.slots)
            ? slotData.slots.map(slotStr => ({
                text: slotStr,
                id: slotStr // Use slot string as unique id
            }))
            : [];

        // const mockSlotData = {
        //     "slots": [
        //         "09:00 AM",
        //         "09:15 AM",
        //         "09:30 AM",
        //         "10:00 AM",
        //         "10:45 AM",
        //         "11:30 AM",
        //         "11:45 AM",
        //         "12:00 PM",
        //         "12:15 PM",
        //         "12:30 PM",
        //         "12:45 PM",
        //         "01:00 PM",
        //         "01:15 PM",
        //         "01:30 PM",
        //         "01:45 PM",
        //         "02:00 PM",
        //         "02:15 PM",
        //         "02:30 PM",
        //         "02:45 PM",
        //         "03:00 PM",
        //         "03:15 PM",
        //         "03:30 PM",
        //         "03:45 PM"
        //     ]
        // };
        // const slotData = mockSlotData;
        // const slots = Array.isArray(slotData.slots)
        //     ? slotData.slots.map(slotStr => ({
        //         text: slotStr,
        //         id: slotStr
        //     }))
        //     : [];

        renderTimeSlots(slots);
    } catch (error) {
        console.error("Error fetching time slots:", error);
    } finally {
        hideLoading();
    }
}

// ----------------- Render Functions -----------------

// Populate location dropdown
function populateLocationDropdown() {
    // Clear existing options first (good practice)
    elements.locationSelect.innerHTML = "";
    elements.locationSelect.selectedIndex = 0; // resets to default
    // Add a default placeholder option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Location --";
    defaultOption.disabled = true;
    defaultOption.selected = true; // Make it selected initially
    elements.locationSelect.appendChild(defaultOption);

    locationOptions.forEach((location) => {
        // Handle both object ({primary: id}) and direct number (id) formats
        // const ids = location.id
        //     .map((entry) => {
        //         if (typeof entry === "object" && entry !== null) {
        //             // It's an object like { primary: 123 } or { urgent: 456 }
        //             return Object.values(entry)[0];
        //         } else if (typeof entry === "number") {
        //             // It's a direct number like 123
        //             return entry;
        //         }
        //         // Fallback for unexpected data types (optional but safe)
        //         return null;
        //     })
        //     .filter((id) => id !== null)
        //     .join(","); // Filter out any nulls and join

        // // Only create an option if we successfully generated IDs
        // if (ids) {
        //     const option = document.createElement("option");
        //     option.value = ids; // e.g., "233163,233164" or "233184"
        //     option.textContent = location.name;
        //     elements.locationSelect.appendChild(option);
        // } else {
        //     // Log a warning if IDs couldn't be generated for a location
        //     console.warn(`Could not generate valid IDs for location: ${location.name}`);
        // }
        const option = document.createElement("option");
        option.value = location.value;         // pass the exact string to the API
        option.textContent = location.site_name;   // show the same string in the dropdown
        elements.locationSelect.appendChild(option);
    });
}

// Render appointments
function renderAppointments(appointments) {
    if (appointments.length === 0) {
        elements.appointmentResults.style.display = "none";
        return;
    }

    elements.appointmentResults.style.display = "block";
    elements.appointmentOutput.innerHTML = "";

    // Create a mapping of location IDs to names
    const locationMap = {};
    locationOptions.forEach((loc) => {
        loc.id.forEach((entry) => {
            const id = Object.values(entry)[0];
            locationMap[id] = loc.name;
        });
    });

    appointments.forEach((appointment) => {
        const date = new Date(appointment.start_time);
        const locName = locationMap[appointment.location_id] || `Location ${appointment.location_id}`;

        const card = document.createElement("div");
        card.className = "appointment-card";

        card.innerHTML = `
      <div class="appointment-card-row">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="appointment-card-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <strong>${appointment.provider_name}</strong>
      </div>
      <div class="appointment-card-row">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="appointment-card-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        ${date.toLocaleString()}
      </div>
      <div class="appointment-card-location">Location: ${locName}</div>
    `;

        elements.appointmentOutput.appendChild(card);
    });
}

// Render providers
function renderProviders(providers) {
    elements.providerSelect.innerHTML = "";

    if (providers.length === 0) {
        elements.providerSection.style.display = "none";
        return;
    }

    // ✅ Deduplicate providers by ID
    const uniqueProvidersMap = new Map();
    providers.forEach((p) => {
        if (!uniqueProvidersMap.has(p.id)) {
            uniqueProvidersMap.set(p.id, p);
        }
    });
    const uniqueProviders = Array.from(uniqueProvidersMap.values());

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Provider --";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    elements.providerSelect.appendChild(defaultOption);

    // Add provider options
    uniqueProviders.forEach((provider) => {
        const option = document.createElement("option");
        option.value = provider.id;
        option.setAttribute("data-date", provider.available_date);
        option.setAttribute("data-start_time", provider.begin_time);
        option.setAttribute("data-end_time", provider.end_time);
        option.textContent = `${provider.text} (Avail: ${provider.available_date})`;
        elements.providerSelect.appendChild(option);
    });

    elements.providerSection.style.display = "block";
}

function getFreestTimeSlots(data, topCount = 4) {
    const slots = data.map(slot => ({
        ...slot,
        date: new Date(slot.id)
    }));

    slots.forEach(slot => {
        slot.score = slots.reduce((score, other) => {
            if (slot.id === other.id) return score;
            const diff = Math.abs(slot.date - other.date);
            return score + diff;
        }, 0);
    });

    slots.sort((a, b) => b.score - a.score);

    const selected = [];
    const spacing = 45 * 60 * 1000; // 45 minutes in ms

    for (let slot of slots) {
        const tooClose = selected.some(s => Math.abs(slot.date - s.date) < spacing);
        if (!tooClose) {
            selected.push(slot);
            if (selected.length === topCount) break;
        }
    }

    return selected.sort((a, b) => a.date - b.date).map(({ text, id }) => ({ text, id }));
}

const TIME_SLOTS_API_URL = 'https://careplan-extension-v2-564097302460.us-central1.run.app/api/time-slots';


function renderTimeSlots(slots) {
    elements.timeSlots.innerHTML = "";
    state.selectedSlotId = null;

    if (slots.length === 0) {
        elements.timeSlotsSection.style.display = "none";
        return;
    }

    const bestSlots = getFreestTimeSlots(slots);

    const wrapper = document.createElement("div");
    wrapper.className = "slots-wrapper";

    // --- Recommended Times Column ---
    const recommendedCol = document.createElement("div");
    recommendedCol.className = "slot-column";

    const bestHeader = document.createElement("div");
    bestHeader.className = "slot-section-header";
    bestHeader.textContent = "Recommended Least Busy Slots";

    const bestContainer = document.createElement("div");
    bestContainer.className = "slot-grid";
    bestSlots.forEach((slot) => {
        const timeSlot = document.createElement("div");
        timeSlot.className = "time-slot";
        timeSlot.textContent = slot.text;
        timeSlot.dataset.id = slot.id;
        timeSlot.addEventListener("click", () => {
            document.querySelectorAll(".time-slot").forEach((el) => el.classList.remove("selected"));
            timeSlot.classList.add("selected");
            state.selectedSlotId = slot.id;
            // checkFormValidity();
            if (state.selectedSlotId !== null) {
                // If a slot ID exists, ENABLE the button
                submitBtn.disabled = false;
            } else {
                // If no slot ID exists, DISABLE the button
                submitBtn.disabled = true;
            }
        });
        bestContainer.appendChild(timeSlot);
    });

    recommendedCol.appendChild(bestHeader);
    recommendedCol.appendChild(bestContainer);

    // --- All Available Times Column ---
    const sortedSlots = slots
        .map((slot) => ({ ...slot, startDate: new Date(slot.id) }))
        .sort((a, b) => a.startDate - b.startDate);

    const allCol = document.createElement("div");
    allCol.className = "slot-column";

    const allHeader = document.createElement("div");
    allHeader.className = "slot-section-header";
    allHeader.textContent = "All Available Times";

    const allContainer = document.createElement("div");
    allContainer.className = "slot-grid";
    sortedSlots.forEach((slot) => {
        const timeSlot = document.createElement("div");
        timeSlot.className = "time-slot";
        timeSlot.textContent = slot.text;
        timeSlot.dataset.id = slot.id;
        timeSlot.addEventListener("click", () => {
            document.querySelectorAll(".time-slot").forEach((el) => el.classList.remove("selected"));
            timeSlot.classList.add("selected");
            state.selectedSlotId = slot.id;
            if (state.selectedSlotId !== null) {
                // If a slot ID exists, ENABLE the button
                submitBtn.disabled = false;
            } else {
                // If no slot ID exists, DISABLE the button
                submitBtn.disabled = true;
            }
            // checkFormValidity();
        });
        allContainer.appendChild(timeSlot);
    });

    allCol.appendChild(allHeader);
    allCol.appendChild(allContainer);

    // Append both columns to wrapper
    wrapper.appendChild(recommendedCol);
    wrapper.appendChild(allCol);

    // Add to DOM
    elements.timeSlots.appendChild(wrapper);
    elements.timeSlotsSection.style.display = "block";
    // checkFormValidity();
}

// ----------------- Event Listeners -----------------

// Initialize date input min value to today
function initDateInput() {
    const today = new Date();
    elements.appointDate.min = formatDate(today);
}

function formatDOBToMMDDYYYY(dobString) {
    console.log("🚀 ~ formatDOBToMMDDYYYY ~ dobString:", dobString)
    // Split the date string (assuming format is "MM-DD-YYYY")
    const [year, month, day] = dobString.split("-");

    // Ensure the month, day, and year are all two digits for proper formatting
    const mm = String(month).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    const yyyy = String(year);

    return `${mm}-${dd}-${yyyy}`;
}

function renderPatientInfoBox(patient) {
    const infoBox = document.getElementById("accountInfoBox");
    if (!infoBox) return;

    if (state.searchByPhone) {
        // If searching by phone, do not show the account not found message
        if (patient && patient.first_name) {
            infoBox.innerHTML = `
                <p><strong>Name:</strong> ${patient.first_name} ${patient.last_name}</p>
                <p><strong>Email:</strong> ${patient.email || "N/A"}</p>
                <p><strong>Phone:</strong> ${patient.phone_number || "N/A"}</p>
                <p><strong>DOB:</strong> ${patient.date_of_birth}</p>
            `;
            infoBox.style.color = "black";
            infoBox.style.display = "block";
        } else {
            infoBox.innerHTML = ``;
            infoBox.style.color = "red";
            infoBox.style.display = "none";
            accountInfoBox.style.display = "none";
        }
    } else {
        // If searching by account number, show the account not found message
        if (patient && patient.first_name) {
            infoBox.innerHTML = `
                <p><strong>Name:</strong> ${patient.first_name} ${patient.last_name}</p>
                <p><strong>Email:</strong> ${patient.email || "N/A"}</p>
                <p><strong>Phone:</strong> ${patient.phone_number || "N/A"}</p>
                <p><strong>DOB:</strong> ${patient.date_of_birth}</p>
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

// Account number and location change
elements.accountNumber.addEventListener("input", () => {
    // Enforce only digits and max 6 characters
    elements.accountNumber.value = elements.accountNumber.value.replace(/\D/g, '');
});


elements.searchAccountBtn.addEventListener("click", async () => {
    const input = elements.accountNumber.value.trim(); // Get the input value

    // Reset previous patient state
    state.patientId = null;
    state.selectedPatientId = null;
    state.patients = [];
    state.searchedPatient = false;
    renderPatientInfoBox(null);
    renderAccountSelection([]);
    document.getElementById("accountSelection").style.display = "none"; // Hide dropdown initially

    // Check if the input contains only digits
    if (!/^\d+$/.test(input) || input.length === 0) {
        alert("Please enter a valid account number (<= 6 digits) or phone number (> 6 digits).");
        return; // Stop execution if input is invalid
    }

    showLoading(); // Show loading indicator

    if (input.length <= 6) {
        // ----- Treat as account number (<= 6 digits) -----
        state.searchByPhone = false;
        try {
            const response = await fetch(`${API_BASE_URL}/patient/${input}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const result = await response.json();

            if (result?.account_number && result?.first_name) {
                const mappedPatient = {
                    id: result.account_number,
                    first_name: result.first_name,
                    last_name: result.last_name,
                    phone_number: result.phone,
                    date_of_birth: result.dob,
                    email: "", // Not provided in response
                };
                state.patientId = mappedPatient.id; // Set the main patient ID
                state.selectedPatientId = mappedPatient.id; // Set the selected ID (as there's only one)
                state.searchedPatient = true; // Mark search as successful
                state.patientDetails = mappedPatient;
                renderPatientInfoBox(mappedPatient);
            } else {
                // Patient not found by account number
                renderPatientInfoBox(null); // Show "not found" message via this function
                state.searchedPatient = false; // Mark search as failed
            }
        } catch (err) {
            console.error("Error fetching patient info by account number:", err);
            renderPatientInfoBox(null); // Show error/not found
            state.searchedPatient = false;
        } finally {
            hideLoading();
        }
    } else {
        // ----- Treat as phone number (> 6 digits) -----
        state.searchByPhone = true;
        try {
            const response = await fetch(`${API_BASE_URL}/patient-info-by-phone`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone_number: input }),
            });
            const result = await response.json();

            if (result && result.length > 0) {
                state.patients = result; // Store the list of patients found
                renderAccountSelection(result); // Display the dropdown
                state.searchedPatient = true; // Mark search as having found potential matches
                // ❗ DO NOT set selectedPatientId/patientId here yet. Wait for user selection.
                renderPatientInfoBox(null); // Clear info box until user selects
            } else {
                // No patients found for this phone number
                renderPatientInfoBox(null); // Clear info box
                alert("No patients found matching this phone number."); // Inform user
                state.searchedPatient = false; // Mark search as failed
            }
        } catch (err) {
            console.error("Error fetching patient info by phone number:", err);
            renderPatientInfoBox(null);
            alert("An error occurred while searching by phone number.");
            state.searchedPatient = false;
        } finally {
            hideLoading();
        }
    }
    // Re-check validity and fetch appointments after search attempt
    // checkFormValidity();
    if (state.selectedPatientId && elements.locationSelect.value) {
        fetchAppointments(); // Fetch appointments only if a patient is confirmed
    } else {
        renderAppointments([]); // Clear appointments if no patient confirmed
        elements.sameProviderSection.style.display = 'none'; // Hide same provider
    }
});


// Function to render the patient selection options (if multiple accounts found)
function renderAccountSelection(accounts) {
    state.accounts = accounts;
    const accountSelect = document.getElementById("accountSelect");
    const accountSelectionDiv = document.getElementById("accountSelection");

    // Clear previous options
    accountSelect.innerHTML = "";

    // Add a default option to prompt the user to select
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Account --";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    accountSelect.appendChild(defaultOption);

    // Loop through each patient and add detailed info
    accounts.forEach((patient) => {
        const option = document.createElement("option");
        option.value = patient.acct_no;

        // Display patient info in a detailed and user-friendly way
        const patientInfo = `
            ${patient.first_name} ${patient.last_name} 
            (${patient.dob}) 
            - ${patient.acct_no || "N/A"} 
          
        `;

        option.textContent = patientInfo;
        accountSelect.appendChild(option);
    });

    // Display the patient selection dropdown
    accountSelectionDiv.style.display = "block";
}


// Event listener for when a patient is selected (search by phone)
document.getElementById("accountSelect").addEventListener("change", (event) => {
    const selectedIdString = event.target.value; // Get the ID (as a string) from the selected <option>

    // Reset if the default "-- Select Patient --" option is chosen
    if (!selectedIdString) {
        state.selectedPatientId = null;
        state.patientId = null;
        renderPatientInfoBox(null); // Clear info box
        // checkFormValidity(); // Re-check form validity
        fetchAppointments(); // Re-fetch/clear appointments based on lack of patient ID
        return;
    }

    // Convert the selected ID string to a number for comparison if your patient IDs are numbers
    // If your IDs might be strings, you can skip parseInt and compare strings directly
    const selectedId = parseInt(selectedIdString, 10);

    // Find the selected patient object from the stored list (state.patients)
    const selectedPatient = state.patients.find(patient => patient.id === selectedId);
    state.patientDetails = selectedPatient;

    if (selectedPatient) {
        // ✅ Correctly update BOTH state variables with the *selected* patient's ID
        state.selectedPatientId = selectedPatient.id;
        state.patientId = selectedPatient.id;
        renderPatientInfoBox(selectedPatient); // Display the info for the *selected* patient
    } else {
        // Should not happen if the dropdown is populated correctly, but handle defensively
        state.selectedPatientId = null;
        state.patientId = null;
        renderPatientInfoBox(null);
        console.error("Selected patient ID not found in state.patients list.");
    }

    // After selecting a patient, re-check form validity and fetch appointments
    // checkFormValidity();
    fetchAppointments(); // Fetch appointments for the newly selected patient
});

// Modify the locationSelect event listener to handle special locations
elements.locationSelect.addEventListener("change", () => {
    fetchAppointments();
    // checkFormValidity();

    // Get the selected location text
    const selectedOption = elements.locationSelect.options[elements.locationSelect.selectedIndex];
    const selectedLocationName = selectedOption.textContent;

    // Check if it's one of the special locations
    if (selectedLocationName === "Mental Health - Virtual") {
        // Set visit type to psych and hide the visit type selection
        elements.visitType.value = "psych";
        document.querySelector(".form-group:has(#visitType)").style.display = "none";
    } else if (selectedLocationName === "Nutrition - Virtual") {
        // Set visit type to nutri and hide the visit type selection
        elements.visitType.value = "nutri";
        document.querySelector(".form-group:has(#visitType)").style.display = "none";
    } else if (selectedLocationName === "Telemedicine") {
        // Set visit type to televisit and hide the visit type selection
        elements.visitType.value = "televisit";
        document.querySelector(".form-group:has(#visitType)").style.display = "none";
    } else {
        // For other locations, show the visit type selection
        const visitTypeGroup = document.querySelector(".form-group:has(#visitType)");
        if (visitTypeGroup) visitTypeGroup.style.display = "block";

        // Reset visit type to empty
        elements.visitType.value = "";

        // Hide restricted visit types
        const restrictedValues = ["psych", "nutri"];
        Array.from(elements.visitType.options).forEach((option) => {
            if (restrictedValues.includes(option.value)) {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        });
    }
});

// Visit type change
elements.visitType.addEventListener("change", () => {
    // checkFormValidity();
});

// Same provider change
elements.sameProvider.addEventListener("change", () => {
    if (state.currentStep === 3) {
        fetchProviders();
    }
});

// Appointment date change
elements.appointDate.addEventListener("change", () => {
    // checkFormValidity();
});

// Provider select change
elements.providerSelect.addEventListener("change", () => {
    const selectedOption = elements.providerSelect.options[elements.providerSelect.selectedIndex];
    const providerId = selectedOption.value;
    const availableDate = selectedOption.getAttribute("data-date");
    const start_time = selectedOption.getAttribute("data-start_time");
    const end_time = selectedOption.getAttribute("data-end_time");

    // 🛠️ Force the appointDate field to match the selected provider's available date
    if (availableDate) {
        elements.appointDate.value = formatDate(new Date(availableDate));
    }

    if (start_time && end_time) {
        fetchTimeSlots(providerId, availableDate, start_time, end_time);
    } else {
        console.error("❌ Missing time range for provider selection.");
    }

    // checkFormValidity();
});

// Step navigation
// elements.step1Next.addEventListener("click", () => {
//     if (!isStepValid(1)) {
//         // Add alert if location is not selected
//         if (elements.locationSelect.value === "") {
//             alert("Please select a location before continuing.");
//         }
//         // Already handled alert for patient not searched below
//         return;
//     }

//     // ⚠️ Warn if account is filled but not searched
//     const acc = elements.accountNumber.value.trim();
//     if (acc !== "" && (!state.searchedPatient || !state.patientId)) {
//         alert("Please search and confirm a valid account before continuing.");
//         return;
//     }

//     goToStep(2);
// });

elements.step1Next.addEventListener("click", () => {
    // Get references to the input fields for this step
    const accountNumberInput = document.getElementById('accountNumber');
    const locationSelect = document.getElementById('locationSelect');

    // Get the current values, trimming whitespace from the text input
    const accountNumberValue = accountNumberInput.value.trim();
    const locationValue = locationSelect.value;

    // --- Validation Logic ---

    // First, remove any previous error styles
    accountNumberInput.classList.remove('is-invalid');
    locationSelect.classList.remove('is-invalid');

    // Create a list to hold error messages
    const errors = [];

    // Check if account number is empty
    if (accountNumberValue === '') {
        errors.push('Please enter an Account or Phone number.');
        accountNumberInput.classList.add('is-invalid'); // Add red border
    }

    // Check if a location has been selected
    if (locationValue === '' || locationValue === null) {
        errors.push('Please select a location.');
        locationSelect.classList.add('is-invalid'); // Add red border
    }

    // --- Decision ---

    // If the errors array is empty, it means everything is valid
    if (errors.length === 0) {
        // No errors, proceed to the next step
        goToStep(2);
    } else {
        // If there are errors, show them in an alert
        // The red borders on the fields will also guide the user
        console.log('error')
    }
});




elements.step2Next.addEventListener("click", () => {
    const visitReason = elements.visitReason.value.trim()

    const visitType = elements.visitType.value.trim();
    const appointDate = elements.appointDate.value.trim();

    if (!visitReason) {
        alert("Please select a visit reason before continuing.");
        return;
    }

    if (!visitType) {
        alert("Please select a visit type before continuing.");
        return;
    }

    if (!appointDate) {
        alert("Please select a date for your appointment.");
        return;
    }

    if (isStepValid(2)) {
        goToStep(3);
    }
});


elements.step2Back.addEventListener("click", () => {
    goToStep(1);
});

elements.step3Back.addEventListener("click", () => {
    // Clear previous time slots and selected provider
    elements.timeSlots.innerHTML = "";
    elements.timeSlotsSection.style.display = "none";
    state.selectedSlotId = null;

    // Optional: reset provider dropdown if needed
    // elements.providerSelect.value = "";

    goToStep(2);
});


// Form submission
elements.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedAccountNumber = elements.accountSelect.value;

    // 2. Find the full account object from our stored state.
    //    We use == because option values are strings, but the ID might be a number.
    const selectedAccount = state.accounts.find(acc => acc.acct_no === selectedAccountNumber);

    // 3. Get the account number. If nothing is found, it will be null.
    const accountNumber = selectedAccountNumber;

    // const accountNumber = elements.accountNumber.value.trim();
    const locationIds = getSelectedLocationIds();
    const providerId = elements.providerSelect.value;
    const patient = state.patientDetails;
    const selectedSlot = document.querySelector(".time-slot.selected");
    const visitType = elements.visitType.value;
    const appointDate = elements.appointDate.value;
    const visitReason = elements.visitReason?.value;

    if (!locationIds || !providerId || !selectedSlot || !visitType || !appointDate || !visitReason) {
        alert("Missing required fields. Please complete the form.");
        return;
    }

    // Get site_name for location_name
    const selectedLocation = locationOptions.find(loc => loc.value === locationIds);
    const locationName = selectedLocation ? selectedLocation.site_name : locationIds;

    // Get provider_name in "LastName,FirstName" format (no spaces)
    let providerName = "";
    const providerObj = state.providers.find(p => String(p.id) === String(providerId));
    if (providerObj && providerObj.text) {
        let [last, first] = providerObj.text.split(',').map(s => s.trim());
        if (first && last) {
            providerName = `${last},${first}`.replace(/\s+/g, '');
        } else {
            let parts = providerObj.text.trim().split(' ');
            if (parts.length >= 2) {
                providerName = `${parts[1]},${parts[0]}`.replace(/\s+/g, '');
            } else {
                providerName = providerObj.text.replace(/\s+/g, '');
            }
        }
    } else {
        providerName = providerId;
    }

    // Parse start and end time from slot text (e.g. "9:00 AM - 9:15 AM" or "9:00 AM")
    let startTime = selectedSlot.innerText;
    let endTime = "";
    if (startTime.includes(" to ")) {
        [startTime, endTime] = startTime.split(" to ").map(s => s.trim());
    } else if (startTime.includes("-")) {
        [startTime, endTime] = startTime.split("-").map(s => s.trim());
    }
    if (!endTime) {
        // If only one time, add 15 minutes to startTime for endTime
        function addMinutesToTime(timeStr, minsToAdd) {
            let [time, period] = timeStr.split(" ");
            let [hour, minute] = time.split(":").map(Number);
            if (period === "PM" && hour !== 12) hour += 12;
            if (period === "AM" && hour === 12) hour = 0;
            let date = new Date(2000, 0, 1, hour, minute);
            date.setMinutes(date.getMinutes() + minsToAdd);
            let newHour = date.getHours();
            let newMinute = date.getMinutes();
            let newPeriod = newHour >= 12 ? "PM" : "AM";
            newHour = newHour % 12;
            if (newHour === 0) newHour = 12;
            return `${String(newHour).padStart(2, "0")}:${String(newMinute).padStart(2, "0")} ${newPeriod}`;
        }
        endTime = addMinutesToTime(startTime, 15);
    }

    // Format appointment_date as MM/DD/YYYY
    let appointmentDate = appointDate;
    if (/^\d{4}-\d{2}-\d{2}$/.test(appointDate)) {
        const [yyyy, mm, dd] = appointDate.split("-");
        appointmentDate = `${mm}/${dd}/${yyyy}`;
    }
    let finalAccountNumber;

    // Get the current value from the dropdown. It will be an empty string "" if "-- Select --" is chosen.
    const selectedDropdownValue = elements.accountSelect.value;

    // Check if the phone number flow was activated (dropdown is visible) AND a valid choice was made.
    if (elements.accountSelection.style.display !== 'none' && selectedDropdownValue) {

        // --- FLOW 1: USER SELECTED FROM THE DROPDOWN ---
        // This is the highest priority. The dropdown value IS the account number.
        finalAccountNumber = selectedDropdownValue;
        console.log("Using account number from dropdown selection:", finalAccountNumber);

    } else {

        // --- FLOW 2: USER TYPED DIRECTLY (OR IGNORED THE DROPDOWN) ---
        // Fall back to the original text input as the source of truth.
        finalAccountNumber = elements.accountNumber.value.trim();
        console.log("Using account number from text input:", finalAccountNumber);
    }

    const payload = {
        account_number: finalAccountNumber,
        location_name: locationName,
        provider_name: providerName,
        appointment_date: appointmentDate,
        start_time: startTime,
        end_time: endTime,
        visit_type: visitType,
        reason: visitReason,
        source: 'follow_up_scheduler',
    };

    // Show success modal immediately, do not show loader
    showSuccessModal();

    // Fire-and-forget the request
    fetch("https://ecw-fast-api-277265452244.us-central1.run.app/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).catch((err) => {
        console.error("API error:", err);
        // Optionally handle error silently
    });

    // Reset form after showing success
    elements.form.reset();
    state.selectedSlotId = null;
    goToStep(1);
});


// Close success modal
elements.closeSuccessModal.addEventListener("click", () => {
    hideSuccessModal();
    // Reset form
    elements.form.reset();
    state.selectedSlotId = null;
    goToStep(1);
});

// ----------------- Initialization -----------------
document.addEventListener("DOMContentLoaded", () => {
    // Populate location dropdown
    populateLocationDropdown();

    // Initialize date input
    initDateInput();

    // Set initial form state
    // checkFormValidity();

    // Initialize visit type visibility based on selected location
    elements.locationSelect.dispatchEvent(new Event("change"));
});

// Select the chips and date input elements
const chip3Days = document.getElementById("chip-3days");

const chip7Days = document.getElementById("chip-7days");
const chip14Days = document.getElementById("chip-14days");

const appointDateInput = document.getElementById("appointDate");

// Add click event listeners to the chips
chip3Days.addEventListener("click", () => setDate(3));
chip7Days.addEventListener("click", () => setDate(7));
chip14Days.addEventListener("click", () => setDate(14));


// Function to set the date
function setDate(daysFromToday) {
    // Remove the 'selected' class from both chips
    chip3Days.classList.remove("selected");
    chip7Days.classList.remove("selected");
    chip14Days.classList.remove("selected");


    // Add 'selected' class to the clicked chip
    if (daysFromToday === 3) {
        chip3Days.classList.add("selected");
    } else if (daysFromToday === 7) {
        chip7Days.classList.add("selected");
    } else if (daysFromToday === 14) {
        chip14Days.classList.add("selected");
    }

    // Calculate the new date based on the selected days
    const today = new Date();
    today.setDate(today.getDate() + daysFromToday);

    // Format the date in YYYY-MM-DD format
    const formattedDate = today.toISOString().split("T")[0];

    // Set the input value to the calculated date
    appointDateInput.value = formattedDate;

    // Trigger change event to update form validity
    appointDateInput.dispatchEvent(new Event("change"));
}