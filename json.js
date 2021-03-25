fetch("http://localhost:3000/api/teddies")
    .then(data => data.json())
    .then(teddies => {
        for(let teddy of teddies){
            let article = new Article(teddies);
            document.querySelector(".container-fluid").innerHTML +=
            `
            <div class="row">
            <div class="col-sm">
                <div class="card">
                   
                    <div class="card-body">
                        <div class="row">
                           
                            <div class="col-sm-12">
                                <div class="product">
                                    <img class="product__image" src=http://localhost:3000/images/teddy_1.jpg alt="Ours classique">
                                    
                                    <h2 class="product__name">${teddy.name}</h2>
                                    <p class="card-text">${teddy.description} </p>
                                        
                                                <h3 class="product__price">${teddy.price}</h3>
                                            
                                                <button class="btn btn--primary" data-action="ADD_TO_CART">Détails du produit</button>
                                                <button id="productPage" onclick="myFunction()">Click me</button>  
                                                <button id="1" onClick="reply_click(this.id)">B1</button>
<button id="2" onClick="reply_click(this.id)">B2</button>
<button id="3" onClick="reply_click(this.id)">B3</button>
<a href="http://localhost:3000/api/teddies/${teddy._id}"><input type="button" value="CECI EST UN LIEN" /></a>                                   
                                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
            
  `
  
  
        }
       
                    
    });


  function reply_click(clicked_id)
  {
      alert(clicked_id);
  }
   



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