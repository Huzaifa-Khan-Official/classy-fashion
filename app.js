const containerDiv = document.querySelector(".containerDiv")
const home = document.querySelector("#home")

const homeFunc = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            containerDiv.innerHTML = "";
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
            // console.log(electronics);
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