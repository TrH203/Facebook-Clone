import HomeHeader from "../components/HomeHeader";
import ToolList from "../components/ToolList";
import "../style/Home.scss";
const Home = () => {
    return (
        <>
            <div className="home-container">
                <HomeHeader />
                <div className="home-content">
                    <div className="left-content"><ToolList /></div>
                    <div className="mid-content"></div>
                    <div className="right-content"></div>
                </div>
            </div>

        </>
    )
}
export default Home;