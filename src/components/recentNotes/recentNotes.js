import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { FiClock } from "react-icons/fi";

function RecentNotes() {
    const [Notes, getNotes] = useState([]);

    useEffect(() => {
        axios.get('https://menota-api.herokuapp.com/api/note').then((res) => {
            getNotes(res.data.notes);
        });
    }, []);

    return (
        <div className="container">
            <div className="recent mt-5">
                <h3><FiClock /> Recent notes</h3>
            </div>
            <ul className="nav flex-column mt-5">
                {Notes.map((data) =>
                    <li key={data.id}>
                        <Link to={{ pathname: '/notes', state: { data: data } }}>
                            <p>{data.title}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default RecentNotes;