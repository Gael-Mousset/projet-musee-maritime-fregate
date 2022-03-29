import React from 'react';
import './schedule.css';
import '../../App.css';
import './buttonEffect';

//function buttonEffect(){
//    document.getElementById('day-reservations').style.display = "flex";
//}
//document.getElementById('buttonResa').addEventListener('click',buttonEffect);

const Schedule = () => {

    return(
        <>
            <div className="imgHead"></div>
            <h1>Planning</h1>
            <div className="container">
                <div className="titleContainer">Nom Bateau</div>
                    <div id="schedule">
                        <div className="day">

                            <div className="day-informations">
                                <p>Mercredi 8 mars</p>
                                <button type={"button"} id={"buttonDay"}>+</button>
                            </div>

                            <div id="day-reservations">

                                <div id={"morning"}>
                                    <div id="morningInform">
                                        <p>Matin</p>
                                        <button type={"button"} id={"buttonReservMorn"}>+</button>
                                    </div>

                                    <div id="morningReserv">
                                        <hr></hr>
                                        <div id={"resa"}>
                                            <div id="resaInform">
                                                <p>13h30 - 14h00</p>
                                                <p>3 places restantes</p>
                                            </div>
                                            <button id={"reservButton"}>Réserver</button>
                                        </div>
                                    </div>
                                </div>

                                <div id={"afternoon"}>

                                    <div id="afternoonInform">
                                        <p>Après Midi</p>
                                        <button type={"button"} id={"buttonReservAfter"}>+</button>
                                    </div >

                                    <div id="afternoonReserv">
                                        <hr></hr>
                                        <div id={"resa"}>
                                            <div id="resaInform">
                                                <p>13h30 - 14h00</p>
                                                <p>7 places restantes</p>
                                            </div>
                                            <button id={"reservButton"}>Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Schedule;