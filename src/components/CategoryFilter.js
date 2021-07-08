import React from "react";

function CategoryFilter({ categories, handleClick, active }) {
  return (
    <div className="categories" onClick={handleClick}>
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            className={active === category ? "selected" : null}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
