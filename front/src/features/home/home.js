import Header from "../header/header";
import PracticalInfo from "./practicalInfo";

const Home = () => {
    return (
        <>
            <Header />
            <div className="main">
                <PracticalInfo />
                <PracticalInfo />
            </div>
        </>
    )
}

export default Home