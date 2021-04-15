import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios';

import { FiChevronsLeft, FiChevronsRight, FiSearch, FiClock, FiPlusSquare } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";

import './sidebar.css';
import NoteList from '../note/notelist';

function Sidebar() {
    const [Name, setName] = useState('');
    const [userIcon, setUserIcon] = useState('');
    const [Notes, getNotes] = useState([]);
    const [removeCookie] = useCookies(['userToken']);
    const [SidebarOpen, setSidebarOpen] = useState(true);
    const [Hovered, setHovered] = useState(false);
    let history = useHistory();

    function NewNote() {
        axios.post('https://menota-api.herokuapp.com/api/note', { title: `Untitled note ${"#" + Notes.length}`, body: "Type something ..." }).then((res) => {
            history.push("/");
            history.replace('/menota');
        });
    };

    function Logout() {
        axios.post('https://menota-api.herokuapp.com/api/logout').then((res) => {
            removeCookie('userToken');
            history.push("/login");
            window.location.reload();
        })
            .catch((err) => {
                console.log(err);
            });
    }
    function MouseEnter() {
        setHovered(true);
    }
    function MouseLeave() {
        setHovered(false);
    }

    function handleClick() {
        setSidebarOpen(!SidebarOpen);
    }

    useEffect(() => {
        axios.get('https://menota-api.herokuapp.com/api/perfil').then((res) => {
            setName(res.data.name);
            setUserIcon(res.data.name.substr(0, 1));
        });
        axios.get('https://menota-api.herokuapp.com/api/note').then((res) => {
            getNotes(res.data.notes);
        });
    }, []);

    return (
        <>
            {SidebarOpen ?
                <div id="sidebar" className="sidebar border-end h-100 col-lg-2 p-0 m-0 d-none d-lg-grid">
                    <div className="navegation p-0 m-0 py-2">
                        <div className="title px-3 border-bottom d-flex justify-content-between align-center">
                            <h5 className="title">me.nota</h5>
                            <i className="" onClick={handleClick}><FiChevronsLeft/></i>
                        </div>
                        <ul className="nav flex-column pt-3 p-0 m-0 px-3" >
                            <li className="mb-2 d-flex align-baseline"><i><FiSearch /></i><Link className="nav-item" to="/menota">Search</Link></li>
                            <li className="mb-2 d-flex align-baseline"><i><FiClock /></i><Link className="nav-item" to="/menota">Recent</Link></li>
                        </ul>
                        <p className=" p-0 px-3 mt-1">Notes</p>
                    </div>
                    <div className="notes p-0 m-0 px-3 overflow-auto"> 
                        <NoteList />
                    </div>
                    <div className="note-btn px-3 py-2 d-flex justify-content-center align-items-center border-top">
                        <button onClick={NewNote} className="btn btn-primary w-100">Add note</button>
                    </div>
                    <div className="options px-3 d-flex justify-content-between align-items-center border-top">
                        <p onClick={Logout}>{userIcon}</p>
                        <h6 onClick={Logout} className="p-0 m-0">{Name}</h6>
                    </div>
                </div>
                :
                <>
                    <div className="handler w-25 p-0 m-0 d-flex position-fixed top-0 start-0 z-3">
                        <i onMouseEnter={MouseEnter}  className="menu-icon rounded-3 m-2 mb-3" onClick={handleClick}>{Hovered ? <FiChevronsRight /> : <HiMenuAlt2 />}</i>
                    </div>
                    <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className={Hovered? "col-lg-2 p-0 m-0 h-100 position-absolute top-0 start-0 d-flex align-items-center" : "col-lg-2 p-0 m-0 h-100 position-absolute top-0 start-0 d-flex align-items-center d-none " } >
                        <div className="sidebar sidebar-fix ms-2 rounded-3">
                            <div className="navegation p-0 m-0 px-3 py-2">
                                <h5 className="title">me.nota</h5>
                                <ul className="nav flex-column p-0 m-0" >
                                    <li className="mb-1 d-flex align-baseline"><i><FiSearch /></i><Link to="/menota">Search</Link></li>
                                    <li className="mb-1 d-flex align-baseline"><i><FiClock /></i><Link to="/menota">Recent</Link></li>
                                </ul>
                                <p className="note-title">Notes</p>
                            </div>
                            <div className="notes p-0 m-0 px-3 overflow-auto">
                                <NoteList />
                            </div>
                            <div className="note-btn px-3 py-2 d-flex justify-content-center align-items-center border-top">
                                <button onClick={NewNote} className="btn btn-primary w-100">Add note</button>
                            </div>
                            <div className="options p-0 px-3 d-flex justify-content-between align-items-center border-top">
                                <p onClick={Logout}>{userIcon}</p>
                                <h6 onClick={Logout} className="p-0 m-0">{Name}</h6>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Sidebar;