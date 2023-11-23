import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

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

let uniqueId = localStorage.getItem("uniqueId");
const cartNoPara = document.querySelector("#cartNo");
const cartBtn = document.getElementById("cartBtn");
let cartTotalPricePara = document.querySelector(".cartTotalPricePara");
const cartList = document.querySelector(".cartList")

function generateRandomId() {
    // Get the current timestamp
    const timestamp = new Date().getTime();

    // Generate a random number (use Math.random() or a more advanced random function)
    const randomNumber = Math.floor(Math.random() * 1000);

    // Concatenate timestamp and random number to create the ID
    const randomId = `${timestamp}${randomNumber}`;

    return randomId;
}

if (!uniqueId) {
    uniqueId = generateRandomId();
    localStorage.setItem("uniqueId", uniqueId);
}

let cartQuant;
const getCarts = () => {
    onSnapshot(collection(db, uniqueId), (data) => {
        cartQuant = data.size;
        if (cartQuant) {
            cartNoPara.style.display = "flex";
            cartNoPara.innerHTML = `${cartQuant}`
        }
    })
}

getCarts();



async function addToChart(productId, productTitle, productPrice, productImg) {
    try {
        let singleProduct = {
            productId,
            productTitle,
            productPrice,
            productImg
        }
        const docRef = await addDoc(collection(db, uniqueId), {
            ...singleProduct,
            time: new Date().toLocaleString()
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


cartBtn.addEventListener("click", () => {

    cartList.innerHTML = "";
    let cartTotalPrice = 0;

    onSnapshot(collection(db, uniqueId), (data) => {
        cartQuant = data.size;
        if (cartQuant) {
            data.docChanges().forEach((singleCartProduct) => {
                const cartProductImg = singleCartProduct.doc.data().productImg;
                const cartProductTitle = singleCartProduct.doc.data().productTitle;
                const cartProductPrice = +singleCartProduct.doc.data().productPrice;
                cartTotalPrice += cartProductPrice;

                cartList.innerHTML += `
                <li class="cartProductList mt-3">
                    <div class="cartProductDetailDiv">
                        <p><i class="fa-regular fa-circle" style="color: #4B1EB1;"></i></p>
                        <div class="cartProductImgDiv">
                            <img src=${cartProductImg} alt="">
                        </div>
                        <div class="cartProductTitle">
                            <p id="cartProductTitlePara">${cartProductTitle}</p>
                        </div>
                    </div>
                    <div class="cartProductPrice">
                        <p id="cartProductPricePara">$${cartProductPrice.toFixed(2)}</p>
                    </div>
                </li>
                `
                cartTotalPricePara.innerHTML = `$${cartTotalPrice}`
            })
        }

    })

})

window.addToChart = addToChart