const containerDiv = document.querySelector(".containerDiv")
const home = document.querySelector("#home")

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
                const productRating = Math.ceil(currentProduct.rating.rate);
                let ratingIcons;
                if (productRating == 1) {
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 2) {
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 3) {
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 4) {
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                } else if (productRating == 5) {
                    ratingIcons = `<i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i><i class="fa-solid fa-star" style="color: #18C8A8;"></i>`
                } else {
                    ratingIcons = `<i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i><i class="fa-regular fa-star" style="color: #18C8A8;"></i>`
                }
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
                            <div><p>${ratingIcons} (${productRatingCount})</p></div>
                            <div class="btnDiv mt-3">                    
                                <a href="#" class="btn btn-primary">Add to chart</a>
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