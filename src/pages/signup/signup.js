import {React,useState} from "react";
import axios from 'axios';
import {Link,Redirect,useHistory} from "react-router-dom";
import { useCookies, Cookies } from 'react-cookie';
import { FcGoogle} from "react-icons/fc";
import { FiLogIn,FiArrowLeft } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import './signup.css'
import LandingIcon from '../../svg/signup.svg';

function Login() {
    const [cookies, setCookie,removeCookie] = useCookies(['userToken']);
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    function Signup(e){
        e.preventDefault();
        console.log('here');
        axios.post('http://127.0.0.1:8000/api/register',{name:name,email:email,password:password}).then(function (response) {
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

    function getName(e){ setName(e.target.value);}
    function getEmail(e){ setEmail(e.target.value);}
    function getPassword(e){ setPassword(e.target.value);}

    return (
        <div className="signup-section container-fluid h-100 p-0 m-0 row">
            <div className="col-5 p-5">
                <Link to="/"><FiArrowLeft/></Link>
                <h1 className="">Sign up</h1>
                <p className="">create account</p>
                <form onSubmit={(e) => Signup(e) } autocomplete="off">
                    <p className="mt-3">Name</p>
                    <input onChange={getName} autocomplete="off" className="my-2 p-1" type="text" required/>

                    <p className="mt-3">Email</p>
                    <input onChange={getEmail} autocomplete="new-password" className="my-2 p-1" type="email" required />

                    <p className="mt-3">Password</p>
                    <input onChange={getPassword} name="password" className="my-2 p-1" type="password" required />

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-50 my-3">Sign in <FiLogIn/></button>
                    </div>


                </form>
                <div className="link-area">
                    <h6 href="" className="text-center my-2"><FcGoogle/> Sign in with google</h6>
                    <h6 href="" className="text-center my-2"><SiFacebook/> Sign in with facebook</h6>

                    <p className="text-center text-muted my-3">Don't have an account? <a href="">Sign up!</a></p>
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