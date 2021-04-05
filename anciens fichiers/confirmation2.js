// récupération de l'id de la commande
let orderId = localStorage.getItem('responseOrder');
console.log(orderId);

// récupération du prix total de la commande
let totalPrice = localStorage.getItem('totalPrice');
console.log(totalPrice);

//création page de confirmation et remerciement
const teddyMain = document.getElementById('product_page');
const teddyDiv = document.createElement('div');
teddyMain.appendChild(teddyDiv);
teddyDiv.className = 'teddy_confirm';

const teddyH3 = document.createElement('h3');
teddyDiv.appendChild(teddyH3);
teddyH3.textContent = "Oribears vous remercie de votre commande !";

const teddyPar = document.createElement('p');
teddyDiv.appendChild(teddyPar);
teddyPar.textContent = "Nous avons le plaisir de vous informer que votre commande a bien été enregistrée.";

const teddyPar2 = document.createElement('p');
teddyDiv.appendChild(teddyPar2);
teddyPar2.innerHTML = "Vos oursons arriverons bientôt chez vous.<br />Vous trouverez ci-dessous le récapitulatif de votre commande."

const teddyPar3 = document.createElement('p');
teddyDiv.appendChild(teddyPar3);
teddyPar3.textContent = "Nous espérons vous revoir très vite chez Oribears !"

const teddyPar4 = document.createElement('p');
teddyDiv.appendChild(teddyPar4);
teddyPar4.textContent = "Toute l'équipe d'Orinoco";

// récapitulatif de votre commande
const teddyDivConfirm = document.createElement('div');
teddyDiv.appendChild(teddyDivConfirm);
teddyDivConfirm.className = 'confirm';

const teddyH3Bis = document.createElement('h3');
teddyDivConfirm.appendChild(teddyH3Bis);
teddyH3Bis.textContent = "Récapitulatif de votre commande : ";

const teddyPar5 = document.createElement('p');
teddyDivConfirm.appendChild(teddyPar5);
teddyPar5.textContent = "Numéro de commande : " + orderId;
teddyPar5.className = "confirm_par";

const teddyPar6 = document.createElement('p');
teddyDivConfirm.appendChild(teddyPar6);
teddyPar6.textContent = "Montant total de votre commande : " + totalPrice + " €";
teddyPar6.className = "confirm_par";

// Efface localStorage
localStorage.clear();