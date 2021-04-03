import "./noteCard.css";

function NoteCard(props){
    return(
        <>
            <div className="col-6 col-md-4 col-lg-3 p-2">
                <div className="card rounded-3 shadow border-0">
                    <h5 className="py-2 px-4" >{props.item.title}</h5>
                    <p className="py-2 px-4" >{props.item.body}</p>
                    <div class="card-footer bg-transparent px-4">Footer</div>
                </div>
            </div>
        </>
    )
};

export default NoteCard;