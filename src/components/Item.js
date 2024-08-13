import React, { useState } from "react";

function Item({ name, category }) {
  const [className, setClassName] = useState("");

  function changeClassName() {
    const newClassName = className === "" ? "in-cart" : "";
    setClassName(newClassName);
  }

  const buttonText = className === "in-cart" ? "Remove From Cart" : "Add To Cart";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeClassName}>{buttonText}</button>
    </li>
  );
}

export default Item;
