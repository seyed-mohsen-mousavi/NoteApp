import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [nots, setNots] = useState([]);
  const [sortbuy, setSortBuy] = useState("latest");

  const handleADDNots = (newNote) => {
    setNots((prevnots) => [...prevnots, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNots((prevnots) => prevnots.filter((n) => n.id != id));
  };

  const handlefinished = (e) => {
    const noeId = Number(e.target.value);
    const newNotes = nots.map((n) =>
      n.id == noeId ? { ...n, Finished: !n.Finished } : n
    );
    setNots(newNotes);
  };

  let sortNots = nots;
  if (sortbuy == "erliest")
    sortNots = [...nots].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortbuy == "latest")
    sortNots = [...nots].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortbuy == "finished")
    sortNots = [...nots].sort(
      (a, b) => Number(a.finished) - Number(b.finished)
    );

  return (
    <div className="container">
      <NoteHeader
        nots={nots}
        onsortBuy={sortbuy}
        onSort={(e) => setSortBuy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onADDNote={handleADDNots} />
        <div className="note-container">
          <NoteStatus nots={nots} />
          <NoteList
            sortbuy={sortbuy}
            nots={sortNots}
            onDelete={handleDeleteNote}
            onfinished={handlefinished}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
