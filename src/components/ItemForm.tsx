import React, { useState } from "react";
import { Item } from "../App";

interface ItemFormProps {
  onAddItem: (item: Item) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [itemName, setItemName] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemName || !expiryDate) return alert("Please fill in all fields");

    const newItem: Item = {
      id: Date.now(),
      name: itemName,
      expiryDate,
    };

    onAddItem(newItem);
    setItemName("");
    setExpiryDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Expiration Date:</label>
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>
      <button type="submit" style={{ marginTop: "15px", padding: "10px 20px" }}>
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
