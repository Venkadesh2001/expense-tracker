import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import History from "./components/History/History";

function App() {
  const [history, setHistory] = useState([]);
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <Form pHistory={history} pSetHistory={setHistory} />
      <History pHistory={history} />
    </div>
  );
}

export default App;
