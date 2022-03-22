/* Importer weather */

const PracticalInfo = () => {
    return (
        <>
            <div className="contentContainer">
                <div className="contentTitleContainer">
                    <p>Infos Pratiques</p>
                </div>
                <Weather/>
                <p className="infoMusee">Le musée est <span>ouvert</span> aujourd'hui !</p>
            </div>
        </>
    )
}

export default PracticalInfo