import '../styles/index.scss';
import $ from '../../node_modules/jquery/src/jquery.js';
window.jQuery = $;
window.$ = $;
import boostrap from 'bootstrap';
import './slick.js';
// import '../../node_modules/jquery-ui/';
var arrow = document.querySelectorAll("slick-arrow");

arrow.innerHTML = "";

function btnRappelsMessages(){
    var btnRappels = document.getElementById("btn--rappels");
    var btnMessages = document.getElementById("btn--messages");   
    
    var containerRappels = document.getElementById("rappels--partBienvenue");
    var containerMessages = document.getElementById("messages--partBienvenue");
    
    var titre = document.getElementById("titre");
    
    containerRappels.style.display = "none";
    // titre.innerHTML = "Rappels";
    
    btnRappels.addEventListener("click", function () {
        containerMessages.style.display = "block";
        containerRappels.style.display = "none";       
        titre.innerHTML = "Messages";
    
        
    });
    btnMessages.addEventListener("click", function () {
    
      


        
        containerMessages.style.display = "none";
        containerRappels.style.display = "block";      
        titre.innerHTML = "Rappels";
        
    });
    
}
function diaporama(){
    // var prev  = $('.prev').hide();

    // console.log(prev);
    $('.card-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        // autoplay: true,
        // autoplaySpeed: 1500,
        arrow: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
  
}

function init(){
    btnRappelsMessages();
    diaporama();
}


init();