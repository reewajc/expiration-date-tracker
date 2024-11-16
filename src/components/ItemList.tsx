import React from "react";
import { Item } from "../App";

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const today = new Date();

  return (
    <div>
      <h2>Your Items</h2>
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {items.map((item) => {
            const expiry = new Date(item.expiryDate);
            const isExpiringSoon = expiry.getTime() - today.getTime() < 3 * 24 * 60 * 60 * 1000; // 3 days
            return (
              <li
                key={item.id}
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid",
                  borderColor: isExpiringSoon ? "red" : "green",
                }}
              >
                <strong>{item.name}</strong> - Expires on:{" "}
                {new Date(item.expiryDate).toLocaleDateString()}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
