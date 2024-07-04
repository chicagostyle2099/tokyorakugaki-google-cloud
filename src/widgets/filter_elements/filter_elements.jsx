import React, { useState } from 'react';
import { Link } from "gatsby";
import '../filter_elements/filter_elements.css'; // Adjust the path if necessary

const FilterComponent = () => {
  const [filter, setFilter] = useState('bou');

  const filterSelection = (category) => {
    setFilter(category);
  };

  const items = [

      { category: 'bou', name: '棒', link: '/bou/bou_youjinbou'},
    { category: 'bou', name: '防', link: '/bou/bou_bouka'},
    { category: 'bou', name: '妄', link: '/bou/bou_boushin'},
    { category: 'bou', name: '謀', link: '/bou/bou_hakaru'},
    { category: 'bou', name: '坊', link: '/bou/bou_dorobou'},
    { category: 'bou', name: '妨', link: '/bou/bou_samatageru'},
    { category: 'bou', name: '帽', link: '/bou/bou_boushi'},
    { category: 'bou', name: '望', link: '/bou/bou_kibou'},
    { category: 'bou', name: '亡', link: '/bou/bou_horobosu'},
    { category: 'bou', name: '傍', link: '/bou/bou_boukansha' },
    { category: 'bou', name: '暴', link: '/bou/bou_bouryoku'},
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
        <button className={`btn ${filter === 'bou' ? 'active' : ''}`} onClick={() => filterSelection('bou')}>BOU</button>
        <button className={`btn ${filter === 'cars' ? 'active' : ''}`} onClick={() => filterSelection('cars')}>Cars</button>
        <button className={`btn ${filter === 'animals' ? 'active' : ''}`} onClick={() => filterSelection('animals')}>Animals</button>
        <button className={`btn ${filter === 'fruits' ? 'active' : ''}`} onClick={() => filterSelection('fruits')}>Fruits</button>
        <button className={`btn ${filter === 'colors' ? 'active' : ''}`} onClick={() => filterSelection('colors')}>Colors</button>
      </div>

      <div className="container">
        {items.map((item, index) => (
          <div key={index} className={`filterDiv ${item.category} ${filter === 'all' || item.category.split(' ').includes(filter) ? 'show' : ''}`}>
            <Link to={item.link} className="item-link">{item.name}</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
