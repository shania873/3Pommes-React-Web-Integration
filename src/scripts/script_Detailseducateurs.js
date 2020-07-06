

    var contentEducateurs1 = document.getElementById("content--educateurs1");
    var contentEducateurs2 = document.getElementById("content--educateurs2");
    var contentEducateurs3 = document.getElementById("content--educateurs3");
    var contentEducateurs4 = document.getElementById("content--educateurs4");
    var contentEducateurs5 = document.getElementById("content--educateurs5");

    var btnBadgesManquant = document.getElementById("btn--Badges-manquant");
    var btnKarmasaAmeliorer = document.getElementById("btn--Karmas-a-ameliorer");
    var btnAttributionduKarma = document.getElementById("btn--Attribution-du-Karma");
    var btnDossierannuelincomplet = document.getElementById("btn--Dossier-annuel-incomplet");
    var btnBulletinmanquant = document.getElementById("btn--Bulletin-manquant");


    var TitleDetailsEducateurs = document.getElementById("title--detailseducateurs");

  
    contentEducateurs1.style.display = "block";
    contentEducateurs2.style.display = "none";
    contentEducateurs3.style.display = "none";
    contentEducateurs4.style.display = "none";
    contentEducateurs5.style.display = "none";

    btnBadgesManquant.classList.add("active");

    btnBadgesManquant.addEventListener("click", function () {
        TitleDetailsEducateurs.innerHTML = "Badges manquants";

        contentEducateurs1.style.display = "block";
        contentEducateurs2.style.display = "none";
        contentEducateurs3.style.display = "none";
        contentEducateurs4.style.display = "none";
        contentEducateurs5.style.display = "none";
        console.log("1");


        var btnBadgesManquant = document.getElementById("btn--Badges-manquant");
        var btnKarmasaAmeliorer = document.getElementById("btn--Karmas-a-ameliorer");
        var btnAttributionduKarma = document.getElementById("btn--Attribution-du-Karma");
        var btnDossierannuelincomplet = document.getElementById("btn--Dossier-annuel-incomplet");
        var btnBulletinmanquant = document.getElementById("btn--Bulletin-manquant");


        btnBadgesManquant.classList.add("active");

        btnKarmasaAmeliorer.classList.remove("active");
        btnAttributionduKarma.classList.remove("active");
        btnDossierannuelincomplet.classList.remove("active");
        btnBulletinmanquant.classList.remove("active");


    });

    btnKarmasaAmeliorer.addEventListener("click", function () {

        TitleDetailsEducateurs.innerHTML = "Karmas à ameliorer";
        contentEducateurs1.style.display = "none";
        contentEducateurs2.style.display = "block";
        contentEducateurs3.style.display = "none";
        contentEducateurs4.style.display = "none";
        contentEducateurs5.style.display = "none";

        btnKarmasaAmeliorer.classList.add("active");

        btnBadgesManquant.classList.remove("active");
        btnAttributionduKarma.classList.remove("active");
        btnDossierannuelincomplet.classList.remove("active");
        btnBulletinmanquant.classList.remove("active");

       
    });
    btnAttributionduKarma.addEventListener("click", function () {
        TitleDetailsEducateurs.innerHTML = "Attribution du karma";
        contentEducateurs1.style.display = "none";
        contentEducateurs2.style.display = "none";
        contentEducateurs3.style.display = "block";
        contentEducateurs4.style.display = "none";
        contentEducateurs5.style.display = "none";
        
        
        btnAttributionduKarma.classList.add("active");

        btnBadgesManquant.classList.remove("active");
        btnKarmasaAmeliorer.classList.remove("active");
        btnDossierannuelincomplet.classList.remove("active");
        btnBulletinmanquant.classList.remove("active");

    });
    btnDossierannuelincomplet.addEventListener("click", function () {
        TitleDetailsEducateurs.innerHTML = "Dossiers annuels incomplets";
        contentEducateurs1.style.display = "none";
        contentEducateurs2.style.display = "none";
        contentEducateurs3.style.display = "none";
        contentEducateurs4.style.display = "block";
        contentEducateurs5.style.display = "none";
       
        
        btnDossierannuelincomplet.classList.add("active");

        btnBadgesManquant.classList.remove("active");
        btnKarmasaAmeliorer.classList.remove("active");
        btnAttributionduKarma.classList.remove("active");
        btnBulletinmanquant.classList.remove("active");

    });
    btnBulletinmanquant.addEventListener("click", function () {
        TitleDetailsEducateurs.innerHTML = "Bulletin manquant";
        contentEducateurs1.style.display = "none";
        contentEducateurs2.style.display = "none";
        contentEducateurs3.style.display = "none";
        contentEducateurs4.style.display = "none";
        contentEducateurs5.style.display = "block";



        btnBulletinmanquant.classList.add("active");

        btnBadgesManquant.classList.remove("active");
        btnKarmasaAmeliorer.classList.remove("active");
        btnAttributionduKarma.classList.remove("active");
        btnDossierannuelincomplet.classList.remove("active");
    });
  
