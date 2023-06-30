import React from 'react';
import HOC from './HOC';


function Second({money,handleClick}) {
 
  return (
    <div> <h1>Second person:{money}$
      </h1>
        <button onClick={handleClick}>increase amount</button>
    </div>
  )
}

export default HOC(Second)