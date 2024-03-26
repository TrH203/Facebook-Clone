import { useEffect, useState } from "react";
import { getAllContract } from "../service/systemService";
import "../style/Contract.scss";
const Contract = () => {
    const [allContract, setAllContract] = useState([]);
    useEffect(() => {
        const fetchAllContract = async () => {
            const result = await getAllContract(1);
            console.log("contract:", result);
            setAllContract(result);
        }
        fetchAllContract();
    }, []);
    useEffect(() => {
        // This useEffect will run whenever allContract changes
        console.log("Updated allContract:", allContract);
    }, [allContract]); // Dependency array with allContract
    return (
        <>
            <div className="contract-container">
                <div className="title-container">
                    <div className="title">Người liên hệ</div>
                </div>
                {allContract && allContract.map((item, index) => {
                    return (
                        <div className="item-row">
                            <div className="item-image" style={{
                                backgroundImage: `url(./icons8-avatar-48.png)`,
                            }}></div>
                            <span className="feature-name">{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Contract;
