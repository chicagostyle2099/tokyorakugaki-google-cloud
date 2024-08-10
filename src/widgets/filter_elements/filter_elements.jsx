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

    { category: 'bu', name: '武', link: '/bu/bu_musha'},
    { category: 'bu', name: '部', link: '/bu/bu_bubun'},
    { category: 'bu', name: '分', link: '/bu/bu_jibun'},
    { category: 'bu', name: '不', link: '/bu/bu_fushigi'},
    { category: 'bu', name: '無', link: '/bu/bu_buji'},
    { category: 'bu', name: '舞', link: '/bu/bu_maiagaru'},
    // { category: 'bu', name: '歩', link: '/bu/bu_boushi'},
    { category: 'bu', name: '夫', link: '/bu/bu_daijoubu'},
    // { category: 'bu', name: '奉', link: '/bu/bu_horobosu'},
    
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},
    
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
        <button className={`btn ${filter === 'bou' ? 'active' : ''}`} onClick={() => filterSelection('bou')}>Bou</button>
        <button className={`btn ${filter === 'bu' ? 'active' : ''}`} onClick={() => filterSelection('bu')}>Bu</button>
        <button className={`btn ${filter === 'chou' ? 'active' : ''}`} onClick={() => filterSelection('chou')}>Chou</button>
        <button className={`btn ${filter === 'e' ? 'active' : ''}`} onClick={() => filterSelection('e')}>E</button>
        <button className={`btn ${filter === 'en' ? 'active' : ''}`} onClick={() => filterSelection('en')}>En</button>
        <button className={`btn ${filter === 'fu' ? 'active' : ''}`} onClick={() => filterSelection('fu')}>Fu</button>
        <button className={`btn ${filter === 'gen' ? 'active' : ''}`} onClick={() => filterSelection('gen')}>Gen</button>
        <button className={`btn ${filter === 'go' ? 'active' : ''}`} onClick={() => filterSelection('go')}>Go</button>
        <button className={`btn ${filter === 'han' ? 'active' : ''}`} onClick={() => filterSelection('han')}>Han</button>
        <button className={`btn ${filter === 'hi' ? 'active' : ''}`} onClick={() => filterSelection('hi')}>Hi</button>
        <button className={`btn ${filter === 'hou' ? 'active' : ''}`} onClick={() => filterSelection('hou')}>Hou</button>
        <button className={`btn ${filter === 'ji' ? 'active' : ''}`} onClick={() => filterSelection('ji')}>Ji</button>
        <button className={`btn ${filter === 'jin' ? 'active' : ''}`} onClick={() => filterSelection('jin')}>Jin</button>
        <button className={`btn ${filter === 'jou' ? 'active' : ''}`} onClick={() => filterSelection('jou')}>Jou</button>
        <button className={`btn ${filter === 'ka' ? 'active' : ''}`} onClick={() => filterSelection('ka')}>Ka</button>
        <button className={`btn ${filter === 'kai' ? 'active' : ''}`} onClick={() => filterSelection('kai')}>Kai</button>
        <button className={`btn ${filter === 'kaku' ? 'active' : ''}`} onClick={() => filterSelection('kaku')}>Kaku</button>
        <button className={`btn ${filter === 'kan' ? 'active' : ''}`} onClick={() => filterSelection('kan')}>Kan</button>
        <button className={`btn ${filter === 'kei' ? 'active' : ''}`} onClick={() => filterSelection('kei')}>Kei</button>
        <button className={`btn ${filter === 'ken' ? 'active' : ''}`} onClick={() => filterSelection('ken')}>Ken</button>
        <button className={`btn ${filter === 'ki' ? 'active' : ''}`} onClick={() => filterSelection('ki')}>Ki</button>
        <button className={`btn ${filter === 'ko' ? 'active' : ''}`} onClick={() => filterSelection('ko')}>Ko</button>
        <button className={`btn ${filter === 'kou' ? 'active' : ''}`} onClick={() => filterSelection('kou')}>Kou</button>
        <button className={`btn ${filter === 'kyou' ? 'active' : ''}`} onClick={() => filterSelection('kyou')}>Kyou</button>
        <button className={`btn ${filter === 'kyuu' ? 'active' : ''}`} onClick={() => filterSelection('kyuu')}>Kyuu</button>
        <button className={`btn ${filter === 'rou' ? 'active' : ''}`} onClick={() => filterSelection('rou')}>Rou</button>
        <button className={`btn ${filter === 'sa' ? 'active' : ''}`} onClick={() => filterSelection('sa')}>Sa</button>
        <button className={`btn ${filter === 'sai' ? 'active' : ''}`} onClick={() => filterSelection('sai')}>Sai</button>
        <button className={`btn ${filter === 'san' ? 'active' : ''}`} onClick={() => filterSelection('san')}>San</button>
        <button className={`btn ${filter === 'sei' ? 'active' : ''}`} onClick={() => filterSelection('sei')}>Sei</button>
        <button className={`btn ${filter === 'seki' ? 'active' : ''}`} onClick={() => filterSelection('seki')}>Seki</button>
        <button className={`btn ${filter === 'sen' ? 'active' : ''}`} onClick={() => filterSelection('sen')}>Sen</button>
        <button className={`btn ${filter === 'setsu' ? 'active' : ''}`} onClick={() => filterSelection('setsu')}>Setsu</button>
        <button className={`btn ${filter === 'sha' ? 'active' : ''}`} onClick={() => filterSelection('sha')}>Sha</button>
        <button className={`btn ${filter === 'shi' ? 'active' : ''}`} onClick={() => filterSelection('shi')}>Shi</button>
        <button className={`btn ${filter === 'shin' ? 'active' : ''}`} onClick={() => filterSelection('shin')}>Shin</button>
        <button className={`btn ${filter === 'shou' ? 'active' : ''}`} onClick={() => filterSelection('shou')}>Shou</button>
        <button className={`btn ${filter === 'shu' ? 'active' : ''}`} onClick={() => filterSelection('shu')}>Shu</button>
        <button className={`btn ${filter === 'shuu' ? 'active' : ''}`} onClick={() => filterSelection('shuu')}>Shuu</button>
        <button className={`btn ${filter === 'so' ? 'active' : ''}`} onClick={() => filterSelection('so')}>So</button>
        <button className={`btn ${filter === 'sou' ? 'active' : ''}`} onClick={() => filterSelection('sou')}>Sou</button>
        <button className={`btn ${filter === 'tai' ? 'active' : ''}`} onClick={() => filterSelection('tai')}>Tai</button>
        <button className={`btn ${filter === 'tei' ? 'active' : ''}`} onClick={() => filterSelection('tei')}>Tei</button>
        <button className={`btn ${filter === 'ten' ? 'active' : ''}`} onClick={() => filterSelection('ten')}>Ten</button>
        <button className={`btn ${filter === 'to' ? 'active' : ''}`} onClick={() => filterSelection('to')}>To</button>
        <button className={`btn ${filter === 'tou' ? 'active' : ''}`} onClick={() => filterSelection('tou')}>Tou</button>
        <button className={`btn ${filter === 'you' ? 'active' : ''}`} onClick={() => filterSelection('you')}>You</button>
        <button className={`btn ${filter === 'yuu' ? 'active' : ''}`} onClick={() => filterSelection('yuu')}>Yuu</button>


        
        {/* <button className={`btn ${filter === 'animals' ? 'active' : ''}`} onClick={() => filterSelection('animals')}>Animals</button>
        <button className={`btn ${filter === 'fruits' ? 'active' : ''}`} onClick={() => filterSelection('fruits')}>Fruits</button>
        <button className={`btn ${filter === 'colors' ? 'active' : ''}`} onClick={() => filterSelection('colors')}>Colors</button> */}
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
