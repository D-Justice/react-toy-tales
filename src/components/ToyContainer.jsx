import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({ toys, removeToy, incLikes }) => {
  return (
    <div id="toy-collection">
      { toys.map((each, index) => <ToyCard key={index} incLikes={incLikes} removeToy={removeToy} toy={each}/>)}
    </div>
  );
}

export default ToyContainer;
