import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


function NoteList(){
    const [Notes, getNotes] = useState([]);

    function ShowNotes(){
        axios.get('https://menota-api.herokuapp.com/api/note').then((res)=>{
            getNotes(res.data.notes);
        });
    }
    
    useEffect(()=>{
        axios.get('https://menota-api.herokuapp.com/api/note').then((res)=>{
            getNotes(res.data.notes);
        });
    },[]);

    return(
        <ul className="p-0 m-0 nav flex-column">
            {Notes.map((data) =>
                <li key={data.id} className="px-4 mb-1 py-1">
                    <Link to={{pathname:'/notes', state:{data:data}}}>
                        {data.title.length > 18 ? data.title.substr(0,15)+"...": data.title }
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default NoteList;