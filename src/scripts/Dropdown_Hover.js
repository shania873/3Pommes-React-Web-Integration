// dropdown-tabJeunes


$( document ).ready(function() { 
    $(".dropdown-tabJeunes").mouseenter(function(){  
        //   $(this).parents()[1].classList.toggle("active");
        $(this).children().last()[0].style.display = "block";
        console.log($(this).children().last());
      });

      $(".dropdown-tabJeunes").mouseleave(function(){  
        //   $(this).parents()[1].classList.toggle("active");
        $(this).children().last()[0].style.display = "none";
        console.log($(this).children().last());
      }); 
});