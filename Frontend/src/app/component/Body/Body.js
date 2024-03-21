import React, {useRef} from 'react';
import Card from '../Card/Card';
import './Body.css'; 

function sortAlphabetically(items) {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

function Body({ selectedOption, addToCart, list }) {
  // Filtrer et trier les produits en fonction de l'option sélectionnée
  const filteredItems = selectedOption
    ? sortAlphabetically(
        list.filter((item) => item.type === selectedOption || item.weater === selectedOption)
      )
    : sortAlphabetically(list);

  // Organiser les produits dans des groupes par option
  const groupedItems = list.reduce((groups, item) => {
    const { type, weater } = item;
    groups['all'] = groups['all'] || [];
    groups['all'].push(item);
    groups[type] = groups[type] || [];
    groups[type].push(item);
    groups[weater] = groups[weater] || [];
    groups[weater].push(item);
    return groups;
  }, {});
  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const delta = Math.sign(event.deltaY) * 500; 
    container.scrollLeft += delta;
  };
 

  return (
    <div id="body">
    <div id='row'>
      {Object.keys(groupedItems).map((option, index) => (
        <div key={index} className="option-container">
          <h2>{option.charAt(0).toUpperCase() + option.slice(1)}</h2>
          <div id="prod" ref={containerRef} onWheel={(event) => handleScroll(event)}>
            {groupedItems[option].map((item, idx) => (
              <Card key={idx} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default Body;
