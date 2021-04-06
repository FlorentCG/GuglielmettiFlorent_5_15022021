

// Initialiser le container
let container = document.getElementById("products_container");
let option = document.getElementById("option");
let container2 = document.getElementById("products_container2");
let res = document.getElementById('result');


    //** Récupération de l'URL du produit **/
    const querystring_url_id = window.location.search;
    const params = new URLSearchParams (querystring_url_id);
    const urlProduit = params.get('id');
    fetch('http://localhost:3000/api/teddies/'+ urlProduit)
  
    .then(response => response.json())
    .then(product => {
    
    
    //** Création de la div principale **/
    let divcontainer = document.createElement("div");
    divcontainer.classList.add('card-container');
    container.appendChild(divcontainer);
        
    //** Création de l'image  **/
    let imgProduct = document.createElement("img");
    imgProduct.classList.add('card-img');
    imgProduct.setAttribute('src', product.imageUrl);
    divcontainer.appendChild(imgProduct);
            
    //** Création du H2  **/
    let h2Product = document.createElement("h2");
    h2Product.classList.add("card-title2");
    h2Product.innerHTML = product.name;
    divcontainer.appendChild(h2Product);

    //** Création du prix  **/
    let pProduct = document.createElement("p");
    pProduct.classList.add("card-prix");
    pProduct.innerHTML = "Prix : " + " " + product.price/100 + "€";
    divcontainer.appendChild(pProduct);

    //** Création du paragraphe description  **/
    let descriptionProduct = document.createElement("p");
    descriptionProduct.classList.add("card-description");
    descriptionProduct.innerHTML = product.description;
    divcontainer.appendChild(descriptionProduct);

    //** Création du formulaire de choix des couleurs  **/
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

//** Création du choix des couleurs dans le formulaire  **/
const colors = product.colors;

for (i = 0; i < colors.length; i++) {
    const selectOption = document.createElement('option');
    select.appendChild(selectOption);
    selectOption.textContent = colors[i];
    selectOption.setAttribute("value", colors[i]);
}
    
        
    
    

    //** Création du bouton PANIER  **/
    let divcontainer2 = document.createElement("btn");
    divcontainer2.classList.add("card-description");
    products_container2.appendChild(divcontainer2);

    let linkCart = document.createElement("a");
    linkCart.classList.add("btn");
    linkCart.classList.add("btn--primary");
    linkCart.innerHTML = "Ajouter au panier";
    divcontainer2.appendChild(linkCart);
    linkCart.id = ("cart");

    //** Création de l'évènement de validation  **/

    linkCart.addEventListener("click", function (event) {
        event.preventDefault();
    
    

 
 let productsChoosen = {
    id: product._id,
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

