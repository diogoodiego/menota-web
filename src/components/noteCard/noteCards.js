import axios from 'axios';
import NoteCard from './noteCard';
import { useCookies, Cookies } from 'react-cookie';
import {useHistory, Link} from "react-router-dom";
import {useState , useEffect} from 'react';

function NoteCards(){
    const [cookies] = useCookies(['userToken']);
    const [Notes,setNotes] = useState([]);
    const token = cookies.userToken;

    useEffect(()=>{
        function loadNotes(){
            axios.defaults.headers.common['Authorization'] = token;
            axios.get('http://localhost:8000/api/note').then((res)=>{
                setNotes(res.data.notes);
            });
            console.log(Notes);
        }
        loadNotes();
    },[])


    return(
        <div className="row d-flex justify-content-between">
            {Notes.map(note =>(
            <>
            <NoteCard item={note}/>
            <NoteCard item={note}/>
            <NoteCard item={note}/>
            <NoteCard item={note}/>
            </>
            ))}
        </div>
    )
};

export default NoteCards;