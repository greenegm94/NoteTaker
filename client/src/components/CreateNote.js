import React, {useState} from "react";
import axios from "axios";
import { useNavigate, navigate, Link } from "react-router-dom";

const CreateNote = (props) => {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();

    axios
        .post("http://localhost:8000/api/create", {
            noteTitle, 
            noteBody,
        })
        .then((res) => {
            if(res.data.message){
                setErrorMessage(res.data.message);
            } else {
                setNoteTitle("");
                setNoteBody("");
                navigate("/");
            }
        })
        .catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className="header">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a class="active" href="/create">New Note</a></li>
            </ul>
            <h1>Write a Note</h1>
            <h4>{errorMessage}</h4>

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

                <br />
                
                <button onClick={() => submitHandler}>Create</button>
            </form>
            
        </div>
    );
};

export default CreateNote;