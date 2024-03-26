import HomeHeader from "../components/HomeHeader";
import ToolList from "../components/ToolList";
import ShortCutList from "../components/ShortCutList";
import Sponsor from "../components/Sponsor";
import ScrollBar from "../components/ScrollBar";
import BirthDay from "../components/BirthDay";
import "../style/Home.scss";
import Contract from "../components/Contact";

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
                            <hr />
                            <ShortCutList />
                        </ScrollBar>
                    </div>
                    <div className="mid-content">
                        <h1>Hello Mid</h1>
                    </div>
                    <div className="right-content">
                        <ScrollBar>
                            <Sponsor />
                            <hr />
                            <BirthDay />
                            <hr />
                            <Contract />
                        </ScrollBar>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;