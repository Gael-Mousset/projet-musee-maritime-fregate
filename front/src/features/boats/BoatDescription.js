const BoatDescription = (props) => {

    return (
        <>
            {
                props !== undefined ?<tr>
                    {
                        (props.boats.description)?<><div id="Description"><p>{props.boats.description}</p></div></> :<></>
                    }
                </tr> :<></>
            }
        </>
    )
}

export default BoatDescription