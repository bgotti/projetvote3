import './App.css';
import React, { useState } from "react";
import AjouterCandidat from './AjouterCandidat';



let nextId = 0;
const initialCandidats = [];

export default function App() {
  const [candidats, setCandidats] = useState(initialCandidats);

  function handleAddCandidat(name) {
    if (name !== "") {
      setCandidats([
        ...candidats,
        {
          id: nextId++,
          name: name,
          count: 0,
          done: false
        }
      ])
    } else {
      alert("Please enter something!")
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Election 2022</h1>
        <AjouterCandidat onAddCandidat={handleAddCandidat} candidats={candidats} />
      </header>
    </div>
  );
}
