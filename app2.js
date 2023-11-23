import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB4N3Fq_hCmbongv16YOU1AlVxufh-I730",
    authDomain: "classy-fashion-huzaifa.firebaseapp.com",
    projectId: "classy-fashion-huzaifa",
    storageBucket: "classy-fashion-huzaifa.appspot.com",
    messagingSenderId: "446514660959",
    appId: "1:446514660959:web:163baf7f785506c652fdea"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

let userUid = localStorage.getItem("uniqueId");

function generateRandomId() {
    // Get the current timestamp
    const timestamp = new Date().getTime();

    // Generate a random number (use Math.random() or a more advanced random function)
    const randomNumber = Math.floor(Math.random() * 1000);

    // Concatenate timestamp and random number to create the ID
    const randomId = `${timestamp}${randomNumber}`;

    return randomId;
}

if (!userUid) {
    userUid = generateRandomId();
    localStorage.setItem("uniqueId", userUid);
}

console.log(localStorage.getItem("uniqueId"));
const cartNoPara = document.querySelector("#cartNo");


async function addToChart(productId) {
    try {
        const uniqueId = generateRandomId();
        localStorage.setItem("uniqueId", uniqueId);
        let singleProduct = {
            productId: productId
        }
        const docRef = await addDoc(collection(db, uniqueId), {
            ...singleProduct
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

window.addToChart = addToChart