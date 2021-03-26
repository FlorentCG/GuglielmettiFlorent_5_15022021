
  /**const querystring_url_id = window.location.search;
    const URLSearchParams = new URLSearchParams (querystring_url_id);
  const urlProduit = URLSearchParams.get("_id");
  fetch('http://localhost:3000/api/teddies/'+ url)
  
  .then(response => response.json())
  .then(product => {*/
    fetch("http://localhost:3000/api/teddies/")
    .then(data => data.json())
    .then(products => {
        for(let product of products){
           
          document.querySelector(".product").innerHTML +=
          `
          <div class="cart__item">
              <img class="product__image" id="product__image" src="${product.image}" >
              <h3 class="product__name" id="product__name">${product.name}</h3>
              <h3 class="product__price" id="product__price">${product.price}</h3>
              <h3 class="product__description" id="product__description">${product.description}</h3>
              
            
  
             
             
            
      `
     
let cart = (JSON.parse(localStorage.getItem('cart')) || []);
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');



if(cart.length > 0){
    cart.forEach(cartItem => {
        const product = cartItem;
        insertItemToDOM(product);
        countCartTotal();

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if(productDOM.querySelector('.product__name').innerText === product.name){
                handleActionButtons(addToCartButtonDOM, product);
            }
        });
    });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product__image').getAttribute('src'),
            name: productDOM.querySelector('.product__name').innerText,
            price: productDOM.querySelector('.product__price').innerText,
            description: productDOM.querySelector('.product__description').innerText,
           

            quantity: 1,
        };

        const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

        if(!isInCart){
            insertItemToDOM(product);
            cart.push(product);
            saveCart();
           
        }
        
    });
});


function insertItemToDOM(product){
    cartDOM.insertAdjacentHTML('beforeend', `
        <div class="cart__item">
            <img class="cart__item__image" src=${product.image}>
            <h3 class="cart__item__name">${product.name}</h3>
            <h3 class="cart__item__price">${product.price}</h3>

            
            <h3 class="product__description" id="product__description">${product.description}</h3>

            
            <h3 class="cart__item__quantity">${product.quantity}</h3>
            
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
           
                let productCart = {
                    id : product._id,
                    name : product.name,
                    price : product.price,
                    description : product.description,
                    imageUrl : product.imageUrl,
                   
                }
                let newProduct = JSON.stringify(productCart);
                localStorage.setItem(product._id, newProduct);
                alert(message = 'Article ajouté au panier');
                
            }  

  } 
            
  }); 
 

/** function getID(){
      const param = windows.location.search;
      const id = param.replace("?id=", "");
      return id;
  } */

  
  
 
  
  
  
  
  
  
