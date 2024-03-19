import { useEffect, useState } from "react";
import "../style/ShortCutList.scss";
import { getAllFeature } from "../service/systemService";
const ShortCutList = (props) => {
    // const image = "/icons8-facebook.svg";
    const [topFeatures, setTopFeatures] = useState([]);
    const [botFeatures, setBotFeatures] = useState([]);

    const [isExpanse, setIsExpanse] = useState(false);

    useEffect(() => {
        const fetchDataFeatures = async () => {
            try {
                const rs = await getAllFeature();
                setTopFeatures(rs.data.slice(0, 5));
                setBotFeatures(rs.data.slice(5, rs.data.lenght))
            } catch (e) {
                console.log(e);
            }
        }
        fetchDataFeatures();
    }, [])

    const expanseProcess = (event) => {
        const tg = event.currentTarget.closest('.item-row').id;
        tg === 'expanse' ? setIsExpanse(true) : setIsExpanse(false);
    }
    return (
        <>
            <div className="shortcut-list-container">
                <div className="shortcut-list-content">
                    <div className="title-container">
                        <div className="title-name">Lối tắt của bạn</div>
                        <div className="edit-shortcut">Chỉnh sửa</div>
                    </div>
                    {topFeatures.map((item, index) => {
                        return (
                            <div className="item-row">
                                <div className="item-image" style={{
                                    backgroundImage: `url(./features/${item.imagePath})`,
                                }}></div>
                                <span className="feature-name">{item.name}</span>
                            </div>
                        )
                    })}
                    {isExpanse && botFeatures.map((item, index) => {
                        return (
                            <div className="item-row">
                                <div className="item-image" style={{
                                    backgroundImage: `url(./features/${item.imagePath})`,
                                }}></div>
                                <span className="feature-name">{item.name}</span>
                            </div>
                        )
                    })}
                    {isExpanse ?
                        <div className="item-row" id="un-expanse" onClick={(event) => { expanseProcess(event) }}>
                            <div className="item-image un-expanse-btn" style={{ "borderRadius": "100%" }}></div>
                            <span className="feature-name">Ẩn bớt</span>
                        </div> :
                        <div className="item-row" id="expanse" onClick={(event) => { expanseProcess(event) }}>
                            <div className="item-image expanse-btn" style={{ "borderRadius": "100%" }}></div>
                            <span className="feature-name">Xem thêm</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default ShortCutList;