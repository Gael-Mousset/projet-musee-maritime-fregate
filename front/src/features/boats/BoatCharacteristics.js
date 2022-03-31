const BoatCharacteristics = (props) => {

    return (
        <>
            <div id="WithBarre">
                <div id="SousTitle">
                    <h1>Caractéristiques</h1>
                </div>
                <div id="Barre"> </div>
            </div>
            <table >
                <tbody id="Caracteristiques">
                <tr>
                    <th>Année de lancement</th>
                    {
                        props !== undefined ?<td>{props.boats.launchYear}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Type</th>
                    {
                        props !== undefined ?<td>{props.boats.type}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Longueur</th>
                    {
                        props !== undefined ?<td>{props.boats.length}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Matériau</th>
                    {
                        props !== undefined ?<td>{props.boats.material}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Tirant d'eau maxi</th>
                    {
                        props !== undefined ?<td>{props.boats.maxDraught}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Maître bau</th>
                    {
                        props !== undefined ?<td>{props.boats.maxWidth}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Restauration</th>
                    {
                        props !== undefined ?<td>{props.boats.restoration}</td> :<></>
                    }
                </tr>
                <tr>
                    <th>Prix d'achat</th>
                    {
                        props !== undefined ?<td>{props.boats.buyingPrice}</td> :<></>
                    }
                </tr>
                </tbody>
            </table>
        </>

    )
}

export default BoatCharacteristics