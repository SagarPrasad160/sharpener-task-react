import { useState, useEffect } from "react";

import OrderInput from "./components/OrderInput";
import OrderList from "./components/OrderList";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(prev);
  }, []);

  const addOrder = (order) => {
    const { name, price, table } = order;
    const orderwithId = {
      name,
      price,
      table,
      id: uuidv4(),
    };
    setOrders([...orders, orderwithId]);
    localStorage.setItem("orders", JSON.stringify([...orders, orderwithId]));
  };

  const removeOrder = (orderToRemove) => {
    const updatedOrders = orders.filter(
      (order) => order.id !== orderToRemove.id
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <OrderInput addOrder={addOrder} />
      <OrderList orders={orders} removeOrder={removeOrder} />
    </div>
  );
}

export default App;
