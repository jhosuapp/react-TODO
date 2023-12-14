import { ReactComponent as IconCheck } from '../../img/svg/icon-check.svg';
import { ReactComponent as IconDelete } from '../../img/svg/icon-trash.svg';


const icons = {
    "IconCheck": (color) => <IconCheck fill={color}/>,
    "IconDelete": (color) => <IconDelete fill={color}/>
};

const TodoIcon = ({cls, type, color, onClick})=>{
    return (
        <picture className={cls} onClick={onClick}>
            {icons[type](color)}
        </picture>
    );
}

export { TodoIcon }