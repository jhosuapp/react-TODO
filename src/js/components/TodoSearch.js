import iconSearch from '../../img/svg/icon-search.svg';

const TodoSearch = ()=>{
    return ( 
        <div className="block-input">
            <input type="search" placeholder="Cortar cebolla" id="search" name="search" />
            <img src={iconSearch} alt="icon search"/>
        </div>
    );
}

export { TodoSearch }