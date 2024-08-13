import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function changeMode() {
    const mode = darkMode ? false : true;
    setDarkMode(mode);
  }

  const appClass = darkMode ? "App dark" : "App light";
  const buttonText = darkMode ? "Dark mode" : "Light mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => changeMode()}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
