document.querySelector('.form input[type="button"]').addEventListener("click", function(){
    var valid = true;
    for(let input of document.querySelectorAll(".form input, .form textarea")){
        valid = valid &= input.checkValidity();
        if(!valid){
            break;
        }
        if(valid){
            alert("votre message est valide")
        }
    }
});