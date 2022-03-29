import '../../boatsList_style.css';
import BoatCard from "./boatCard";

const BoatCards = () => {
    return (
        <>
            <div className="boatCardsContainer">
                <BoatCard />
                <BoatCard />
                <BoatCard />
                <BoatCard />
            </div>
        </>
    )
}

export default BoatCards