import iconSearch from '../../img/svg/icon-search.svg';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoSearch = ()=>{
    const { stateValue, setStateValue } = useContext(TodoContext);
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