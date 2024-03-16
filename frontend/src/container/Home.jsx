import HomeHeader from "../components/HomeHeader";
import ToolList from "../components/ToolList";
import ShortCutList from "../components/ShortCutList";

import ScrollBar from "../components/ScrollBar";
import "../style/Home.scss";
const Home = () => {
    return (
        <>
            <div className="home-container">
                <HomeHeader />
                <div className="block" style={{ height: "60px" }}></div>
                <div className="home-content">
                    <div className="left-content">
                        <ScrollBar>
                            <ToolList />
                        </ScrollBar>
                        <hr />
                        <ScrollBar>
                            <ShortCutList />
                        </ScrollBar>
                    </div>
                    <div className="mid-content"></div>
                    <div className="right-content"></div>
                </div>
            </div>

        </>
    )
}
export default Home;