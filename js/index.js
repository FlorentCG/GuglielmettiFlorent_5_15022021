// Initialiser le container
let container = document.getElementById("products_container");

// Récupération de l'api
fetch("http://localhost:3000/api/teddies/")
 .then(data => data.json())
 .then(products => {
    // Récupération des oursons
    for(let i = 0; i < products.length; i++){
        // Création de la div 
        let divcontainer = document.createElement("div");
        
        container.appendChild(divcontainer);

        //Ajout de l'image
        let imgProduct = document.createElement("img");
        divcontainer.appendChild(imgProduct);
        imgProduct.className = 'card-img';
        imgProduct.setAttribute('src', products[i].imageUrl);
        

        // Ajout du h2
        let h2Product = document.createElement("h2");
        h2Product.classList.add("card-title");
        h2Product.innerHTML = products[i].name;
        divcontainer.appendChild(h2Product);

        //création du lien vers le produit
        let linkProduct = document.createElement("a");
        linkProduct.classList.add("btn");
        linkProduct.classList.add("btn--primary");
        linkProduct.href = "product.html?id="+products[i]._id;
        linkProduct.innerHTML = " Détails du produit";
        divcontainer.appendChild(linkProduct);
    
    }
}).catch(error => console.log(error))
