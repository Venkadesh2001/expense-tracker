import React, { useEffect, useState } from "react";
import "./History.css";

export default function History({ pHistory }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setHistory(pHistory);
  }, [pHistory]);
  return (
    <div className="history">
      <h3>Transactions:</h3>
      <ul>
        {history.map((item, index) => {
          return (
            <li key={index}>
              <span className="date-time">{item.dateTime}</span>
              {" - "}
              <span className="amount">{item.amount}</span>
              {" - "}
              <span className="action">{item.action}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
