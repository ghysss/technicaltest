import React, { Component } from 'react';
import './App.css';

import ItemCheckbox from './components/ItemCheckbox'

const DATA = [
  {
    id: 'item-3a1a825eaa68',
    name: 'Item 1',
    checked: false
  },
  {
    id: 'item-edc4c2026092',
    name: 'Item 2',
    checked: false
  },
  {
    id: 'item-c16ede2ea651',
    name: 'Item 3',
    checked: false
  },
  {
    id: 'item-f79249f54ddf',
    name: 'Item 4',
    checked: false
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isCheckedList: [],
      selectedAllCheckbox: false
    };
  }

  /** 
   * Chargement des datas 
  */
  componentDidMount() {
    const items = [...DATA]
    const isCheckedList = []

    items.forEach(item => {
      if (item.checked) {
        isCheckedList.push(item.id);
      }
    })

    this.setState({ items, isCheckedList, selectedAllCheckbox: items.length === isCheckedList.length });
  }

  /** 
   * Array d'id d'items
  */
  listItemsId = () => {
    const { items } = this.state;
    const listItemsId = [];

    for (const item of items) {
      listItemsId.push(item.id);
    }
    return listItemsId;
  };

  /** 
   * Gestion du 'Select all'
  */
  handleChangeSelectAllCheckBox = (event) => {
    const { checked } = event.target;
    let listItemsId = [];

    if (checked) {
      listItemsId = this.listItemsId();
    }

    this.setState({
      isCheckedList: listItemsId,
      selectedAllCheckbox: checked
    });
  }

  /** 
   * Gestion des items
  */
  handleChangeCheckBox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      const listItemsId = this.listItemsId();

      this.setState(prevState => {
        const isCheckedList = [...prevState.isCheckedList, value]
        return (
          {
            isCheckedList: isCheckedList,
            selectedAllCheckbox: listItemsId.length === isCheckedList.length
          }
        )
      });
    } else {
      this.setState(prevState => {
        const isCheckedList = prevState.isCheckedList.filter(item => item !== value)

        return (
          {
            isCheckedList: isCheckedList,
            selectedAllCheckbox: false
          }
        )
      });
    }
  }

  render() {
    const { items, isCheckedList, selectedAllCheckbox } = this.state;
    return (
      <div>
        {items.length > 1 ? <ItemCheckbox label='Select all' isChecked={selectedAllCheckbox} onChecked={this.handleChangeSelectAllCheckBox} /> : null}
        <ul>
          {
            items.map(item => {
              return (
                <li key={item.id}>
                  <ItemCheckbox
                    key={item.id}
                    id={item.id}
                    label={item.name}
                    onChecked={this.handleChangeCheckBox}
                    isChecked={isCheckedList.includes(item.id)}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;