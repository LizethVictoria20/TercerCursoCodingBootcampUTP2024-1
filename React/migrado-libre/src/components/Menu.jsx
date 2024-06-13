import React, { useState } from 'react';
import Category  from "./Category.jsx";

const Menu = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const mainOptions = [
    { value: 'fruits', label: 'Fruits', subOptions: ['Apple', 'Banana', 'Orange'] },
    { value: 'vegetables', label: 'Vegetables', subOptions: ['Carrot', 'Broccoli', 'Spinach'] }
  ];

  const toggleCategory = (category) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  return (
    <div>
      {mainOptions.map((option) => (
        <div key={option.value}>
          <button onClick={() => toggleCategory(option.value)}>
            {expandedCategories[option.value] ? '-' : '+'}
          </button>
          <span>{option.label}</span>
          {expandedCategories[option.value] && (
            <ul>
              {option.subOptions.map((subOption, index) => (
                <li key={index}>{subOption}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
