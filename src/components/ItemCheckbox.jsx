import React, { Fragment } from 'react';

const ItemCheckbox = ({ label, id, isChecked, onChecked }) => {
    if (typeof id === 'undefined') {
        id = label
    }

    return (
        <Fragment>
            <input
                type="checkbox"
                id={id}
                value={id}
                checked={isChecked}
                onChange={onChecked}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </Fragment>
    );
}

export default ItemCheckbox;