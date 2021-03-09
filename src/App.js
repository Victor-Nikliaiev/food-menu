import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import foodItems from "./data";

const allCategories = [
  "all",
  ...new Set(foodItems.map((item) => item.category)),
];

function App() {
  const [items, setItems] = useState(foodItems);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(foodItems);
      return;
    }
    const filteredItems = foodItems.filter(
      (item) => item.category === category
    );
    setItems(filteredItems);
  };

  return (
    <main>
      <section className="main-container">
        <header className="title">
          <h1>our menu</h1>
          <div className="underline"></div>
        </header>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
