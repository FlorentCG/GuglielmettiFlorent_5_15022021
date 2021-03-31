// Initialiser le container
let container = document.getElementById("products_container");
let option = document.getElementById("option");
let container2 = document.getElementById("products_container2");
let res = document.getElementById('result');

let plus = document.getElementById('plus');
let moins = document.getElementById('moins');

//Récuperer id


/**const querystring_url_id = window.location.search;
    const params = new URLSearchParams (querystring_url_id);
  const urlProduit = params.get('id');
  fetch('http://localhost:3000/api/teddies/'+ urlProduit)
  
  .then(response => response.json())
  .then(product =>**/
    const querystring_url_id = window.location.search;
    const params = new URLSearchParams (querystring_url_id);
  const urlProduit = params.get('id');
  fetch('http://localhost:3000/api/teddies/'+ urlProduit)
  
  .then(response => response.json())
  .then(product => {
    
    
    // Création de la div 
    let divcontainer = document.createElement("div");
    divcontainer.classList.add("bordure2");
    container.appendChild(divcontainer);
        
    //Ajout de l'image
    let imgProduct = document.createElement("img");
    imgProduct.classList.add("card-img2");
    imgProduct.setAttribute('src', product.imageUrl);
    divcontainer.appendChild(imgProduct);
            
    // Ajout du h2
    let h2Product = document.createElement("h2");
    h2Product.classList.add("card-title2");
    h2Product.innerHTML = product.name;
    divcontainer.appendChild(h2Product);

    // Ajout du prix
    let pProduct = document.createElement("p");
    pProduct.classList.add("card-prix");
    pProduct.innerHTML = "Prix : " + " " + product.price/100 + "€";
    divcontainer.appendChild(pProduct);

    // Ajout de la description
    let descriptionProduct = document.createElement("p");
    descriptionProduct.classList.add("card-description");
    descriptionProduct.innerHTML = product.description;
    divcontainer.appendChild(descriptionProduct);

    // création choix couleur
let form = document.createElement('form');
divcontainer.appendChild(form);
const formDiv = document.createElement('div');
form.appendChild(formDiv);
formDiv.className = 'colors_choice';

const label = document.createElement('label');
formDiv.appendChild(label);
label.textContent = "Personnalisez sa couleur : ";
label.setAttribute('for', "Choix de couleurs de " + product.name);

const select = document.createElement('select');
formDiv.appendChild(select);
select.setAttribute('name', "Choix de couleurs de " + product.name);
select.setAttribute('id', "select_1 ");

// ajout des différentes couleurs 
const colors = product.colors;

for (i = 0; i < colors.length; i++) {
    const selectOption = document.createElement('option');
    select.appendChild(selectOption);
    selectOption.textContent = colors[i];
    selectOption.setAttribute("value", colors[i]);
}
    
        
    
    

    //ajout du bouton pour ajouter l'product au panier
    let divcontainer2 = document.createElement("btn");
    products_container2.appendChild(divcontainer2);

    let linkCart = document.createElement("a");
    linkCart.classList.add("btn");
    linkCart.classList.add("btn__centre");
    linkCart.innerHTML = "Ajouter au panier";
    divcontainer2.appendChild(linkCart);
    linkCart.id = ("cart");

    // Ecoute de l'évènement valider la commande

    linkCart.addEventListener("click", function (event) {
        event.preventDefault();
    
    

 
 let productsChoosen = {
    
    name : product.name,
    price : product.price,
    description : product.description,
    imageUrl : product.imageUrl,
    productColor: select.value,
    qty:1
 };  

 let storedValues = JSON.parse(localStorage.getItem('newArticle'));
                const Color = select.value;
                if(storedValues) {
                    storedValues.push(productsChoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedValues));
                    console.log(storedValues);
                    if (window.confirm(product.name + " " + Color + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                } else {
                    storedValues = [];
                    storedValues.push(productsChoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedValues));
                    console.log(    );
                    if (window.confirm(product.name + " " + Color + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }
            });
}

).catch(error => console.log(error))

