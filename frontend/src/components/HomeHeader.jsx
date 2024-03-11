import "../style/HomeHeader.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const HomeHeader = () => {
    return (
        <>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-container">
                        <div className="facebook-logo"></div>
                        <div className="search-bar">
                            <span className="search-icon">
                                <FontAwesomeIcon className="icon" icon={faSearch} />
                            </span>
                            <input type="text" placeholder="Tìm kiếm trên Facebook" />
                        </div>
                    </div>
                    <div className="mid-container">
                        <div className="home"></div>
                        <div className="video"></div>
                        <div className="shop"></div>
                        <div className="social"></div>
                    </div>
                    <div className="right-container">
                        <div className="icon-container-right"><div className="menu"></div></div>
                        <div className="icon-container-right"><div className="messenger"></div></div>
                        <div className="icon-container-right"><div className="noti"></div></div>
                        <div className="icon-container-right"><div className="avatar"></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeHeader;          