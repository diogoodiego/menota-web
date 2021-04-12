import {useHistory} from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import axios from 'axios';

function ShowNote(props){

    let history = useHistory();
    function DeleteNote(e){
        e.preventDefault();
        console.log("ahhh")
        axios.delete(`https://menota-api.herokuapp.com/api/note/${props.data.id}`).then((res)=>{
            history.push("/");
            history.replace('/menota');
        })
    }
    return(
        <>
        <div className="note-title mt-5">
            <h3>{props.data.title}</h3>
            <button onClick={DeleteNote}><FiTrash/></button>
        </div>
        <div className="note-body mt-4">
            <p>{props.data.body}</p>
        </div>
        {/* <ul>
            <li>{props.data.title}</li>
            <li>{props.data.body}</li>
        </ul> */}
        </>
    )
}

export default ShowNote;