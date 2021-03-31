    
  
  
  

 fetch("http://localhost:3000/api/teddies/")
 .then(data => data.json())
 .then(products => {
     for(let product of products){
         
         document.querySelector(".product").innerHTML +=
         `
        
                             <div class="product">
                                 <img class="product__image" src=http://localhost:3000/images/teddy_1.jpg alt="Ours classique">
                                 
                                 <h2 class="product__name">${product.name}</h2>
                                 
                                     
                                             <h3 class="product__price">${product.price}</h3>
                                         
                                             
<a href="http://localhost:3000/api/teddies/${product._id}"><input type="button" value="Détails du produit" /></a>                                   
                                   
                             </div>
                       
      `
      const cartDOM = document.querySelector('.cart');
      const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
      
      //console.log(cart);
      
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
      
                  /**description: productDOM.querySelector('.product__description').innerText,**/
                  description: productDOM.querySelector('.product__color').checked,
      
                  quantity: 1,
              };
      
              const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);
      
              if(!isInCart){
                  insertItemToDOM(product);
                  cart.push(product);
                  saveCart();
                  handleActionButtons(addToCartButtonDOM, product)
              }
              
          });
      });
      
      
      function insertItemToDOM(product){
          cartDOM.insertAdjacentHTML('beforeend', `
              <div class="cart__item">
                  <img class="cart__item__image" src="${product.image}" alt="${product.name}">
                  <h3 class="cart__item__name">${product.name}</h3>
                  <h3 class="cart__item__price">${product.price}</h3>
      
                  
                  <form class="product__color">${product.color}</form> 
      
                  
                  <h3 class="cart__item__quantity">${product.quantity}</h3>
                  <button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
                  <button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>
              </div>
          `);
      
          addCartFooter();
      }
      
      function handleActionButtons(addToCartButtonDOM, product){
          addToCartButtonDOM.innerText = "In Cart"; 
          addToCartButtonDOM.disabled = true;
      
          const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
          cartItemsDOM.forEach(cartItemDOM => {                
              if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name){
                  
                  cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
                  cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
                  cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
              }
          });
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
       
      }             

                 
}); 


/** function getID(){
      const param = windows.location.search;
      const id = param.replace("?id=", "");
      return id;
  } */

  
  
 
  
  
  
  
  
  


   



   /** 
    * fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(teddies => {
        for(let i = 0; i < teddies.length; i++){
        document.getElementById("product__name").innerHTML=teddies[i].name;  
        
    }})
    * 
    * 
    * document.getElementById("product__name").innerHTML =jsonArticle[1].name;  */ 