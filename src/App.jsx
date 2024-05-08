import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  function hanleReducer(state, { type, payload }) {
    switch (type) {
      case "add": {
        return [...state, payload];
      }

      case "remove": {
        return state.filter((n) => n.id != payload);
      }
      case "complete": {
        const noeId = Number(payload.target.value);
        const newNotes = state.map((n) =>
          n.id == noeId ? { ...n, Finished: !n.Finished } : n
        );
        return newNotes;
      }
    }
  }
  const [nots, dispach] = useReducer(hanleReducer, []);
  const [sortbuy, setSortBuy] = useState("latest");

  const handleADDNots = (newNote) => {
    dispach({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispach({ type: "remove", payload: id });
  };

  const handlefinished = (e) => {
    dispach({ type: "complete", payload: e });
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
