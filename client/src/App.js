import './App.css';
import CreateNote from './components/CreateNote';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';
import EditNote from './components/EditNote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from "react";



function App() {

  const [List, setList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element = {<ShowAll noteList={List} setNoteList={setList}/>}/>
          <Route path ="/create" element = {<CreateNote noteList={List} setNoteList={setList}/>}/>
          <Route path ="/note/edit/:id" element = {<EditNote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
