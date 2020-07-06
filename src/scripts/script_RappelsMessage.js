//ceci est le script pour le bouton message et rappels 

function btnRappelsMessages() {

    var btnRappels = document.getElementById("btn--rappels");
    var btnMessages = document.getElementById("btn--messages");

    var containerRappels = document.getElementById("rappels--partBienvenue");
    var containerMessages = document.getElementById("messages--partBienvenue");

    var titreRappels = document.getElementById("titre--rappels");
    var titreMessages = document.getElementById("titre--messages");

    containerRappels.style.display = "none";
    titreRappels.style.display = "none";  

    btnRappels.addEventListener("click", function () {
        containerMessages.style.display = "block";
        containerRappels.style.display = "none";
        titreMessages.style.display = "flex";
        titreRappels.style.display = "none";

        btnRappels.classList.add("active");
        btnMessages.classList.remove("active");
    });

    btnMessages.addEventListener("click", function () {
        containerMessages.style.display = "none";
        containerRappels.style.display = "block";
        titreMessages.style.display = "none";
        titreRappels.style.display = "flex";

        btnMessages.classList.add("active");
        btnRappels.classList.remove("active");

    });

}



function init() { 
    btnRappelsMessages();  
}


init();