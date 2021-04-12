import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
// import {NoteList} from '../../components';
import axios from 'axios';

import { FiChevronsLeft,FiSearch,FiClock,FiPlusSquare} from "react-icons/fi";

import './sidebar.css';
import NoteList from '../note/notelist';

function Sidebar(){
    const [Name,setName] = useState('');
    const [userIcon,setUserIcon] = useState('');
    const [Notes, getNotes] = useState([]);

    function NewNote(){
        axios.post('https://menota-api.herokuapp.com/api/note',{title:"Untitled note",body:"Type something"}).then((res)=>{
            ShowNotes();
        });
    };
    function ShowNotes(){
        axios.get('https://menota-api.herokuapp.com/api/note').then((res)=>{
            getNotes(res.data.notes);
        });
    }
    useEffect(()=>{
        axios.get('https://menota-api.herokuapp.com/api/perfil').then((res)=>{
            setName(res.data.name);
            setUserIcon(res.data.name.substr(0,1)); 
        });
        axios.get('https://menota-api.herokuapp.com/api/note').then((res)=>{
            getNotes(res.data.notes);
        });
    },10000);

    return(
        <div id="sidebar" className="sidebar h-100">
            <div className="menu px-3 d-flex justify-content-between align-items-center">
                <h4 className="title">me.nota</h4>
                <i><FiChevronsLeft/></i>
            </div>
            <div className="options p-0 m-0">
                <ul className="p-0 m-0 nav flex-column" >
                    <li className="px-3 mb-1 p-1 d-flex align-baseline"><i><FiSearch/></i><a href="">Search</a></li>
                    <li className="px-3 mb-1 p-1 d-flex align-baseline"><i><FiClock/></i><Link to="/menota">Recent</Link></li>
                </ul>
            </div>
            <div className="notes p-0">
                <div className="p-0 m-0 px-3 my-2 d-flex justify-content-between align-items-center">
                    <p>Notes</p><i onClick={NewNote} ><FiPlusSquare/></i>
                </div>
                <NoteList/>
            </div>
            <div className="user px-3 d-flex justify-content-between align-items-center border-top">
                <p>{userIcon}</p>
                <h6 className="p-0 m-0">{Name}</h6>
            </div>
        </div>
    );
}

export default Sidebar;