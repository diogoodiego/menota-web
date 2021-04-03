import {React,useState} from "react";
import axios from 'axios';
import {Link,Redirect,useHistory} from "react-router-dom";
import { useCookies, Cookies } from 'react-cookie';
import { FcGoogle} from "react-icons/fc";
import { FiLogIn,FiArrowLeft } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import './login.css'
import LandingIcon from '../../svg/diary.svg';

function Login() {
    const [cookies, setCookie,removeCookie] = useCookies(['userToken']);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    function Login(e){
        e.preventDefault();
        console.log('here');
        axios.post('https://menota-api.herokuapp.com/api/login',{email:email,password:password}).then(function (response) {
            // handle success
            setCookie('userToken','Bearer '+response.data.token);
            console.log(cookies.userToken);
            console.log(response.data.message);
            history.push("/menota");
            window.location.reload();
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    };

    function getEmail(e){ setEmail(e.target.value);}
    function getPassword(e){ setPassword(e.target.value);}

    return (
        <div className="login-section container-fluid h-100 p-0 m-0 row">
            <div className="col-5 p-5">
                <Link to="/"><FiArrowLeft/></Link>
                <h1 className="">Welcome back!</h1>
                <p className="">Sign in with</p>
                <form onSubmit={(e) => Login(e) } autoSave="on">

                    <input onChange={getEmail} className="my-2 p-1" type="email" required />

                    <input onChange={getPassword} className="my-2 p-1" type="password" required />

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-50 my-3">Sign in <FiLogIn/></button>
                    </div>


                </form>
                <div className="link-area">
                    <h6 href="" className="text-center my-2"><FcGoogle/> Sign in with google</h6>
                    <h6 href="" className="text-center my-2"><SiFacebook/> Sign in with facebook</h6>

                    <p className="text-center text-muted my-3">Don't have an account? <Link to="/signup">Sign up!</Link></p>
                </div>
            </div>
            <div className="col side">
                <img className="landing-icon ps-5 py-5" src={LandingIcon} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tenetur consequatur, magnam quas maxime possimus debitis.</p>
            </div>
        </div>
    )
}

export default Login;