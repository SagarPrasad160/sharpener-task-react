import React from "react";
import OrderItem from "./OrderItem";

function OrderList({ orders, removeOrder }) {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem order={order} key={order.id} removeOrder={removeOrder} />
      ))}
    </div>
  );
}

export default OrderList;
