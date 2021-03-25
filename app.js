let products = [];

fetchData();

function fetchData() {
  fetch('http://localhost:3000/api/teddies/')
    .then(response => response.json())
    .then(json => products = json)
    .then(() => {
      for (let item of products) {
        toAppend.innerHTML += `
<div class="clothes-box">
<p>${item.name}</p>
<h2>${item.price}</h2>
<div>${'src', item.imageUrl}</div>
<img class="product_image" src="${item.image}" alt="${item.name}">

</div>
`


      }
    });
    
}




/**const fetchPromise = fetch('http://localhost:3000/api/teddies');

const main = document.getElementById("clothes-box");fetchPromise.then(response => {
  return response.json();
}).then(products => {
  main.appendChild(listOfNames)(products);})
 
  function listOfNames(products) {
    
    // On Crée un <ul> vide
    const listHtml = document.createElement('ul')
    
    // On parcourt le tytableau de sproduits
    products.forEach(function(product){
      // On crée un <li> vide
      const listItem = document.createElement('li');

      // On y ajoute les infos du pproduit
      listItem.textContent=product.name
      

      

      // On ajoute notre <li> à notre <ul>
      listHtml.appendChild(listItem)
    })

    return listHtml
  }

  /**  main.innerHTML = listOfNames(product);
  
})

  function listOfNames(product) {
    const names = product.map(product => `<li>${product.name} - ${product.price} -${product.description}</li>`).join("\n");
    return `<ul>${names}</ul>`
  }


 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
  .then(product => {
    main.innerHTML = listOfPrice(product);})
function listOfPrice(product) {
  const prices = product.map(product => `<li>${product.price}</li>`).join("\n");
  return `<ul>${prices}</ul>`
}


document.querySelector("#GO_TO_PRODUCT").addEventListener('click', function(){});
*/