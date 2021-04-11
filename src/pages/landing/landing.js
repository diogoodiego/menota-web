import {Link} from "react-router-dom";
import "./landing.css";
import LandingSvg from '../../svg/landing.svg';
import Wave from '../../svg/background.svg';
import Bubble from '../../svg/bubble.svg';
import { FiInstagram } from "react-icons/fi";

function Landing(){
    return(
        <div className="container h-100">
            <div className="py-4 d-flex justify-content-between">
                <div>
                    <h2 className="title">me.nota</h2>
                </div>
                <div className="button-group d-flex justify-content-between py-2">
                    <Link to="/login" className="btn ms-3">sign in</Link>
                    <Link className="btn btn-outline-primary ms-3">sign up</Link>
                </div>
            </div>
            <main className="row mt-5">
                <div className="col">
                    <h3 className="mt-5 mb-3">Improve your notes</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eos, rem amet optio repudiandae perferendis doloremque labore praesentium. Quisquam alias laborum praesentium magnam assumenda omnis magni provident dolore molestiae optio?</p>
                    <Link to="/signup" className="btn btn-primary mt-5">Sign up free</Link>    
                </div>
                <div className="col d-none d-md-block">
                    <img className="landing-image" src={LandingSvg} alt="" />
                </div>
            </main>
            {/* <div className="navbar d-flex row">
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
            </main> */}
        </div>
    );
}

export default Landing;