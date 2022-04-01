const BoatHeader = (props) => {

    let urlbato;
    if (props !== undefined)
    {
        urlbato = props.boats.images;
        console.log(urlbato);
    }
    else
    {
        urlbato = undefined;
    }

    return (
        <>
            <div className="headerContainer">
                {
                    urlbato !== undefined ?<div id="ImageBoat" style={{backgroundImage:`url(../${urlbato[0].fileLocation})`}}> </div> :<></>
                }
                <div className="contentTitleHeaderContainer">
                    <p className="titleHeader">{props.boats.name}</p>
                </div>
            </div>
        </>
    )
}

export default BoatHeader