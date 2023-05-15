import React, {useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

const ShowOne = (props) => {

    const [ShowOne, setShowOne] = useState({});

    const id = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${id.id}`)
            .then((res) => {
                setShowOne(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])


    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/delete/${id.id}`)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => console.log(err))
            }

    return(
        <div className='header'>
            <h1>{ShowOne.noteTitle}</h1>
            <p>Note Title {ShowOne.noteTitle}</p>
            <p>Note Body {ShowOne.noteBody}</p>
            {/* <button onClick={deleteFilter}>Delete</button>
            <Link to={"/"}>Home</Link> */}
        </div>
    )


}

export default ShowOne;