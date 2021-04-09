import React, { useState } from "react";

const DropDown = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="container">
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <p>{selectedValue}</p>
    </div>
  );
};

export default DropDown;
