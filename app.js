const fetchPromise = fetch('http://localhost:3000/api/teddies');

const main = document.getElementById("clothes-box");fetchPromise.then(response => {
  return response.json();
}).then(product => {
  main.innerHTML = listOfNames(product);
  
})

  function listOfNames(product) {
    const names = product.map(product => `<li>${product.name} - ${product.price} -${product.description}</li>`).join("\n");
    return `<ul>${names}</ul>`
  }

/** 
  .then(product => {
    main.innerHTML = listOfPrice(product);})
function listOfPrice(product) {
  const prices = product.map(product => `<li>${product.price}</li>`).join("\n");
  return `<ul>${prices}</ul>`
}


document.querySelector("#GO_TO_PRODUCT").addEventListener('click', function(){});
*/