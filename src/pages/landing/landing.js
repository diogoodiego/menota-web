import Illustration from "../../svg/landing.svg";
import Logo from "../../svg/logo.svg";
import { FiArrowDown } from "react-icons/fi";
import "./landing.css";

function Landing() {
    return (
        <div id="landing" className="container">
            <div className="nav flex-row justify-content-between align-items-center p-0 m-0 ">
                <img src={Logo} className="logo" alt=""/>
                <a hreaf="" className="btn btn-primary px-4 py-2">Login</a>
                </div>
            <main className="content row">
                <div className="col-lg-4 p-0 d-flex justify-content-center align-items-center   position-relative">
                    <div className="text-group">
                        <p>welcome to menota</p>
                        <h1>A simple way to <span className="primary">organize</span> your notes.</h1>
                        <p>we help organize,simplify and make your notes cute 😍</p>
                        <button className="btn btn-primary mt-3 px-4 py-2">Sign up</button>
                    </div>
                    <a className="scroll-down"><FiArrowDown/>scroll down</a>
                </div>
                <div className="illustraion col d-flex justify-content-center align-items-center">
                    <img src={Illustration} alt=""/>
                </div>
            </main>
        </div>
    )
}

export default Landing;