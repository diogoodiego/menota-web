import {Link} from "react-router-dom";
import "./landing.css";
import LandingIcon from '../../svg/diary.svg';
import { FiInstagram } from "react-icons/fi";

function Landing(){
    return(
        <div className="landing-section container-fluid h-100 px-5 py-0">
            <div className="navbar d-flex row">
                <div className="col"><h5>menota</h5></div>
                <div className="col d-flex flex-row-reverse">
                    <button className="btn btn-outline-primary">Sign up</button>
                    <Link className="btn" to="/login">Sign in</Link>
                </div>
            </div>
            <main>
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <h1>menota</h1>
                        <h5>note-taking app</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error hic non animi aspernatur eaque, natus nisi doloremque ullam. Quo saepe assumenda voluptas fugit sint. Totam porro impedit suscipit magni saepe.</p>
                        <button className="btn btn-primary px-4">Sign up</button>
                    </div>
                    <div className="col">
                        <img className="landing-icon" src={LandingIcon} alt="" />
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Landing;