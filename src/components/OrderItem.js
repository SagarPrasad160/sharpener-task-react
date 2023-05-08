import React from "react";

function OrderItem({ order, removeOrder }) {
  const handleDelete = (order) => {
    removeOrder(order);
  };

  return (
    <div>
      <h1>{order.table}</h1>
      <p>{order.name}</p>
      <button onClick={() => handleDelete(order)}>Delete</button>
    </div>
  );
}

export default OrderItem;
