import {React,useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { FcGoogle} from "react-icons/fc";
import { FiLogIn,FiArrowLeft } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import './signup.css'
import LandingIcon from '../../svg/signup.svg';

function Login() {
    const [cookies] = useCookies(['userToken']);
    const [email,setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [animation, setAnimation] = useState(false);
    const [password,setPassword] = useState('');

    function Signup(e){
        e.preventDefault();
        console.log('here');
        setAnimation(true);
        axios.post('https://menota-api.herokuapp.com/api/register',{name:name,email:email,password:password}).then(function (response) {
            // handle success
            console.log('here');
            console.log(cookies.userToken);
            setMessage(response.status);
            console.log(response.data.message);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        setAnimation(false);
    };

    function getName(e){ setName(e.target.value);}
    function getEmail(e){ setEmail(e.target.value);}
    function getPassword(e){ setPassword(e.target.value);}

    return (
        <div className="signup-section container-fluid h-100 p-0 m-0 row">
            <div className="col-5 p-5">
                <Link to="/"><FiArrowLeft/></Link>
                <h1 className="">Sign up</h1>
                <p className="mb-4">create account</p>
                <form onSubmit={(e) => Signup(e) } autoComplete="off" autoSave="off">

                    <div className="input-field mb-4">
                        <input type="text" onChange={getName} required/>
                        <label>Name</label>
                    </div>
                    <div className="input-field mb-4">
                        <input type="text" onChange={getEmail} required/>
                        <label>Email</label>
                    </div>
                    <div className="input-field mb-4">
                        <input onChange={getPassword} autoComplete="new-password" type="password" required />
                        <label>Password</label>
                    </div>

                    {/* <p className="mt-3">Name</p>
                    <input onChange={getName} className="my-2 p-1" type="text" required/> */}

                    {/* <p className="mt-3">Email</p>
                    <input onChange={getEmail} className="my-2 p-1" type="email" required /> */}

                    {/* <p className="mt-3">Password</p>
                    <input onChange={getPassword} name="password" autoComplete="new-password" className="my-2 p-1" type="password" required /> */}

                    <div className="message">{message}</div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-50 my-3">{animation ? <p className="loading-spinner"></p> : <>Sign up <FiLogIn/></>}</button>
                    </div>


                </form>
                <div className="link-area">
                    <h6 href="" className="text-center my-2"><FcGoogle/> Sign in with google</h6>
                    <h6 href="" className="text-center my-2"><SiFacebook/> Sign in with facebook</h6>

                    <p className="text-center text-muted my-3">Already have an account? <Link to="/login">Sign in!</Link></p>
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