import './Body.css';
import React from 'react';
import Card from '../Card/Card';


function sortAlphabetically(items) {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

function Body({ selectedOption, addToCart, list }) {

  


  const filteredItems = selectedOption
    ? sortAlphabetically(
        list.filter((item) => item.type === selectedOption || item.weater === selectedOption)
      )
    : sortAlphabetically(list);
  return (
    <div id="body">
      <div id="row">
        {filteredItems.map((item, index) => (
          <Card key={index} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Body;


