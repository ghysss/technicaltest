import React, { useState, useEffect } from 'react'
import './App.css'

import ItemCheckbox from './components/ItemCheckbox'

const DATA = [
  {
    id: 1,
    name: 'Item 1'
  },
  {
    id: 2,
    name: 'Item 2'
  },
  {
    id: 3,
    name: 'Item 3'
  },
  {
    id: 4,
    name: 'Item 4'
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
    const newData = checkboxes.map(membre => {
      if (membre.id === id) {
        membre.checked = isChecked
      }
      return membre
    })
    setSelectAllCheckBox(isAllChecked(newData))
    setCheckboxes(newData)
  }

  function handleChangeSelectAllCheckBox(event) {
    const isChecked = event.target.checked
    const newData = checkboxes.map(membre => {
      membre.checked = isChecked
      return membre
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
