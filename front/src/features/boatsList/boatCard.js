import '../../boatsList_style.css';
import {useEffect, useState} from "react";

const BoatCard = () => {

    let [boats, setBoats] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/api/boats.json")
            .then(response => response.json())
            .then((value) => {
                setBoats(value);
            })
    }, []);

    const renderedBoats = boats.map((boat, index )=>{
        return(
                <div key={index} className="card">
                    <div className="imageBoatListContainer">
                    </div>

                    <div  className="cardTitle">
                        {boat.name}
                    </div>

                    <button className="detailsButton">
                        Détails
                    </button>
                </div>
        )
    });

    return (
        <>
            {renderedBoats}
        </>
    )
}

export default BoatCard