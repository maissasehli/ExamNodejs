import React, { Component } from "react";
import "../CSS/Taskone.css"; // Import the CSS file

class Taskone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map1: new Map(),
      map2: new Map(),
      key: "",
      value: "",
      targetMap: "map1", // Specifies which map to update
    };
  }

  // Utility functions
  mapStatistics(map) {
    const values = Array.from(map.values());
    const sum = values.reduce((acc, val) => acc + val, 0);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const average = sum / values.length;

    return { min, max, average, sum };
  }

  mergeMaps(map1, map2) {
    const result = new Map(map1);

    for (const [key, value] of map2) {
      if (result.has(key)) {
        result.set(key, result.get(key) + value);
      } else {
        result.set(key, value);
      }
    }

    return result;
  }

  // Handle input changes
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Add a key-value pair to the selected map
  addKeyValuePair = () => {
    const { key, value, targetMap } = this.state;
    if (!key || isNaN(value)) {
      alert("Please enter a valid key and numeric value.");
      return;
    }

    const updatedMap = new Map(this.state[targetMap]);
    updatedMap.set(key, parseFloat(value));

    this.setState({ [targetMap]: updatedMap, key: "", value: "" });
  };

  render() {
    const { map1, map2, key, value, targetMap } = this.state;
    const statistics = this.mapStatistics(map1);
    const mergedMap = this.mergeMaps(map1, map2);

    return (
      <div className="task-container">
        <h1 className="header">Map Operations</h1>

        <div className="input-form">
          <select
            name="targetMap"
            value={targetMap}
            onChange={this.handleInputChange}
            className="select-map"
          >
            <option value="map1">Map 1</option>
            <option value="map2">Map 2</option>
          </select>

          <input
            type="text"
            name="key"
            placeholder="Key"
            value={key}
            onChange={this.handleInputChange}
            className="input-field"
          />
          <input
            type="number"
            name="value"
            placeholder="Value"
            value={value}
            onChange={this.handleInputChange}
            className="input-field"
          />
          <button onClick={this.addKeyValuePair} className="add-button">
            Add Key-Value
          </button>
        </div>

        <div className="section">
          <h2>Statistics of Map 1</h2>
          <pre className="statistics">{JSON.stringify(statistics, null, 2)}</pre>
        </div>

        <div className="section">
          <h2>Merged Map</h2>
          <pre className="merged-map">
            {Array.from(mergedMap.entries())
              .map(([key, value]) => `${key}: ${value}`)
              .join("\n")}
          </pre>
        </div>
      </div>
    );
  }
}

export default Taskone;
