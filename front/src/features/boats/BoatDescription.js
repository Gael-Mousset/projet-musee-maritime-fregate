const BoatDescription = (props) => {

    return (
        <>
            {
                props !== undefined ?<tr>
                    {
                        (props.boat.description)?<><div id="Description"><p>{props.boat.description}</p></div></> :<></>
                    }
                </tr> :<></>
            }
        </>
    )
}

export default BoatDescription