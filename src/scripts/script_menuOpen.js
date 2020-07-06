

var btnMenuOpen = document.getElementById("btn--HomeMenuOpen");
var element = document.getElementById("HomeMenuOpen");
var main = document.getElementsByTagName("main");



element.classList.toggle("hide");

// element.classList.toggle("open");
btnMenuOpen.addEventListener("click", function(){

    // document.getElementsByTagName("body")[0].classList.toggle("hideBody");
    element.classList.toggle("hide");
    main[0].classList.toggle("hideMain");

}, false);

// var liens = document.querySelectorAll(".link--HomeMenuOpen");

$( document ).ready(function() { 
    $(".link--HomeMenuOpen").mouseenter(function(){  
          $(this).parents()[1].classList.toggle("active");
      });

      $(".link--HomeMenuOpen").mouseleave(function(){  
          $(this).parents()[1].classList.toggle("active");
      }); 
});


//LAISSEZ CE SCRIPT, c'est la cousine de celle de haute dessus en javascript, j'aimerai y retourner quand j'aurai le temps


// liens.forEach(function(button) {
//     button.addEventListener("mouseover",function(evt){
//         evt.preventDefault();
//         console.log(evt.relatedTarget);
//         evt.relatedTarget.classList.add("active");
//       });
//       button.addEventListener("mouseout",function(event){
//         event.preventDefault();
//         console.log(event.relatedTarget);
//         event.relatedTarget.classList.remove("active");
//       });
    
    
// });
