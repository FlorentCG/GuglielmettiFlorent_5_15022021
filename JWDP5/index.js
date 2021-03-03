$(document).on("ready",function(){
    $("article").on("click",".card-action>a",function(e){
      e.preventDefault();
      var $article = $(this).closest("article"),
          title = $article.find(".card-content>h3").html(),
          price = $article.data("price");
      
      var $li = $('<li data-price="'+price+'"></li>');
      $li.html(price+"€ - "+title).appendTo($("#cart>ul"));
          computePrice();
    });
    $("#cart").on("click","li",function(){
      var $this = $(this);
          $this.addClass("removing").slideUp(function(){
        $this.remove();
              computePrice();    
      });
      
    });
    
    //2 chiffres après virgule
    $("#pay").on("click", function(){
      var price = $(this).data("total");
      if (price == undefined){
        price=0.00;
      }
      alert("Votre commande est de "+price.toFixed(2)+"€ !");
    });
    
    function computePrice(){
      var totalPrice = 0;
      $("#cart li").each(function(key,val){
        var $product = $(val)
        totalPrice += $product.data("price");
      });
      /*if (totalPrice == undefined){
        totalPrice=0;
      }*/    		
          $("#pay").data("total",totalPrice).children(".total").html(totalPrice.toFixed(2));
    };
    
    $("h1").on("click",function(){
        $(this).siblings("[data-food="+$(this).data("food")+"]").slideToggle();
    });
    
  });