import '../../boatsList_style.css';
import BoatCard from "./boatCard";

const BoatCards = () => {
    return (
        <>
            <div className="boatCardsContainer">
                <div className="line">
                    <BoatCard />
                    <BoatCard />
                </div>
                <div className="line">
                    <BoatCard />
                    <BoatCard />
                </div>
                <div className="line">
                    <BoatCard />
                    <BoatCard />
                </div>
                <div className="line">
                    <BoatCard />
                    <BoatCard />
                </div>
            </div>
        </>
    )
}

export default BoatCards