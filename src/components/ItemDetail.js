import React from "react";
import { useParams } from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((i) => i.id === Number(id));

  return (
    <div>
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </>
      ) : (
        <h2>Item not found</h2>
      )}
    </div>
  );
};

export default ItemDetail;
