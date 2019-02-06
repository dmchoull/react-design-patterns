import React from "react";

function Select({ items, label, id, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <select id={id} onChange={e => onChange(e.target.value)}>
        {items.map(item => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
