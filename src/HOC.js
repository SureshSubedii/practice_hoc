import React, { useState } from 'react';

function HOC(OriginalComp) {
    function NewComponent(){
    const [money, setMoney] = useState(5);

        const handleClick=()=>{
            setMoney(money*2);
        }
     return  <OriginalComp money={money} handleClick={handleClick}/>

    }
    return NewComponent
  
}

export default HOC