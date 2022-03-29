import {Link} from "react-router-dom";

import "./expandNavbar";

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <div id="replier">
                    <div><Link to={"/"}>Accueil</Link></div>
                    <div><Link to={"/weather"}>Météo</Link></div>
                    <div><Link to={"/boats"}>Liste bateau "la flotte"</Link></div>
                    <div><Link to={"/picture_gallery"}>Galerie de photos</Link></div>
                </div>
                <img id="bouton" src={"menu.png"} width={"25px"} height={"25px"}/>
            </div>

        </>
    )
}

export default Navbar
