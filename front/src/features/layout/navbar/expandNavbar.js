window.onload=function(){
    // récupération du bouton pour créer l'evenement au click sur celui-ci
    var bouton = document.getElementById('bouton');
    // récupération du bloc div avec l'id "replier"
    var nav = document.getElementById('replier');

    // gestionnaire d'evenement au clic sur le bouton
    bouton.onclick = function(e){

        if(nav.style.display==="none"){

            nav.style.display="block";

        }else{
            nav.style.display="none";
        }
    };
};
