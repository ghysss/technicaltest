// stateless component
import React from 'react';

const ItemCheckbox = (props) => {
    return (
        <li>
            <input
                type="checkbox"
                key={props.id}
                onChange={props.handleItemCheck}    // appel de la fonction handleItemCheck à chaque changement d'état
                checked={props.isChecked}
                value={props.value}
            /> {props.value}
        </li>
    );
}

export default ItemCheckbox;