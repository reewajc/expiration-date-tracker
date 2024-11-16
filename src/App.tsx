import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

export interface Item {
  id: number;
  name: string;
  expiryDate: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Expiration Date Tracker</h1>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} />
    </div>
  );
};

export default App;
