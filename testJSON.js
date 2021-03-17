fetch('http://localhost:3000/api/teddies')
  

  
  .then((response) => response.json()
  .then((productsArray) => {renderAllProducts(productsArray);
  function renderAllProducts(productsArray)
      console.log(productsArray)
      productsArray.forEach(product => renderOneProduct(product));
  
  function renderOneproduct(product){
    // On pointe sur le conteneur principal
    const containerDiv = document.querySelector("#clothes-box")

    // On crée un <div class="content">
    const contentDiv = document.createElement("div")
    contentDiv.className =  "content"
    
    // On crée un <div class="item-card">
    const itemCardDiv = document.createElement('div')
    itemCardDiv.className = 'item-card'

    // On crée un <div class="center">
    const innerDiv = document.createElement('div')
    innerDiv.className = 'center'

    // On crée l'image du produit
    const cardImage = document.createElement('img')
    cardImage.className = 'image'
    cardImage.src = `${product.image}`

    // On ajoute l'image dans son conteneur (<div class="center">)
    innerDiv.appendChild(cardImage)

    // On ajoute le <div class="center"> dans la vignette (<div class="item-card">)
    itemCartDiv.appendChild(innerDiv)

    // On ajoute la vignette à notre content div
    contentDiv.appendChild(itemCartDiv)
    
    // On ajoute notre conteneur de vignettes à notre conteneur principal
    containerDiv.append(contentDiv)
}

const findDiv = document.querySelector("#clothes-box")
function renderOneproduct(product){
    const newElement = document.createElement("div")
    newElement.className =  "content"
    newElement.innerHTML = `
    <div class='item-card'>
        <div class= "center">
            <img src=${product.image} class="image"></img>
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <button class="add-item">Add to cart</button>
        </div>
    `
    findDiv.append(newElement)

}
    }))


/**  A URL returns TEXT data.
var url = "http://localhost:3000/api/teddies";
 
 

 
 
function doGetJSON()  {
 
  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);
 
  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);
 
        if(!response.ok) {
           throw new Error("HTTP error, status = " + response.status);
        }
        // Get JSON Promise from response object:
        var myJSON_promise = response.json();
 
        // Returns a Promise object.
        return myJSON_promise;
    })
    .then(function(myJSON) {
        console.log("OK! JSON:");
        console.log(myJSON);
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });
 
}




/**fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(productsArray => renderAllProducts(productsArray))
function renderAllProducts(productsArray){
    productsArray.forEach(product => renderOneProduct(product))

function renderOneproduct(product){
    // On pointe sur le conteneur principal
    const containerDiv = document.querySelector("#clothes-box")

    // On crée un <div class="content">
    const contentDiv = document.createElement("div")
    contentDiv.className =  "content"
    
    // On crée un <div class="item-card">
    const itemCardDiv = document.createElement('div')
    itemCardDiv.className = 'item-card'

    // On crée un <div class="center">
    const innerDiv = document.createElement('div')
    innerDiv.className = 'center'

    
    
  

    // On ajoute le <div class="center"> dans la vignette (<div class="item-card">)
    itemCartDiv.appendChild(innerDiv)

    // On ajoute la vignette à notre content div
    contentDiv.appendChild(itemCartDiv)
    
    // On ajoute notre conteneur de vignettes à notre conteneur principal
    containerDiv.append(contentDiv)



}
    findDiv.append(newElement)

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
</div>**/