import { useState } from "react";

function OrderInput({ addOrder }) {
  const [text, setText] = useState("");

  const [price, setPrice] = useState(0 || "");

  const [select, setSelect] = useState("table1");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: text,
      price: price,
      table: select,
    };
    addOrder(order);
    setText("");
    setPrice("");
    setSelect("table1");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type dish name"
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="enter price"
        />
        <label htmlFor="table-select">Select Table:</label>
        <select id="table-select" value={select} onChange={handleSelectChange}>
          <option value="Table1">Table 1</option>
          <option value="Table2">Table 2</option>
          <option value="Table3">Table 3</option>
        </select>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default OrderInput;
