import { useEffect, useState } from "react";
import { getAllSponsor } from "../service/systemService";
import "../style/Sponsor.scss";
const Sponsor = () => {
    const [allSponsor, setAllSponsor] = useState([]);

    useEffect(() => {
        const fetchAllSponsor = async () => {
            const rs = await getAllSponsor();
            setAllSponsor(rs);
            console.log(allSponsor);
        }

        fetchAllSponsor();
    }, [])
    return (
        <>
            <div className="sponsor-container">
                <div className="sponsor-content">
                    <div className="title">Được tài trợ</div>
                    {allSponsor.map((item, index) => {
                        return (
                            <>
                                <a className="item-row" href={item.link} target="_blank" rel="noreferrer">
                                    <div className="item-image" style={{ backgroundImage: `url(${item.imagePath})` }}></div>
                                    <div className="message-container">
                                        <div className="message">{item.message}</div>
                                        <div className="link">{item.link}</div>
                                    </div>

                                </a >

                            </>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default Sponsor;