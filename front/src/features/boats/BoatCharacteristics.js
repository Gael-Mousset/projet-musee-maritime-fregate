const BoatCharacteristics = (props) => {

    return (
        <>
            <div id="WithBarre">
                <div id="SousTitle">
                    <h1>Caractéristiques</h1>
                </div>
                <div id="Barre"> </div>
            </div>
            <table>
                <tbody id="Caracteristiques">
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.launchYear)?<><th>Année de lancement</th><td>{props.boats.launchYear}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.type)?<><th>Type</th><td>{props.boats.type}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.material)?<><th>Matériau</th><td>{props.boats.material}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.restoration)?<><th>Restauration</th><td>{props.boats.restoration}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.buyingPrice)?<><th>Prix d'achat</th><td>{props.boats.buyingPrice}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.length)?<><th>Longueur</th><td>{props.boats.length}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.maxWidth)?<><th>Maître bau</th><td>{props.boats.maxWidth}</td></> :<></>
                        }
                    </tr> :<></>
                }
                {
                    props !== undefined ?<tr>
                        {
                            (props.boats.maxDraught)?<><th>Tirant d'eau maxi</th><td>{props.boats.maxDraught}</td></> :<></>
                        }
                    </tr> :<></>
                }
                </tbody>
            </table>
        </>

    )
}

export default BoatCharacteristics