import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import BoatCharacteristics from "./BoatCharacteristics";
import BoatHistory from "./BoatHistory";
import BoatDescription from "./BoatDescription";
import BoatHeader from "./BoatHeader";

const BoatDetails = () => {

    let id  = useParams().boatId;

    let [boats, setBoats] = useState([]);

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch(`http://localhost:8000/api/boats/${id}.json`);
            // convert the data to json
            const json = await data.json();

            // set state with the result
            setBoats(json);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [id])

    return (
        <>
            <BoatHeader boats={boats} />
            <BoatDescription boats={boats} />
            <BoatHistory boats={boats} />
            <BoatCharacteristics boats={boats} />
        </>

    )
}

export default BoatDetails
