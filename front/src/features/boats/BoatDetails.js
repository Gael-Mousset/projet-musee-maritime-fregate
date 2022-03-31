import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import BoatCharacteristics from "./BoatCharacteristics";
import BoatHistory from "./BoatHistory";
import BoatDescription from "./BoatDescription";

const BoatDetails = () => {

    let id  = useParams().boatId;
    console.log(id);

    let [boats, setBoats] = useState([]);

    useEffect(() => {
            fetch("http://localhost:8000/api/boats/"+id+".json")
                .then(response => response.json())
                .then((value) => {
                    console.log(value.images["0"].fileLocation)
                    setBoats(value);
                })
        },
        [])

    //console.log(boats.images[0])

    return (
        <>
            {
                boats !== undefined ? <div id="ImageBoat" style={{backgroundImage:`url(../${boats.images[0].fileLocation})`}}> </div> : <></>
            }
            <BoatDescription boats={boats} />
            <BoatHistory boats={boats} />
            <BoatCharacteristics boats={boats} />
        </>

    )
}

export default BoatDetails
