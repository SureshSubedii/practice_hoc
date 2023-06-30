import React from 'react';
import HOC from './HOC';

function First({money,handleClick}) {
 
  return (
    <div> <h1>First person:{money}$
      </h1>
        <button onClick={handleClick}>increase amount</button>
    </div>
  )
}

export default HOC(First)