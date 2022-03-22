import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    popupAnchor: [12,0]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
    const Angoumois = [46.150682, -1.151594]
    const leverger  = [46.150787, -1.152053]
    const drague = [46.158765, -1.210208]
    const France_1 = [46.151182, -1.151787]
    const Saint_Gilles = [46.151193, -1.151581]
    const Manuel_Joël = [46.150715, -1.151937]
    const Vedette_Duperré = [46.151009, -1.151626]
    const Joshua = [46.151482, -1.151353]
    return (
        <>
            <div className="contentContainer">
                <div className="contentTitleContainer">
                    <p>Map</p>
                </div>
                <div id={"mapContainer"}>
                    <MapContainer
                        center={Angoumois}
                        zoom={13}
                        scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={Angoumois}>
                            <Popup>
                                Angoumois
                            </Popup>
                        </Marker>
                        <Marker position={leverger}>
                            <Popup>
                                leverger
                            </Popup>
                        </Marker>
                        <Marker position={drague}>
                            <Popup>
                                drague
                            </Popup>
                        </Marker>
                        <Marker position={France_1}>
                            <Popup>
                                France_1
                            </Popup>
                        </Marker>
                        <Marker position={Saint_Gilles}>
                            <Popup>
                                Saint_Gilles
                            </Popup>
                        </Marker>
                        <Marker position={Manuel_Joël}>
                            <Popup>
                                Manuel_Joël
                            </Popup>
                        </Marker>
                        <Marker position={Vedette_Duperré}>
                            <Popup>
                                Vedette_Duperré
                            </Popup>
                        </Marker>
                        <Marker position={Joshua}>
                            <Popup>
                                Joshua
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </>
    )
}


export default Map
