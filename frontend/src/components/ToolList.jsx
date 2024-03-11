import "../style/ToolList.scss";
const ToolList = () => {
    const image = "/icons8-facebook.svg";
    return (
        <>
            <div className="tool-list-container">
                <div className="tool-list-content">
                    <div className="list-item" style={{
                        backgroundImage: `url(${image})`,
                    }}></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>

                </div>
            </div>
        </>
    )
}
export default ToolList;