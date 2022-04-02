const BoatHeader = (props) => {

    let boatImageUrl;
    if (props !== undefined)
    {
        boatImageUrl = props.boats.images;
    }
    else
    {
        boatImageUrl = undefined;
    }

    return (
        <>
            <div className="headerContainer">
                {
                    boatImageUrl !== undefined ?<div id="ImageBoat" style={{backgroundImage:`url(../${boatImageUrl[0].fileLocation})`}}> </div> :<></>
                }
                <div className="contentTitleHeaderContainer">
                    <p className="titleHeader">{props.boats.name}</p>
                </div>
            </div>
        </>
    )
}

export default BoatHeader