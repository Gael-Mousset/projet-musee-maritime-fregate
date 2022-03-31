const BoatDescription = (props) => {

    return (
        <>
            <div id="TitleBoat">
                {
                    props !== undefined ? <h1>{props.boats.name}</h1> :<></>
                }
            </div>
            <div id="Description">
                {
                    props !== undefined ? <p>{props.boats.description}</p> :<></>
                }
            </div>
        </>
    )
}

export default BoatDescription