import React, { useState } from "react";
import "./Form.css";

export default function Form({ pSetHistory, pHistory }) {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };
  const handleAdd = () => {
    setTotal(total + amount);
    pSetHistory([
      ...pHistory,
      ...[
        {
          dateTime: new Date().toISOString(),
          amount: amount,
          action: "Add",
        },
      ],
    ]);
  };
  const handleRemove = () => {
    if (total - amount >= 0) {
      setTotal(total - amount);
      pSetHistory([
        ...pHistory,
        ...[
          {
            dateTime: new Date().toISOString(),
            amount: amount,
            action: "Remove",
          },
        ],
      ]);
    } else {
      alert("This will lead to negative balance");
    }
  };
  return (
    <div className="form">
      <div className="balance-section">
        <h3>
          Balance: <span>{total}</span>
        </h3>
      </div>
      <div>
        <div>
          <input
            type="number"
            id="price-field"
            defaultValue={amount}
            onChange={handleChange}
          />
        </div>
        <div className="actions">
          <div>
            <button className="add-btn" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div>
            <button className="remove-btn" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
