import React from "react";

function OrderList({ orders, removeOrder }) {
  const ordersTable1 = orders.filter((order) => order.table === "Table1");
  const ordersTable2 = orders.filter((order) => order.table === "Table2");
  const ordersTable3 = orders.filter((order) => order.table === "Table3");

  return (
    <div>
      <div>
        <h1>Table 1</h1>
        {ordersTable1.map((order) => (
          <div key={order.id}>
            {order.name}{" "}
            <button onClick={() => removeOrder(order)}>Delete</button>{" "}
          </div>
        ))}
      </div>
      <div>
        <h1>Table 2</h1>
        {ordersTable2.map((order) => (
          <div key={order.id}>
            {order.name}{" "}
            <button onClick={() => removeOrder(order)}>Delete</button>{" "}
          </div>
        ))}
      </div>
      <div>
        <h1>Table 3</h1>
        {ordersTable3.map((order) => (
          <div key={order.id}>
            {order.name}{" "}
            <button onClick={() => removeOrder(order)}>Delete</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;
