import { NoteCards} from '../../components'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useCookies} from 'react-cookie';
import axios from 'axios';
import "./home.css";

function Home() {
    const [cookies, removeCookie, setCookie] = useCookies(['userToken']);
    const [userIcon,setUserIcon] = useState('');
    const history = useHistory();
    const token = cookies.userToken;
    axios.defaults.headers.common['Authorization'] = token;
    function Logout() {
        axios.post('https://menota-api.herokuapp.com/api/logout').then((res) => {
            if (res.data.status_code = 200) {
                console.log("here");
                removeCookie('userToken');
                history.push("/");
                window.location.reload();
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(()=>{
        axios.get('https://menota-api.herokuapp.com/api/perfil').then((res)=>{
            console.log(res.data.name.substr(0,1));
            setUserIcon(res.data.name.substr(0,1)); 
        })
    },[]);
    return (
        <>
            <header id="homeNav" className="p-0 m-0">
                <div className="row h-fluid p-0 m-0">
                    <div className="col-2 nav-item">
                        <a className="" href="#">Menota</a>
                    </div>
                    <div className="col nav-item">
                        <input className="w-100 border-0 rounded-3 px-3 shadow-sm" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-1 nav-item">
                        <div className="userIcon text-nowrap">
                            <a className="" href="#" onClick={Logout}>{userIcon}</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div id="home" className="row">
                    {/* <SideBar/> */}
                    <div className="col">
                        <div className="container pt-3">
                            <NoteCards />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="home-section container-fluid h-100 p-0 m-0 row">
                    <div className="col-2 my-nav p-0 d-flex flex-column">
                        <a className="ps-2 active">All notes</a>
                        <a href="#" className="ps-2" onClick={Logout}>Logout</a>
                        <h6 className="tags"> Tags</h6>
                    </div>
                    <div className="col card-area">
                        <div className="container">
                            <NoteCards />
                        </div>
                    </div>
                </div> */}
        </>
    )
}

export default Home;