
  /**const querystring_url_id = window.location.search;
    const URLSearchParams = new URLSearchParams (querystring_url_id);
  const urlProduit = URLSearchParams.get("_id");
  fetch('http://localhost:3000/api/teddies/'+ url)
  
  .then(response => response.json())
  .then(item => {*/
    fetch("http://localhost:3000/api/teddies/")
    .then(data => data.json())
    .then(items => {
        for(let item of items){
           
          document.querySelector(".item").innerHTML +=
          `
          <div class="cart__item">
              <img class="item__image" id="item__image" src="http://localhost:3000/images/${item.image}" >
              <h3 class="item__name" id="item__name">${item.name}</h3>
              <h3 class="item__price" id="item__price">${item.price}</h3>
              <h3 class="item__description" id="item__description">${item.description}</h3>
              
            
  
             
             
            
      `
     
let cart = (JSON.parse(localStorage.getItem('cart')) || []);
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');



if(cart.length > 0){
    cart.forEach(cartItem => {
        const item = cartItem;
        insertItemToDOM(item);
        countCartTotal();

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const itemDOM = addToCartButtonDOM.parentNode;

            if(itemDOM.querySelector('.item__name').innerText === item.name){
                handleActionButtons(addToCartButtonDOM, item);
            }
        });
    });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const itemDOM = addToCartButtonDOM.parentNode;
        const item = {
            image: itemDOM.querySelector('.item__image').getAttribute('src'),
            name: itemDOM.querySelector('.item__name').innerText,
            price: itemDOM.querySelector('.item__price').innerText,
            description: itemDOM.querySelector('.item__description').innerText,
           

            quantity: 1,
        };

        const isInCart = (cart.filter(cartItem => (cartItem.name === item.name)).length > 0);

        if(!isInCart){
            insertItemToDOM(item);
            cart.push(item);
            saveCart();
           
        }
        
    });
});


function insertItemToDOM(item){
    cartDOM.insertAdjacentHTML('beforeend', `
        <div class="cart__item">
            <img class="cart__item__image" src=${item.image}>
            <h3 class="cart__item__name">${item.name}</h3>
            <h3 class="cart__item__price">${item.price}</h3>

            
            <h3 class="item__description" id="item__description">${item.description}</h3>

            
            <h3 class="cart__item__quantity">${item.quantity}</h3>
            
        </div>
    `);

    addCartFooter();
}





function addCartFooter(){
    if(document.querySelector('.cart-footer') === null){
        cartDOM.insertAdjacentHTML('afterend', `
        <div class="cart-footer">
            <button class="btn btn--danger" data-action="CLEAR_CART">Vider le panier</button>
            <button class="btn btn--primary" data-action="CHECKOUT">Pay</button>
        </div>
    `);

    document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
    document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => checkout());
    }

}

function clearCart(){
    cartDOM.querySelectorAll('.cart__item').forEach(cartItemDOM => {
        cartItemDOM.classList.add('cart__item--removed');
        setTimeout(() => cartItemDOM.remove(), 300);
    });
    cart = [];
    localStorage.removeItem('cart');
    document.querySelector('.cart-footer').remove();

    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
        addToCartButtonDOM.innerText = 'Add To Cart';
        addToCartButtonDOM.disabled = false;
    });
}

function countCartTotal(){
    let cartTotal = 0;
    cart.forEach(cartItem => cartTotal += cartItem.quantity * cartItem.price);
    document.querySelector('[data-action="CHECKOUT"]').innerText = `Payer ${cartTotal}€`
}

function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartTotal();
}

cart.onclick =
        function (){
           
                let itemCart = {
                    id : item._id,
                    name : item.name,
                    price : item.price,
                    description : item.description,
                    imageUrl : item.imageUrl,
                   
                }
                let newitem = JSON.stringify(itemCart);
                localStorage.setItem(item._id, newitem);
                alert(message = 'Article ajouté au panier');
                
            }  

  } 
            
  }); 
 

/** function getID(){
      const param = windows.location.search;
      const id = param.replace("?id=", "");
      return id;
  } */

  
  
 
  
  linkPanier.onclick =
        function (){
           
                let teddiePanier = {
                    id : product._id,
                    name : product.name,
                    price : product.price,
                    description : product.description,
                    imageUrl : product.imageUrl,
                    qty:1,
                }
                let productPanier = JSON.stringify(teddiePanier);
                localStorage.setItem(product._id, productPanier);
                alert(message = 'vos articles ont bien été ajouté au panier');
                }
  
  
  
  
                const btn_send = document.querySelector("#cart");
                console.log(btn_send)
                btn_send.addEventListener("click", (event)=>{
                    event.preventDefault()
                })