import React, { useState } from 'react';
import '../CSS/Tasktwo.css';

function TaskTwo() {
  const [items, setItems] = useState([
    { name: 'apple', value: 5 },
    { name: 'orange', value: 10 },
    { name: 'banana', value: 5 },
    { name: 'pear', value: 10 }
  ]);

  const [order, setOrder] = useState('asc'); // Sorting order: 'asc' or 'desc'

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

  return (
    <div className="task-two-container">
      <h1 className="task-two-title">Enhanced Sorting Task</h1>
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
