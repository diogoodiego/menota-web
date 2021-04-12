import {Sidebar, RecentNotes} from '../../components'
import { useState } from 'react';
import { useCookies} from 'react-cookie';
import { useLocation  } from "react-router-dom";
// import { FiPlusCircle } from "react-icons/fi";
import axios from 'axios';
import "./home.css";

function Home(props) {
    const [cookies, removeCookie] = useCookies(['userToken']);
    const token = cookies.userToken;
    axios.defaults.headers.common['Authorization'] = token;

    const location = useLocation();

    const [IsOpen,setIsOpen] = useState(false);

    function hadleClick(e){
        e.preventDefault();
        setIsOpen(!IsOpen)
    }
    return (
        <div className="recent row container-fluid h-100 m-0 p-0">
            <Sidebar/>
            <div className="col">
                <RecentNotes/>
            </div>
        </div>        
    )
}

export default Home;