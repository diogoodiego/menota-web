import { NoteCards,Sidebar, ShowNote, NoteList} from '../../components'
import { useState, useEffect } from 'react';
import { useHistory, useLocation  } from "react-router-dom";
import { useCookies} from 'react-cookie';
import { FiPlusCircle } from "react-icons/fi";
import axios from 'axios';
import "./notes.css";

function Notes(props) {
    const [cookies, removeCookie] = useCookies(['userToken']);
    const [Tag,setTag] = useState([]);
    const [Note,setNote] = useState([]);
    const [TagTitle,setTagTitle] = useState('');
    const [TagColor,setTagColor] = useState('');
    const [IsOpen,setIsOpen] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const token = cookies.userToken;
    axios.defaults.headers.common['Authorization'] = token;
    function Logout() {
        axios.post('https://menota-api.herokuapp.com/api/logout').then((res) => {
            if (res.data.status_code = 200) {
                removeCookie('userToken');
                history.push("/");
                window.location.reload();
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }
    function CreateTag(e){
        e.preventDefault();
        axios.post('https://menota-api.herokuapp.com/api/tag',{title:TagTitle,color:TagColor}).then((res)=>{
        })
    }

    function hadleClick(e){
        e.preventDefault();
        setIsOpen(!IsOpen)
    }
    useEffect(()=>{
        axios.get('https://menota-api.herokuapp.com/api/tag').then((res)=>{
            setTag(res.data);
        });
    },[]);
    console.log(location.state.data)

    function getTagTitle(e){ setTagTitle(e.target.value);}
    function getTagColor(e){ setTagColor(e.target.value);}

    return (
        <>
        <div className="recent row container-fluid h-100 m-0 p-0">
            <div className="col-lg-2 p-0 m-0">
                <Sidebar/>
            </div>
            <div className="col">
                <div className="container">
                    <ShowNote data={location.state.data}/>
                    <button onClick={Logout}>logout</button>
                </div>
            </div>
        </div>        
        {/* <div  className={IsOpen ? "create-tag" : "create-tag p-2 d-none" }>
            <div class="card-header d-flex justify-content-between">
                <p>ddwdw</p>  
                <button onClick={hadleClick}>x</button>
            </div>
            <form onSubmit={(e) => CreateTag(e) } className="m-2" action="">
                <div>
                    <input type="text" onChange={getTagTitle} placeholder="Tittle"/>
                </div>
                <div>
                    <input type="color" onChange={getTagColor} placeholder="Color"/>
                </div>
                <button type="submit"> crete tag</button>
            </form>
        </div>

        <header class="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 border-bottom">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Menota</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <input class="border-0 w-100 mx-4" type="text" placeholder="Search" aria-label="Search"/>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link pointer" onClick={Logout}>Sign out</a>
                </li>
            </ul>
        </header>
        <div className="container-fluid">
            <div className="row">
                <nav id="sideBar" className="col-md-3 col-lg-2 d-md-block bg-white sidebar">
                <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        <span data-feather="home"></span> All notes
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        <span data-feather="home"></span> Favorites
                    </a>
                </li>
                </ul>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Tags</span>
                    <a class="link-secondary" href="#" aria-label="Add a new report">
                        <span onClick={hadleClick}><FiPlusCircle/></span>
                    </a>
                </h6>
                <ul className="nav flex-column">
                    {Tag.map((data) =>
                    <li class="nav-item">
                        <a class="nav-link active" style={{color: data.color}} aria-current="page" href="#">
                            <span data-feather="home"></span> {data.title}
                        </a>
                    </li>
                    )}
                </ul>
                <div className="user-area border-top w-100 row m-0 py-1">
                    <div className="col">
                        <p>{Name}</p>
                    </div>
                    <div className="col-4">config</div>
                </div>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {Note.map((data) =>
                    <>
                        <span>{data.title}</span>
                        <span>{data.body}</span>
                    </>
                )}
                </main>
            </div>
        </div> */}
        </>
    )
}

export default Notes;