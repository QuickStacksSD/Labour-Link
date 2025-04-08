// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8QcvOGY_NPGa4MHIMbg5tt5z7dslllY",
  authDomain: "quickstacks-4ab15.firebaseapp.com",
  databaseURL: "https://quickstacks-4ab15-default-rtdb.firebaseio.com",
  projectId: "quickstacks-4ab15",
  storageBucket: "quickstacks-4ab15.firebasestorage.app",
  messagingSenderId: "754822704954",
  appId: "1:754822704954:web:8f6df06ffd907227e5ea03",
  measurementId: "G-7MEQS4XKFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Form submission handler
document.getElementById('quoteForm').addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const jobType = document.getElementById("jobType").value;
    const budget = document.getElementById("budget").value;
    const description = document.getElementById("description").value;

    // Create a reference to the 'serviceRequests' node in the database
    const requestsRef = ref(database, 'serviceRequests');

    // Push new data to Firebase
    push(requestsRef, {
        name: name,
        email: email,
        jobType: jobType,
        budget: budget,
        description: description,
        timestamp: Date.now() // Save the time of the request
    }).then(() => {
        alert("Your request has been successfully submitted! Expect an email shortly!");
        document.getElementById("quoteForm").reset(); // Reset the form
    }).catch((error) => {
        console.error("Error saving data to Firebase:", error);
        alert("There was an error submitting your request. Please try again.");
    });
});
