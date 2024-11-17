import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
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
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Expiration Date Tracker
      </Typography>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} />
    </Container>
  );
};

export default App;
