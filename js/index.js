//** Initialisation du container **/ 
let container = document.getElementById("products_container");

//** Récupération de l'api **/
fetch("http://localhost:3000/api/teddies/")
 .then(data => data.json())
 .then(products => {
    //** Création de la boucle **/
    for(let i = 0; i < products.length; i++){
        //** Création de la div principale **/
        let divcontainer = document.createElement("div");
        divcontainer.className= 'card-container';
        container.appendChild(divcontainer);

         //** Création de l'image  **/
        let imgProduct = document.createElement("img");
        divcontainer.appendChild(imgProduct);
        imgProduct.className = 'card-img';
        imgProduct.setAttribute('src', products[i].imageUrl);
        

        //** Création du H2  **/
        let h2Product = document.createElement("h2");
        h2Product.classList.add("card-title");
        h2Product.innerHTML = products[i].name;
        divcontainer.appendChild(h2Product);

        //** Création du lien détails produit **/
        let linkProduct = document.createElement("a");
        linkProduct.classList.add("btn");
        linkProduct.classList.add("btn--primary");
        linkProduct.href = "product.html?id="+products[i]._id;
        linkProduct.innerHTML = " Détails du produit";
        divcontainer.appendChild(linkProduct);
    
    }
}).catch(error => console.log(error))
