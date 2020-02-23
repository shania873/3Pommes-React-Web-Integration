import '../styles/index.scss';
import $ from '../../node_modules/jquery/src/jquery.js';
window.jQuery = $;
window.$ = $;
import boostrap from 'bootstrap';
import './slick.js';
// import '../../node_modules/jquery-ui/';
var arrow = document.querySelectorAll("slick-arrow");


arrow.innerHTML = "";


import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

dom.i2svg();



function btnRappelsMessages() {
    var btnRappels = document.getElementById("btn--rappels");
    var btnMessages = document.getElementById("btn--messages");

    var containerRappels = document.getElementById("rappels--partBienvenue");
    var containerMessages = document.getElementById("messages--partBienvenue");

    var titreRappels = document.getElementById("titre--Rappels");
    var titreMessages = document.getElementById("titre--Messages");

    containerRappels.style.display = "none";
    titreRappels.style.display = "none";
    // titre.innerHTML = "Rappels";

    btnRappels.addEventListener("click", function () {
        containerMessages.style.display = "block";
        containerRappels.style.display = "none";

        titreMessages.style.display = "block";
        titreRappels.style.display = "none";


    });
    btnMessages.addEventListener("click", function () {





        containerMessages.style.display = "none";
        containerRappels.style.display = "block";

        titreMessages.style.display = "none";
        titreRappels.style.display = "block";



    });

}

function diaporama() {
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            },          
            {
                breakpoint: 315,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

}

function init() {
    btnRappelsMessages();
    diaporama();
}


init();