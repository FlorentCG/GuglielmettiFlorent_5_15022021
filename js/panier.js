// Initialiser les containers
let containerPanier = document.getElementById("teddies_panier");
let prixPanier = document.getElementById("panierTotal");

// Création du tableau products
let productsId = [];

// création de la variable totalpanier
let totalPanier = 0;

let storedValues = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedValues);


// récupération du localStorage
/**let v = Object.keys(localStorage);
for (i=0; i < v.length; i++)**/

// création de la page du récapitulatif panier
const productMain = document.getElementById('product_page');
const productDiv = document.createElement('div');
productMain.appendChild(productDiv);
productDiv.className = 'product_ref';

const productDivCart = document.createElement('div');
productDiv.appendChild(productDivCart);
productDivCart.className = 'product_cart';

const productH3 = document.createElement('h3');
productDivCart.appendChild(productH3);
productH3.textContent = "Vos oursons :";



if(storedValues == null || storedValues.length === 0){
    // si le panier est vide 
    const emptyCart = document.createElement('p');
    productDivCart.appendChild(emptyCart);
    emptyCart.className = "empty_cart";
    emptyCart.textContent = "Votre panier est tristement vide !"
} else {
    // si des éléments sont présents dans le panier : récupération des éléments du panier
    let i = 0;
    for (storedProduct of storedValues) {
        const eachProduct = document.createElement('div');
        productDivCart.appendChild(eachProduct);
        eachProduct.id = ("cartItem");
        eachProduct.className = 'each_product';
        

        const teddiesCart = document.createElement('p');
        eachProduct.appendChild(teddiesCart);
        teddiesCart.textContent =  storedProduct.qty + " " + storedProduct.name + " , " + storedProduct.productColor + " , " + storedProduct.id;

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
        price.textContent = storedProduct.price + " €"

      

        
    };
   

    //calcul du montant total
    let calculPrice = []
    for (storedProduct of storedValues) {
        let article = storedProduct.price;
        calculPrice.push(article);
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = calculPrice.reduce(reducer, 0);
    console.log(totalPrice);

    const total = document.createElement('p');
    productDivCart.appendChild(total);
    total.className = 'total';
    total.textContent = "Montant total = " + totalPrice + " €";

    //création d'un bouton pour vider le panier
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
        alert('Votre panier a bien été vidé !')
        window.location.href = "panier.html";
    });
//Création de la classe client
class Client {
    constructor(firstName, lastName, address, city, email) {
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.address = address),
    (this.city = city),
    (this.email = email)     
    }
}

//Création de l'objet client
let form = document.querySelector('#validationCommande');
form.addEventListener('submit', (e) => {

    // check champs du formulaire
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

    //création du nouveau client
    event.preventDefault();
    let newClient = new Client (
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#address').value,
        document.querySelector('#city').value,
        document.querySelector('#email').value,
    );

    // Création de l'objet résultat
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
    
    // Apelle de fetch avec order
    fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify (resultat)
    })
        //réponse du serveur
        .then(response => response.json())
        .then(response => {
            localStorage.clear();
                let objCommande = {
                    idCommande : response.orderId,
                    prixTotal : totalPrice
                }
                let commande = JSON.stringify(objCommande);
                localStorage.setItem('commande', commande);
                window.location = 'confirmation.html';
            });  
})
    
}; 

