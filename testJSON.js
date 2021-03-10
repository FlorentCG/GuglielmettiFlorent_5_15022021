fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(productsArray => renderAllProducts(productsArray))


function renderAllProducts(productsArray){
    productsArray.forEach(product => renderOneProduct(product))
}

const findDiv = document.querySelector("#clothes-box")
function renderOneproduct(product){
    const newElement = document.createElement("div")
    newElement.className =  "content"
    newElement.innerHTML = 
    <div class='item-card'>
        <div class= "center">
            <img src="${product.image}" class="image"></img>
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <button class="add-item">Add to cart</button>
        </div>
    </div>
    
    findDiv.append(newElement)
}