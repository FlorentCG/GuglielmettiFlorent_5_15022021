
  fetch("http://localhost:3000/api/teddies/")
  .then(data => data.json())
  .then(products => {
      for(let product of products){
          let article = new Article(products);
          document.querySelector(".product").innerHTML +=
          `
          <div class="cart__item">
              <img class="product__image" id="product__image" src="${product.image}" >
              <h3 class="product__name" id="product__name">${product.name}</h3>
              <h3 class="product__price" id="product__price">${product.price}</h3>
              <h3 class="product__description" id="product__description">${product.description}</h3>
              
            
  
             
             
            
      `
      
      let cart = (JSON.parse(localStorage.getItem('cart')) || []);
            fetch("http://localhost:3000/api/teddies/")
            .then(data => data.json())
            const cartDOM = document.querySelector('.cart');
            const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
            const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);
      
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
                /**description: productDOM.querySelector('.product__color').checked,**/
    
                quantity: 1,
            };
            
    
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
                <img class="product__image" src="${product.image}" >
                <h3 class="product__name">${product.name}</h3>
                <h3 class="product__price">${product.price}</h3>
                <h3 class="product__description" id="product__description">${product.description}</h3>
                
               
    
                
                <h3 class="product__quantity">${product.quantity}</h3>
                
               
            </div>
        `);
    
        addCartFooter();

        function handleActionButtons(addToCartButtonDOM, product){
            addToCartButtonDOM.innerText = "In Cart"; 
            addToCartButtonDOM.disabled = true;
        
            const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
            cartItemsDOM.forEach(cartItemDOM => {                
                if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name){
                    
                    
                    cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
                }
            });
        }
        
        
        
        
        
        function removeItem(product, cartItemDOM, addToCartButtonDOM){
            cartItemDOM.classList.add('cart__item--removed')
            setTimeout(() => cartItemDOM.remove(), 300);
            cart = cart.filter(cartItem => cartItem.name !== product.name);
            saveCart();
            addToCartButtonDOM.innerText = 'Add To Cart';
            addToCartButtonDOM.disabled = false;
        
            if(cart.length < 1){
                document.querySelector('.cart-footer').remove();
            }
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
    
    
      
   

      }
 
                       
  }); 


/** function getID(){
      const param = windows.location.search;
      const id = param.replace("?id=", "");
      return id;
  } */

  
  
 
  
  
  
  
  
  
