window.onload=function(){
    // récupération du bouton pour créer l'evenement au click sur celui-ci
    let buttonDay = document.getElementById('buttonDay');
    let buttonReservMorn = document.getElementById('buttonReservMorn');
    let buttonReservAfter = document.getElementById('buttonReservAfter');

    let morning = document.getElementById('morning');
    let morningReserv = document.getElementById('morningReserv');

    let afternoon = document.getElementById('afternoon');
    let afternoonReserv = document.getElementById('afternoonReserv');

    // gestionnaire d'evenement au clic sur le bouton
    buttonDay.onclick = function(e){

        if(morning.style.display==="none"){
            morning.style.display="flex";
            afternoon.style.display="flex";
        }
        else{
            morning.style.display="none";
            afternoon.style.display="none";
        }
    };

    buttonReservMorn.onclick = function(e){

        if(morningReserv.style.display==="none"){
            morningReserv.style.display="flex";
        }
        else{
            morningReserv.style.display="none";
        }
    };

    buttonReservAfter.onclick = function(e){

        if(afternoonReserv.style.display==="none"){
            afternoonReserv.style.display="flex";
        }
        else{
            afternoonReserv.style.display="none";
        }
    };
};
