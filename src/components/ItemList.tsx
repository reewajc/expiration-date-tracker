import React from "react";
import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import { Item } from "../App";

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const today = new Date();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Your Items
      </Typography>
      {items.length === 0 ? (
        <Typography>No items added yet.</Typography>
      ) : (
        <List>
          {items.map((item) => {
            const expiry = new Date(item.expiryDate);
            const isExpiringSoon = expiry.getTime() - today.getTime() < 3 * 24 * 60 * 60 * 1000; // 3 days

            return (
              <ListItem
                key={item.id}
                sx={{
                  border: "1px solid",
                  borderColor: isExpiringSoon ? "red" : "green",
                  marginBottom: "10px",
                  borderRadius: "4px",
                }}
              >
                <ListItemText
                  primary={item.name}
                  secondary={`Expires on: ${new Date(item.expiryDate).toLocaleDateString()}`}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default ItemList;
