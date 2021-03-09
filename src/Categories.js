import React from "react";

const Categories = ({ categories, filterItems }) => {
  const mapCategories = (category) => {
    return (
      <button
        key={category}
        onClick={() => filterItems(category)}
        className="filter-btn"
      >
        {category}
      </button>
    );
  };

  return <div>{categories.map(mapCategories)}</div>;
};

export default Categories;
