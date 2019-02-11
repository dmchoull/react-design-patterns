import React from "react";

function List({ items, renderItem }) {
  if (items.length === 0) {
    return <p>Nothing to display</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
