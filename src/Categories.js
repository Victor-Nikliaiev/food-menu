import React from "react";

const Categories = ({ categories, filterItems }) => {
  const mapCategories = (category) => {
    return (
      <button
        key={category}
        onClick={() => filterItems(category)}
        className="category-btn"
      >
        {category}
      </button>
    );
  };

  return <div className="btn-container">{categories.map(mapCategories)}</div>;
};

export default Categories;
