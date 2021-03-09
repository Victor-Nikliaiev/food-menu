import React from "react";

const mapItems = ({ id, img, title, price, desc }) => {
  return (
    <article key={id} className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="menu-info">
        <header>
          <h4 className="menu-title">{title}</h4>
          <h4 className="menu-price">${price}</h4>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

const Menu = ({ items }) => {
  return <div className="menu-container">{items.map(mapItems)}</div>;
};

export default Menu;
