import { Sidebar, ShowNote } from '../../components'
import { useCookies } from 'react-cookie';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import "./notes.css";

function Notes(props) {
    const [cookies] = useCookies(['userToken']);
    const token = cookies.userToken;
    axios.defaults.headers.common['Authorization'] = token;

    const location = useLocation();

    return (
        <div className="recent row container-fluid h-100 m-0 p-0">
            <Sidebar />
            <div className="col">
                <div className="container">
                    <ShowNote data={location.state.data} />
                </div>
            </div>
        </div>
    )
}

export default Notes;