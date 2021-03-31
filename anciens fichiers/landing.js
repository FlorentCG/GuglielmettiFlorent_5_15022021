// Initialiser le container
let container = document.getElementById("teddies_container");

// Récupération de l'api
fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    // Récupération des oursons
    for(let i = 0; i < teddies.length; i++){
        // Création de la div 
        let divcontainer = document.createElement("div");
        divcontainer.classList.add("bordure");
        divcontainer.classList.add("col-lg-5");
        container.appendChild(divcontainer);

        //Ajout de l'image
        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img");
        imgTeddy.setAttribute('src', teddies[i].imageUrl);
        divcontainer.appendChild(imgTeddy);

        // Ajout du h2
        let h2Teddy = document.createElement("h2");
        h2Teddy.classList.add("card-title");
        h2Teddy.innerHTML = teddies[i].name;
        divcontainer.appendChild(h2Teddy);

        //création du lien vers le produit
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("btn");
        linkTeddy.classList.add("btn__centre");
        linkTeddy.href = "html/produit.html?id_ourson="+teddies[i]._id;
        linkTeddy.innerHTML = " Détails du produit";
        divcontainer.appendChild(linkTeddy);
    }
}).catch(error => console.log(error))