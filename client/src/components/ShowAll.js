import React, {useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import {Button, Card} from 'react-bootstrap';

const ShowAll = (props) => {

    const {noteList, setNoteList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
        .then((res) => {
            setNoteList(res.data);
        })
        .catch((err) => console.log(err))
    }, [])
            
            

    return(
        <div className="header">
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/create">New Note</a></li>
            </ul>
            <h1>Note Wall</h1>
            {noteList.map((note, index) => (
                <Card key={index} className="NoteCard">
                    <Card.Body>
                    <h3>{note.noteTitle}</h3>
                    <p>{note.noteBody}</p>
                    </Card.Body>
                    <button className="edit" onClick={() => navigate(`/note/edit/${note._id}`)}>Edit</button>
                </Card>
            ))}
            <Button variant="primary" onClick={() => navigate("/create")}>Write a new note</Button>
        </div>
    );

};

export default ShowAll;