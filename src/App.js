import React, { useState, useEffect } from 'react'
import './App.css'

import ItemCheckbox from './components/ItemCheckbox'

const DATA = [
  {
    id: 1,
    name: 'Item 1',
    checked: false
  },
  {
    id: 2,
    name: 'Item 2',
    checked: false
  },
  {
    id: 3,
    name: 'Item 3',
    checked: false
  },
  {
    id: 4,
    name: 'Item 4',
    checked: false
  }
]

function App() {
  const [checkboxes, setCheckboxes] = useState(DATA)
  const [selectAllCheckBox, setSelectAllCheckBox] = useState(false)

  useEffect(
    () => {
      setSelectAllCheckBox(isAllChecked(checkboxes))
    },
    [checkboxes]
  )

  function isAllChecked(data) {
    function isAllChecked(checkbox) {
      return (checkbox.checked === true)
    }
    return data.every(isAllChecked)
  }

  function handleChangeCheckBox(event, id) {
    const isChecked = event.target.checked
    const newData = checkboxes.map(checkbox => {
      if (checkbox.id === id) {
        checkbox.checked = isChecked
      }
      return checkbox
    })
    setSelectAllCheckBox(isAllChecked(newData))
    setCheckboxes(newData)
  }

  function handleChangeSelectAllCheckBox(event) {
    const isChecked = event.target.checked
    const newData = checkboxes.map(checkbox => {
      checkbox.checked = isChecked
      return checkbox
    })
    setSelectAllCheckBox(isChecked)
    setCheckboxes(newData)
  }

  return (
    <div>
      {checkboxes.length > 1 ? <ItemCheckbox label='Select all' isChecked={selectAllCheckBox} change={(event) => handleChangeSelectAllCheckBox(event)} /> : null}
      {
        checkboxes.map(checkbox => (
          <ItemCheckbox key={checkbox.id} label={checkbox.name} isChecked={checkbox.checked} change={(event) => handleChangeCheckBox(event, checkbox.id)} />
        ))
      }
    </div>
  )
}

export default App