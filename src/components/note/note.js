function ShowNote(props){
    return(
        <>
        <ul>
            <li>{props.data.title}</li>
            <li>{props.data.body}</li>
        </ul>
        </>
    )
}

export default ShowNote;