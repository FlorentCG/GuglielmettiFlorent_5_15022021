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
        teddiesCart.textContent =  storedProduct.qty + " " + storedProduct.name + " , " + storedProduct.productColor;

        document.getElementById("cartItem").innerHTML = "<img src=storedProduct.imageUrl >";


        const productPrice = document.createElement('div');
        eachProduct.appendChild(productPrice);
        productPrice.className = 'product_price';
        productPrice.id = i++;

        const productImg = document.createElement('img');
            productDiv.appendChild(productImg);
            productImg.setAttribute('src', storedProduct.imageUrl);

        const price = document.createElement('p');
        productPrice.appendChild(price);
        price.textContent = storedProduct.price + " €"

        // création bouton suppression d'un produit
        const garbageButton = document.createElement('button');
        productPrice.appendChild(garbageButton);
        garbageButton.className = 'garbage_button';
        garbageButton.title = 'Supprimer cet article ?';

        const iconButton = document.createElement('i');
        garbageButton.appendChild(iconButton);
        iconButton.className = 'fas fa-trash-alt';

    };
    // on récupére l'article associé au bouton poubelle
    let garbageButton = document.getElementsByClassName('garbage_button');
    for (let i = 0 ; i < garbageButton.length; i++) {
        garbageButton[i].addEventListener('click' , function (event) { 
            event.preventDefault();
            let id = this.closest('.product_price').id;

            //on supprime l'article du localStorage
            storedValues.splice(id, 1);

            //on enregistre le nouveau localStorage
            localStorage.setItem('newArticle', JSON.stringify(storedValues));
            JSON.parse(localStorage.getItem('newArticle'));

            alert('Cet article a bien été supprimé !');
            window.location.href = "panier.html";   
        }); 
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
    const garbage = document.createElement('button');
    productDivCart.appendChild(garbage);
    garbage.className = 'icon_garbage';
    garbage.classList.add("btn--primary");

    const cartLink = document.createElement('a');
    garbage.appendChild(cartLink);
    cartLink.href = "panier.html";
    cartLink.id = "cart_link"
    cartLink.title = 'Vider le panier';
    cartLink.textContent = "Vider mon panier ";

    const icon = document.createElement('i');
    cartLink.appendChild(icon);
    icon.className = 'fas fa-trash-alt'

    garbage.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem('newArticle');
        alert('Votre panier a bien été vidé !')
        window.location.href = "panier.html";
    });

    //création du formulaire de commande
    const form = document.createElement('form');
    form.className = 'contact_form';
    productDivCart.appendChild(form);

    const productH3Bis = document.createElement('h3');
    form.appendChild(productH3Bis);
    productH3Bis.textContent = "Pour valider votre commande, merci de remplir ce formulaire : ";

    // création fonctions de validité prénom, nom, ville
    function isValid(value) {
        return /^[A-Z-a-z\s]{3,40}$/.test(value);
    };

    // création fonctions de validité adresse
    function validAddress(value) {
        return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value)
    };

    // création fonctions de validité mail
    function validMail(value){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    };

    // ajout formulaire "prénom"
    const divFirstName = document.createElement('div');
    form.appendChild(divFirstName);
    divFirstName.className = 'div_name';

    const labelFirstName = document.createElement('label');
    divFirstName.appendChild(labelFirstName);
    labelFirstName.setAttribute('for', 'prénom');
    labelFirstName.textContent = 'Votre prénom : ';

    const firstName = document.createElement('input');
    divFirstName.appendChild(firstName);
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('class', 'name');
    firstName.name = "Prénom"
    firstName.required = true;

    // Vérification de la validité du prénom
    firstName.addEventListener("change", function (event) {
        if (isValid(firstName.value)) {
        } else {
            alert( "Aucun chiffre ou symbole n'est autorisé.")
            event.preventDefault()
        }
    });

    // ajout formulaire "nom"
    const divLastName = document.createElement('div');
    form.appendChild(divLastName);
    divLastName.className = 'div_name';

    const labelLastName = document.createElement('label');
    divLastName.appendChild(labelLastName);
    labelLastName.setAttribute('for', 'nom');
    labelLastName.textContent = 'Votre nom : ';

    const lastName = document.createElement('input');
    divLastName.appendChild(lastName);
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('class', 'name');
    lastName.name = "Nom"
    lastName.required = true;

    // Vérification de la validité du nom
    lastName.addEventListener("change", function (event) {
        if (isValid(lastName.value)) {
        } else {
            alert("Aucun chiffre ou symbole n'est autorisé.")
            event.preventDefault()
        }
    });

    // ajout formulaire "adresse"
    const divAddress = document.createElement('div');
    form.appendChild(divAddress);
    divAddress.className = 'div_name';

    const labelAdress = document.createElement('label');
    divAddress.appendChild(labelAdress);
    labelAdress.setAttribute('for', 'adresse');
    labelAdress.textContent = 'Votre adresse : ';

    const address = document.createElement('textarea');
    divAddress.appendChild(address);
    address.setAttribute('type', 'text');
    address.setAttribute('class', 'name');
    address.name = "Adresse"
    address.required = true;

    // Vérification de la validité de l'adresse
    address.addEventListener("change", function (event) {
        if (validAddress(address.value)){
        } else {
            event.preventDefault()
            alert("Aucun symbole n'est autorisé.");
        }
    });

    // ajout formulaire "ville"
    const divCity = document.createElement('div');
    form.appendChild(divCity);
    divCity.className = 'div_name';

    const labelCity = document.createElement('label');
    divCity.appendChild(labelCity);
    labelCity.setAttribute('for', 'ville');
    labelCity.textContent = 'Votre ville : ';

    const city = document.createElement('input');
    divCity.appendChild(city);
    city.setAttribute('type', 'text');
    city.setAttribute('class', 'name');
    city.name = "Ville"
    city.required = true;

    // Vérification de la validité de la ville
    city.addEventListener("change", function (event) {
        if (isValid(city.value)) {
        } else {
            alert("Aucun chiffre ou symbole n'est autorisé.")
            event.preventDefault()
        }
    });

    // ajout formulaire "mail"
    const divMail = document.createElement('div');
    form.appendChild(divMail);
    divMail.className = 'div_name';

    const labelMail = document.createElement('label');
    divMail.appendChild(labelMail);
    labelMail.setAttribute('for', 'email');
    labelMail.textContent = 'Votre adresse mail : ';

    const mail = document.createElement('input');
    divMail.appendChild(mail);
    mail.setAttribute('type', 'email');
    mail.setAttribute('class', 'name');
    mail.name = "Adresse mail"
    mail.required = true;

    // Vérification de la validité du mail
    mail.addEventListener("change", function (event) {
        if (validMail(mail.value)){
        } else {
            event.preventDefault()
            alert("Veuillez saisir une adresse mail valide (exemple : abcd@mail.com).");
        }
    });

    // création bouton validation
    const divSubmit = document.createElement('div');
    form.appendChild(divSubmit);
    divSubmit.className = 'div_name';

    let submit = document.createElement('button');
    divSubmit.appendChild(submit);
    submit.type = 'submit';
    submit.name = 'add';
    submit.id = 'valid';
    submit.textContent = "Valider votre commande";

    // envoie des données panier + contact au serveur si le formulaire est valide
    submit.addEventListener("click", function (event) {
        if(isValid(firstName.value) && isValid(lastName.value) && validAddress(address.value) && isValid(city.value) && validMail(mail.value)){
            event.preventDefault();

            // envoie du prix total au localStorage
            localStorage.setItem('totalPrice', totalPrice);
            const storagePrice = localStorage.getItem('totalPrice');
            console.log(storagePrice);

            //Création de l'objet "contact"
            let contact = {
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: mail.value,
            }
            console.log(contact);

            // création du tableau products (id des oursons du panier)
            let products = [];
            for (storedProduct of storedValues) {
                let productsId = storedProduct.productId;
                products.push((productsId));
            }
            console.log(products);

            // création d'un objet regroupant contact et produits
            let send = {
                contact,
                products,
            }
            console.log(send);

            // envoie des données au serveur
            const post = async function (data){
                try {
                    let response = await fetch('http://localhost:3000/api/teddies/order', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if(response.ok) {
                        let data = await response.json();
                        console.log(data.orderId);
                        localStorage.setItem("responseOrder", data.orderId);
                        window.location = "confirmation.html";
                        localStorage.removeItem("newArticle");

                    } else {
                        event.preventDefault();
                        console.error('Retour du serveur : ', response.status);
                        alert('Erreur rencontrée : ' + response.status);
                    } 
                } catch (error) {
                    alert("Erreur : " + error);
                } 
            };
            post(send);
        }
    });
};