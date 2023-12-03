import iconSearch from '../../img/svg/icon-search.svg';
import React from 'react';

const TodoSearch = ({stateValue, setStateValue})=>{
    
    return ( 
        <div className="block-input">
            <input 
                type="search"
                placeholder="Search"
                id="search"
                name="search" 
                value={stateValue}
                onChange={(e)=>{
                    setStateValue(e.target.value);
                }}
            />
            <img src={iconSearch} alt="icon search"/>
        </div>
    );
}

export { TodoSearch }