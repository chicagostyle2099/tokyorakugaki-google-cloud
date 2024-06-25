import React, { useState } from 'react';
import '../filter_elements/filter_elements.css'; // Adjust the path if necessary

const FilterComponent = () => {
  const [filter, setFilter] = useState('all');

  const filterSelection = (category) => {
    setFilter(category);
  };

  const items = [
    { category: 'cars', name: 'BMW' },
    { category: 'colors fruits', name: 'Orange' },
    { category: 'cars', name: 'Volvo' },
    { category: 'colors', name: 'Red' },
    { category: 'cars', name: 'Ford' },
    { category: 'colors', name: 'Blue' },
    { category: 'animals', name: 'Cat' },
    { category: 'animals', name: 'Dog' },
    { category: 'fruits', name: 'Melon' },
    { category: 'fruits animals', name: 'Kiwi' },
    { category: 'fruits', name: 'Banana' },
    { category: 'fruits', name: 'Lemon' },
    { category: 'animals', name: 'Cow' },
  ];

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.category.split(' ').includes(filter));

  return (
    <div style={{ position: 'relative', zIndex: 2 }}> {/* Ensure higher z-index */} 
      <div id="myBtnContainer">
        <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => filterSelection('all')}>Show all</button>
        <button className={`btn ${filter === 'cars' ? 'active' : ''}`} onClick={() => filterSelection('cars')}>Cars</button>
        <button className={`btn ${filter === 'animals' ? 'active' : ''}`} onClick={() => filterSelection('animals')}>Animals</button>
        <button className={`btn ${filter === 'fruits' ? 'active' : ''}`} onClick={() => filterSelection('fruits')}>Fruits</button>
        <button className={`btn ${filter === 'colors' ? 'active' : ''}`} onClick={() => filterSelection('colors')}>Colors</button>
      </div>

      <div className="container">
        {items.map((item, index) => (
          <div key={index} className={`filterDiv ${item.category} ${filter === 'all' || item.category.split(' ').includes(filter) ? 'show' : ''}`}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
