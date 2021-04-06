

 //** Récupération du local storage  **/
let commande =  Object.keys(localStorage);
for (i=0; i < commande.length; i++) {
    let recapCommande = JSON.parse(localStorage.getItem(commande[i]))

 
const productMain = document.getElementById('product_page');
const productDiv = document.createElement('div');
productMain.appendChild(productDiv);
productDiv.className = 'product_confirm';


 //** Création du récap commande  **/
const productDivConfirm = document.createElement('div');
productDiv.appendChild(productDivConfirm);
productDivConfirm.className = 'confirm';

const productH3Bis = document.createElement('h3');
productDivConfirm.appendChild(productH3Bis);
productH3Bis.textContent = "Récapitulatif de votre commande : ";

const productPar5 = document.createElement('p');
productDivConfirm.appendChild(productPar5);
productPar5.textContent = "Numéro de commande : " +   recapCommande.idCommande;
productPar5.className = "confirm_par";

const productPar6 = document.createElement('p');
productDivConfirm.appendChild(productPar6);
productPar6.textContent = "Montant total de votre commande : " + recapCommande.prixTotal + " €";
productPar6.className = "confirm_par";
}
 //**Effacer local storage **/
localStorage.clear();