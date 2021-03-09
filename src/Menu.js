import React from "react";

const mapItems = ({ id, img, title, price, desc }) => {
  return (
    <article key={id} class="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="menu-info">
        <header>
          <h4>{title}</h4>
          <h4>{price}</h4>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

const Menu = ({ items }) => {
  return <div>{items.map(mapItems)}</div>;
};

export default Menu;
