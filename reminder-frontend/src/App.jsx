import { useState } from "react";
import "./App.css";
import ReminderForm from "./components/ReminderForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Reminder App</h1>
        <ReminderForm />
      </div>
    </>
  );
}

export default App;
