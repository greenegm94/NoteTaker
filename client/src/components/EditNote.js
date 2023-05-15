import React, {useEffect, useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const EditNote = (props) => {

    const id = useParams();
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const {noteList, setNoteList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id.id}`)
            .then((res) => {
                console.log('res.data: ', res.data);
                setNoteTitle(res.data.noteTitle);
                setNoteBody(res.data.noteBody);
            })
            .catch((err) => console.log(err))
    }, [id.id])

    const deleteNote = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/delete/${id.id}`)
            .then((res) => {
                console.log(res.data);
                setNoteList(noteList.filter((note, index) => note._id !== idFromBelow));
            })
            .catch((err) => console.log(err))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id.id}`, {
            noteTitle,
            noteBody,
        })
        .then((res) => {
            navigate("/");
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="header">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">New Note</a></li>
            </ul>
            <h1>Note</h1>
        
            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Note Title</label>
                    <input
                        onChange={(e) => setNoteTitle(e.target.value)}
                        value={noteTitle}
                        name="noteTitle"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Note Body</label>
                    <textarea 
                        onChange={(e) => setNoteBody(e.target.value)}
                        value={noteBody}
                        name="noteBody">
                        Some text...
                    </textarea>
                </div>
                <button onClick={() => submitHandler}>Update</button>
                <button onClick={()=>deleteNote(id.id)}>Delete</button>
            </form>

        </div>

    );
};
    
export default EditNote;