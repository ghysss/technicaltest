import React, { Fragment } from 'react'

const ItemCheckbox = ({ label, change, isChecked }) => {
    return (
        <Fragment>
            <input type='checkbox' checked={isChecked} onChange={(event) => change(event)} />
            <label>{label}</label>
            <br />
        </Fragment>
    )
}

export default ItemCheckbox
