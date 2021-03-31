import { useCookies, Cookies } from 'react-cookie';
import { FiPlusCircle ,FiTrello,FiSearch} from "react-icons/fi";
import {useState} from 'react';
import axios from 'axios';
import {Link,Redirect, useHistory} from "react-router-dom";
import './sidebar.css';

function Sidebar(props) {
    const history = useHistory();
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [cookies, setCookie,removeCookie] = useCookies(['userToken']);
    const token = "Bearer "+cookies.userToken;
    function Logout(){
        axios.defaults.headers.common['Authorization'] = token;
        axios.post('http://localhost:8000/api/logout').then((res)=>{
            if(res.data.status_code = 200){
                removeCookie('userToken');
                console.log('here');
                history.push("/");
                window.location.reload();
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    axios.defaults.headers.common['Authorization'] = token;
    axios.get('http://localhost:8000/api/perfil').then((res)=>{
        console.log(res.data.name)
        setName(res.data.name);
        setEmail(res.data.email);
    });
    return (
        <>
        <div className="container-fluid">
            <div className="row h-100">
                <div className="col col-lg-2 p-3">
                    <div className="div shadow-sm h-fluid rounded-3 p-0">

                        <div className="logo d-flex justify-content-center py-3">
                            <h5>Logo</h5>
                        </div>

                        <nav className="nav flex-comumn">
                            <div className="nav-item py-2 px-4">
                                <FiTrello/><span>All notes</span>
                            </div>
                        </nav>
                        <nav className="nav flex-comumn">
                            <div className="nav-item py-2 px-4">
                                <FiTrello/><span onClick={Logout}>Logout</span>
                            </div>
                        </nav>

                    </div>
                </div>
                <div className="col-12 col-lg-10 p-3">
                    <div className="container">
                        <div className="row shadow-sm rounded-3 py-2 px-4"><p className="my-1"><FiSearch/> search</p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;