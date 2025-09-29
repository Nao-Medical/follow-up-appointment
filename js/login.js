// Firebase initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0Ktvcyt1TWH50oBa2nDYfpge7gEJdp_Y",
    authDomain: "follow-up-d588a.firebaseapp.com",
    projectId: "follow-up-d588a",
    storageBucket: "follow-up-d588a.firebasestorage.app",
    messagingSenderId: "103118827522",
    appId: "1:103118827522:web:31ed6cd3b53c54ea2c771b",
    measurementId: "G-MJN9QVL2G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// DOM elements
const signInButton = document.getElementById("signInButtonGoogle");
const errorMessage = document.getElementById("error-message");
const logoDiv = document.querySelector(".logo");

// Add logo dynamically
const addLogo = () => {
    const logoImg = document.createElement("img");
    logoImg.src = "https://naomedical.com/support/assets/logo-main.png";
    logoImg.alt = "Nao Medical Logo";
    logoDiv.appendChild(logoImg);
};

// Add loading state to button
const setButtonLoading = (isLoading) => {
    if (isLoading) {
        signInButton.disabled = true;
        signInButton.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Signing in...</span>
        `;
    } else {
        signInButton.disabled = false;
        signInButton.innerHTML = `
            <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="icon-google">
                <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
            </svg>
            <span>Sign in with Google</span>
        `;
    }
};

// Show error message with auto-hide
const showError = (message) => {
    errorMessage.textContent = message || "Only Nao Medical (@naomedical.com) accounts are authorized.";
    errorMessage.style.display = "block";
    errorMessage.classList.add("visible");

    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorMessage.classList.remove("visible");
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 300);
    }, 5000);
};

// Add event listener to the Google Sign-In button
signInButton.addEventListener("click", async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Check if the email belongs to Nao Medical
        if (!user.email.includes("naomedical.com")) {
            showError();
            await signOut(auth);
            setButtonLoading(false);
            return;
        }

        // Store user information in localStorage
        localStorage.setItem("userName", user.displayName);
        localStorage.setItem("userEmail", user.email);

        // Redirect to chatbot page
        window.location.href = "index.html";
    } catch (error) {
        console.error("Authentication Failed:", error.message);
        showError("Authentication failed. Please try again.");
        setButtonLoading(false);
    }
});

// Redirect if the user is already logged in
const redirectIfAuthenticated = () => {
    onAuthStateChanged(auth, (user) => {
        if (user && user.email.endsWith("@naomedical.com")) {
            window.location.href = "index.html";
        }
    });
};

// Add animated background elements
const animateBackground = () => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        const randomDelay = Math.random() * 5;
        shape.style.animationDelay = `${randomDelay}s`;
    });
};

// Initialize page
const initPage = () => {
    // addLogo();
    animateBackground();

    // Add subtle parallax effect
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const factor = (index + 1) * 10;
            const offsetX = (mouseX - 0.5) * factor;
            const offsetY = (mouseY - 0.5) * factor;

            shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
};

// Trigger authentication check on page load and back navigation
window.addEventListener("pageshow", redirectIfAuthenticated);
window.addEventListener("DOMContentLoaded", initPage);
redirectIfAuthenticated();