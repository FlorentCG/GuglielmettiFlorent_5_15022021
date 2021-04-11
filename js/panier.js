// Initialiser les containers
let containerPanier = document.getElementById("products_panier");
let prixPanier = document.getElementById("panierTotal");

//** Création du tableau de produits  **/
let productsId = [];

//** Initialisation du total panier  **/
let totalPanier = 0;


//** Récupération des données en Local storage  **/
let storedValues = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedValues);




//** Création du récapitulatif panier  **/
const productMain = document.getElementById('product_page');
const productDiv = document.createElement('div');
productMain.appendChild(productDiv);
productDiv.className = 'product_ref';

const productDivCart = document.createElement('div');
productDiv.appendChild(productDivCart);
productDivCart.className = 'product_cart';




//** Création de la boucle IF pour le panier vide  **/
if(storedValues == null || storedValues.length === 0){
   
    const emptyCart = document.createElement('p');
    productDivCart.appendChild(emptyCart);
    emptyCart.className = "empty_cart";
    emptyCart.textContent = "Votre panier est vide !"
} else {
    //** Récupération des éléments du panier  **/
    let i = 0;
    for (storedProduct of storedValues) {
        const eachProduct = document.createElement('div');
        productDivCart.appendChild(eachProduct);
        eachProduct.id = ("cartItem");
        eachProduct.className = 'each_product';
        

        const productsCart = document.createElement('p');
        eachProduct.appendChild(productsCart);
        productsCart.textContent =   storedProduct.name + " , " + storedProduct.productColor + " , " + storedProduct.id;

        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img");
        imgTeddy.setAttribute('src', storedProduct.imageUrl);
        eachProduct.appendChild(imgTeddy);


        const productPrice = document.createElement('div');
        eachProduct.appendChild(productPrice);
        productPrice.className = 'product_price';
        productPrice.id = i++;
        console.log(productPrice);
        

        const price = document.createElement('p');
        productPrice.appendChild(price);
        price.textContent = storedProduct.price/100 + " €"

      

        
    };
   

    //** Calcul et affichage du total du panier  **/
    let calculPrice = []
    for (storedProduct of storedValues) {
        let article = storedProduct.price/100;
        calculPrice.push(article);
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = calculPrice.reduce(reducer, 0);
    console.log(totalPrice);

    const total = document.createElement('p');
    productDivCart.appendChild(total);
    total.className = 'total';
    total.textContent = "Montant total = " + totalPrice + " €";

    //** Création du bouton pour vider le panier  **/
    const empty = document.createElement('button');
    productDivCart.appendChild(empty);
    empty.className = 'btn--primary';
    empty.classList.add("btn--primary");

    const cartLink = document.createElement('a');
    empty.appendChild(cartLink);
    cartLink.href = "panier.html";
    cartLink.id = "cart_link"
    cartLink.title = 'Vider le panier';
    cartLink.textContent = "Vider mon panier ";

    const icon = document.createElement('i');
    cartLink.appendChild(icon);
    icon.className = 'fas fa-trash-alt'

    empty.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem('newArticle');
        alert('Votre panier a été vidé!')
        window.location.href = "panier.html";
    });
//** Création de la classe et de l'objet client **/
class Client {
    constructor(firstName, lastName, address, city, email) {
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.address = address),
    (this.city = city),
    (this.email = email)     
    }
}


let form = document.querySelector('#validationCommande');
form.addEventListener('submit', (e) => {

   
    if (!document.querySelector('#firstName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs nom contient des erreurs');
        window.location ='panier.html';
    } 
    if (!document.querySelector('#lastName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs prénom contient des erreurs');
        window.location ='panier.html';
    }
    if(!document.querySelector('#address').value.match(/^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/)){
        alert('Le champs adresse contient des erreurs');
        window.location ='panier.html';
    }
    if (!document.querySelector('#city').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs ville contient des erreurs');
        window.location ='panier.html';
    }
    if (!document.querySelector('#email').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert('Le champs email contient des erreurs');
        window.location ='panier.html';
    }

    
    window.event.preventDefault();
    let newClient = new Client (
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#address').value,
        document.querySelector('#city').value,
        document.querySelector('#email').value,
    );

    //** Création du résultat  **/
    let resultat = {
        contact : {
            firstName : newClient.firstName,
            lastName : newClient.lastName,
            address : newClient.address,
            city : newClient.city,
            email : newClient.email
        },
        products : productsId
    }
    
    //** Envoi du résultat via la méthode stringify  **/
    fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify (resultat)
    })
       //**Local storage de la commande  **/
        .then(response => response.json())
        .then(response => {
            try{localStorage.clear();
                let objCommande = {
                    idCommande : response.orderId,
                    prixTotal : totalPrice
                }
                let commande = JSON.stringify(objCommande);
                localStorage.setItem('commande', commande);
                window.location = 'confirmation.html';
            } catch (error) {
                console.error(error);
                // expected output: ReferenceError: nonExistentFunction is not defined
                // Note - error messages will vary depending on browser
              }
            });  
        
})
    
}; 

