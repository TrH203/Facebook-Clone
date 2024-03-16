import HomeHeader from "../components/HomeHeader";
import ToolList from "../components/ToolList";
import ShortCutList from "../components/ShortCutList";
import "../style/Home.scss";
const Home = () => {
    return (
        <>
            <div className="home-container">
                <HomeHeader />
                <div className="home-content">
                    <div className="left-content">
                        <ToolList />
                        <hr />
                        <ShortCutList />
                    </div>
                    <div className="mid-content"></div>
                    <div className="right-content"></div>
                </div>
            </div>

        </>
    )
}
export default Home;