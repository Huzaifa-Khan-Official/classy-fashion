const containerDiv = document.querySelector(".containerDiv")
const cartList = document.querySelector(".cartList")
const home = document.querySelector("#home");
const cartNoPara = document.querySelector("#cartNo");
let cartProductIds = JSON.parse(localStorage.getItem("cartProductIds")) || []; // geting cartProductIds from storage

let cartQuant = cartProductIds.length;

const homeFunc = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            containerDiv.innerHTML = "";
            // remaing nav-items
            womensClothing.classList.remove("active")
            electronics.classList.remove("active")
            jewelery.classList.remove("active")
            mensClothing.classList.remove("active")
            // active nav-item
            home.classList.add("active");
            products.forEach(currentProduct => {
                const productId = currentProduct.id;
                const productTitle = currentProduct.title.slice(0, 50);
                const productPrice = currentProduct.price;
                const productImg = currentProduct.image;
                const productDesc = currentProduct.description.slice(0, 100);
                const productCategory = currentProduct.category;
                const productRating = Math.round(currentProduct.rating.rate);
                const productRatingCount = currentProduct.rating.count;
                let ratingIcons;

                // rating 1
                if (productRating == 1) {
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 2) {
                    // rating 2
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 3) {
                    // rating 3
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 4) {
                    // rating 4
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 5) {
                    // rating 5
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i>`
                } else {
                    // rating 0
                    ratingIcons = `<i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                }

                containerDiv.innerHTML += `
                    <div class="card">
                        <div class="p-2">                        
                            <img src="${productImg}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="titleDiv">                    
                                <h6 class="card-title">${productTitle}</h6>
                            </div>
                            <div>
                                <h5 class="card-title">$${productPrice}</h5>
                            </div>
                            <div class="descDiv">                    
                                <p class="card-text">${productDesc}...</p>
                            </div>
                            <div><p>${ratingIcons} ${productRating}/5 (${productRatingCount})</p></div>
                            <div class="btnDiv mt-3">                    
                                <button class="btn btn-primary" onclick="addToChart(${productId})">Add to chart</button>
                            </div>
                        </div>
                    </div>
                `
            });
        })
        .catch(err => console.log(err));
}

homeFunc()

home.addEventListener("click", () => {
    homeFunc()
});


const electronics = document.querySelector("#electronics");
const jewelery = document.querySelector("#jewelery");
const mensClothing = document.querySelector("#mensClothing");
const womensClothing = document.querySelector("#womensClothing");

electronics.addEventListener("click", () => {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(products => {
            containerDiv.innerHTML = "";
            // remaing nav-items
            home.classList.remove("active")
            jewelery.classList.remove("active")
            mensClothing.classList.remove("active")
            womensClothing.classList.remove("active")
            // active nav-item
            electronics.classList.add("active");
            products.forEach(currentProduct => {
                const productId = currentProduct.id;
                const productTitle = currentProduct.title.slice(0, 50);
                const productPrice = currentProduct.price;
                const productImg = currentProduct.image;
                const productDesc = currentProduct.description.slice(0, 100);
                const productCategory = currentProduct.category;
                const productRating = currentProduct.rating.rate;
                const productRatingCount = currentProduct.rating.count;
                containerDiv.innerHTML += `
            <div class="card">
                <img src="${productImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="titleDiv">                    
                        <h6 class="card-title">${productTitle}</h6>
                    </div>
                    <div>
                        <h5 class="card-title">$${productPrice}</h5>
                    </div>
                    <div class="descDiv">                    
                        <p class="card-text">${productDesc}...</p>
                    </div>
                    <div class="btnDiv mt-3">                    
                        <a href="#" class="btn btn-primary">Add to chart</a>
                    </div>
                </div>
            </div>
            `
            });
        })
        .catch(err => console.log(err));
})

jewelery.addEventListener("click", () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(products => {
            containerDiv.innerHTML = "";
            // remaing nav-items
            home.classList.remove("active")
            electronics.classList.remove("active")
            mensClothing.classList.remove("active")
            womensClothing.classList.remove("active")
            // active nav-item
            jewelery.classList.add("active");
            products.forEach(currentProduct => {
                const productId = currentProduct.id;
                const productTitle = currentProduct.title.slice(0, 50);
                const productPrice = currentProduct.price;
                const productImg = currentProduct.image;
                const productDesc = currentProduct.description.slice(0, 100);
                const productCategory = currentProduct.category;
                const productRating = currentProduct.rating.rate;
                const productRatingCount = currentProduct.rating.count;
                containerDiv.innerHTML += `
            <div class="card">
                <img src="${productImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="titleDiv">                    
                        <h6 class="card-title">${productTitle}</h6>
                    </div>
                    <div>
                        <h5 class="card-title">$${productPrice}</h5>
                    </div>
                    <div class="descDiv">                    
                        <p class="card-text">${productDesc}...</p>
                    </div>
                    <div class="btnDiv mt-3">                    
                        <a href="#" class="btn btn-primary">Add to chart</a>
                    </div>
                </div>
            </div>
            `
            });
        })
        .catch(err => console.log(err));
})

mensClothing.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => res.json())
        .then(products => {
            containerDiv.innerHTML = "";
            // remaing nav-items
            home.classList.remove("active")
            electronics.classList.remove("active")
            jewelery.classList.remove("active")
            womensClothing.classList.remove("active")
            // active nav-item
            mensClothing.classList.add("active");
            products.forEach(currentProduct => {
                const productId = currentProduct.id;
                const productTitle = currentProduct.title.slice(0, 50);
                const productPrice = currentProduct.price;
                const productImg = currentProduct.image;
                const productDesc = currentProduct.description.slice(0, 100);
                const productCategory = currentProduct.category;
                const productRating = currentProduct.rating.rate;
                const productRatingCount = currentProduct.rating.count;
                containerDiv.innerHTML += `
            <div class="card">
                <img src="${productImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="titleDiv">                    
                        <h6 class="card-title">${productTitle}</h6>
                    </div>
                    <div class="descDiv">                    
                        <p class="card-text">${productDesc}...</p>
                    </div>
                    <div>
                        <h5 class="card-title">$${productPrice}</h5>
                    </div>
                    <div class="btnDiv mt-3">                    
                        <a href="#" class="btn btn-primary">Add to chart</a>
                    </div>
                </div>
            </div>
            `
            });
        })
        .catch(err => console.log(err));
})

womensClothing.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => res.json())
        .then(products => {
            containerDiv.innerHTML = "";
            // remaing nav-items
            home.classList.remove("active")
            electronics.classList.remove("active")
            jewelery.classList.remove("active")
            mensClothing.classList.remove("active")
            // active nav-item
            womensClothing.classList.add("active");
            products.forEach(currentProduct => {
                const productId = currentProduct.id;
                const productTitle = currentProduct.title.slice(0, 50);
                const productPrice = currentProduct.price;
                const productImg = currentProduct.image;
                const productDesc = currentProduct.description.slice(0, 100);
                const productCategory = currentProduct.category;
                const productRating = currentProduct.rating.rate;
                const productRatingCount = currentProduct.rating.count;
                containerDiv.innerHTML += `
            <div class="card">
                <img src="${productImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="titleDiv">                    
                        <h6 class="card-title">${productTitle}</h6>
                    </div>
                    <div>
                        <h5 class="card-title">$${productPrice}</h5>
                    </div>
                    <div class="descDiv">                    
                        <p class="card-text">${productDesc}...</p>
                    </div>
                    <div class="btnDiv mt-3">                    
                        <a href="#" class="btn btn-primary">Add to chart</a>
                    </div>
                </div>
            </div>
            `
            });
        })
        .catch(err => console.log(err));
})


function addToChart(productId) {
    let cartProductIds = JSON.parse(localStorage.getItem("cartProductIds")) || [];
    let singleProduct = {
        productId: productId
    }
    cartProductIds.push(singleProduct)
    localStorage.setItem("cartProductIds", JSON.stringify(cartProductIds))


    let cartQuant = cartProductIds.length;
    cartNoPara.style.display = "flex";
    cartNoPara.innerHTML = `${cartQuant}`
}

if (cartQuant) {
    cartNoPara.style.display = "flex";
    cartNoPara.innerHTML = `${cartQuant}`
}

const cartBtn = document.getElementById("cartBtn");
let cartTotalPrice = 0;

cartBtn.addEventListener("click", () => {
    let cartProductIds = JSON.parse(localStorage.getItem("cartProductIds")) || [];
    let cartTotalPricePara = document.querySelector(".cartTotalPricePara");

    cartProductIds.forEach((currCartProduct) => {
        fetch(`https://fakestoreapi.com/products/${currCartProduct.productId}`)
            .then(res => res.json())
            .then(data => {
                const currentProduct = data
                const cartProductImg = currentProduct.image;
                const cartProductTitle = currentProduct.title;
                const cartProductPrice = currentProduct.price;
                cartTotalPrice += cartProductPrice;

                cartList.innerHTML += `
                <li class="cartProductList mt-3">
                    <div class="cartProductDetailDiv">
                        <p><i class="fa-regular fa-circle" style="color: #4B1EB1;"></i></p>
                        <div class="cartProductImgDiv">
                            <img src="${cartProductImg}" alt="">
                        </div>
                        <div class="cartProductTitle">
                            <p id="cartProductTitlePara">${cartProductTitle}</p>
                        </div>
                    </div>
                    <div class="cartProductPrice">
                        <p id="cartProductPricePara">$${cartProductPrice}</p>
                    </div>
                </li>
                `
                cartTotalPricePara.innerHTML = `$${cartTotalPrice}`
            })
            .catch(err => console.log(err));
    });
})


window.addToChart = addToChart