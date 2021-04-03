import axios from 'axios';
import NoteCard from './noteCard';
import { useCookies} from 'react-cookie';
import {useState , useEffect} from 'react';

function NoteCards(){
    const [cookies] = useCookies(['userToken']);
    const [Notes,setNotes] = useState([]);
    const token = cookies.userToken;
    axios.defaults.headers.common['Authorization'] = token;

    useEffect(()=>{
        function loadNotes(){
            axios.get('https://menota-api.herokuapp.com/api/note').then((res)=>{
                setNotes(res.data.notes);
            });
        }
        loadNotes();
    },[]);
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