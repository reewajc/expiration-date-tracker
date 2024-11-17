import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 4 }}
    >
      <TextField
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Expiration Date"
        type="date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Item
      </Button>
    </Box>
  );
};

export default ItemForm;
