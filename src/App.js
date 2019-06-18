import React, { Component } from 'react';
import './App.css';
import ItemCheckbox from './components/ItemCheckbox'

class App extends Component {
  state = {
    selectedAllCheckbox: false,
    items: [
      { id: 1, value: "Item 1", isChecked: false },
      { id: 2, value: "Item 2", isChecked: false },
      { id: 3, value: "Item 3", isChecked: false },
      { id: 4, value: "Item 4", isChecked: false }
    ]
  }

  // Checkbox 'Select all'
  handleAllChecked = (event) => {
    let items = this.state.items
    items.forEach(item => {       // parcours le tableau des items afin d'update la values 'isChecked' en fonction de l'event
      item.isChecked = event.target.checked
    })
    this.setState({selectedAllCheckbox: event.target.checked, items: items }) //update des states
  }

  /*
    Checkbox 'Item X'
  */
  handleItemCheck = (event) => {
    let items = this.state.items
    items.forEach(item => {
        if (item.value === event.target.value)
        item.isChecked = event.target.checked
      }
    )
    
    function isAllChecked(item) {                   // fonction test si l'item est checked
      return (item.isChecked === true);
    }

    this.setState({selectedAllCheckbox: items.every(isAllChecked) ? true : false, items: items }) //update des states
  }

  render() {
    return (
      <div className="App">
        <input
          type="checkbox"
          onChange={this.handleAllChecked}            // appel de la fonction handleAllChecked à chaque changement d'état
          checked={this.state.selectedAllCheckbox}
        /> Select all
        <ul>
          {
            this.state.items.map((item, index) => { // mapping du tableau items
              return (
                <ItemCheckbox                       // utilisation du component ItemCheckBox
                  key={index}
                  handleItemCheck={this.handleItemCheck}
                  {...item}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;