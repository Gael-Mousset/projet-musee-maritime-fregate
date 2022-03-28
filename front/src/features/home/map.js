import {CustomPopup,MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from "styled-components";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    popupAnchor: [12,0]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
    const boats = [
        {title: "Angoumois", latlong:[46.150682, -1.151594],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "leverger", latlong:[46.150787, -1.152053],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "drague", latlong:[46.158765, -1.210208],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "France 1", latlong:[46.151182, -1.151787],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "Saint Gilles", latlong:[46.151193, -1.151581],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "Manuel Joël", latlong:[46.150715, -1.151937],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "Vedette Duperré", latlong:[46.151009, -1.151626],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"},
        {title: "Joshua", latlong:[46.151482, -1.151353],description:"coucou je suis le bateaueg hrilghdfugergdf ghhilg",state:"Monter à bord : V"}
    ]



    const renderedBoats = () => {
        return boats.map((boat)=>{
            return(
                <Marker position={boat.latlong}>
                    <Popup className="request-popup">
                        <div className="titleBoat"> <a href={"https://takeb1nzyto.space/"}>{boat.title}</a></div>
                        <p>{boat.description}</p>
                        <p>{boat.state}</p>
                    </Popup>
                </Marker>


            )
        })
    }


    return (
        <>
            <div className="contentContainer">
                <div className="contentTitleContainer">
                    <p>Map</p>
                </div>
                <div id={"mapContainer"}>
                    <MapContainer
                        center={[46.151009, -1.151626]}
                        zoom={18}
                        scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {renderedBoats()}
                    </MapContainer>
                </div>
            </div>

        </>
    )
}


export default Map
