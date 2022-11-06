import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const appClass = inCart ? "in-cart" : ""

  function handleCart () {
    setInCart(() => !inCart)
  }
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleCart}className="add">{inCart ? "Remove From" : "Add to" } Cart</button>
    </li>
  );
}

export default Item;
