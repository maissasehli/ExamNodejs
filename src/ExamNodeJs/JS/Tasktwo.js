import React, { useState } from 'react';
import '../CSS/Tasktwo.css';

function TaskTwo() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('asc'); // Sorting order: 'asc' or 'desc'

  const [newName, setNewName] = useState('');
  const [newValue, setNewValue] = useState('');

  // Sorting function with multiple levels (value, then name if same value)
  function customSort(arr, order) {
    return arr.sort((a, b) => {
      // First, compare by the value property
      if (a.value !== b.value) {
        return order === 'asc' ? a.value - b.value : b.value - a.value;
      }
      // If values are equal, compare by name alphabetically
      return a.name.localeCompare(b.name);
    });
  }

  // Handle the sorting order change
  const toggleSortOrder = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    setOrder(newOrder);
    setItems(customSort([...items], newOrder));
  };

  // Handle adding a new item
  const addItem = () => {
    if (newName.trim() === '' || isNaN(newValue) || newValue === '') {
      alert('Please enter a valid name and value.');
      return;
    }

    const newItem = { name: newName.trim(), value: parseFloat(newValue) };
    const updatedItems = [...items, newItem];
    setItems(customSort(updatedItems, order)); // Add item and sort
    setNewName(''); // Clear inputs
    setNewValue('');
  };

  return (
    <div className="task-two-container">
      <h1 className="task-two-title">Enhanced Sorting Task</h1>

      <div className="input-form">
        <input
          type="text"
          placeholder="Enter name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="input-field"
        />
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
      </div>

      <button className="sort-button" onClick={toggleSortOrder}>
        Sort ({order === 'asc' ? 'Descending' : 'Ascending'})
      </button>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTwo;
