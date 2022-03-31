const BoatHistory = (props) => {

    return (
        <>
            <div id="WithBarre">
                <div id="SousTitle">
                    <h1>Histoire</h1>
                </div>
                <div id="Barre"> </div>
            </div>
            <div id="Description">
                {
                    props !== undefined ?<p>{props.boats.history}</p> :<></>
                }
            </div>
        </>
    )
}

export default BoatHistory