import "./styles.css";
import Notes from "./notes";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Link in bio for my Frontend Interview Prep Course",
    },
    {
      id: 2,
      text: "Like this Video and Subscribe to Roadside Coder",
    },
  ]);

  const [note, setNote] = useState("");

  return (
    <div className="App">
      <div className="input-container">
        <input></input>
        <button>Submit</button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}
