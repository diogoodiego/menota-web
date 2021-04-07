import {Link} from "react-router-dom";
import "./landing.css";
import LandingIcon from '../../svg/landing.svg';
import Wave from '../../svg/background.svg';
import Bubble from '../../svg/bubble.svg';
import { FiInstagram } from "react-icons/fi";

function Landing(){
    return(
        <div className="landing-section container-fluid h-100 px-5 py-0 m-0">
            <div className="navbar d-flex row">
                <div className="col"><h5>menota</h5></div>
                <div className="col d-flex flex-row-reverse">
                    <Link to="/signup" className="btn btn-primary ms-3">Sign up</Link>
                    <Link className="btn" to="/login">Sign in</Link>
                </div>
            </div>
            <main>
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <h1>menota</h1>
                        <h5>note-taking app</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error hic non animi aspernatur eaque, natus nisi doloremque ullam. Quo saepe assumenda voluptas fugit sint. Totam porro impedit suscipit magni saepe.</p>
                        <Link to="/signup" className="btn btn-primary px-4 mt-3">Sign up</Link>
                    </div>
                    <div className="col d-flex justify-content-center align-center">
                        <div className="wave">
                            <img src={Bubble} alt=""/>
                        </div>
                        <img className="landing-icon d-none d-md-flex" src={LandingIcon} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Landing;