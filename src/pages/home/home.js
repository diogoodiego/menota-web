import { Sidebar, RecentNotes } from '../../components'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import "./home.css";

function Home() {
    const [cookies] = useCookies(['userToken']);
    const token = cookies.userToken;
    axios.defaults.headers.common['Authorization'] = token;

    return (
        <div className="recent row container-fluid h-100 m-0 p-0">
            <Sidebar />
            <div className="col">
                <RecentNotes />
            </div>
        </div>
    )
}

export default Home;