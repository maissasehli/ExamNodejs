import React, { Component } from "react";
import '../CSS/Taskone.css'; // Import the CSS file

class Taskone extends Component {
  // Utility functions as class methods
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

  render() {
    // Example Maps
    const map1 = new Map([["a", 10], ["b", 5], ["c", 15]]);
    const map2 = new Map([["b", 20], ["c", 5], ["d", 10]]);

    const statistics = this.mapStatistics(map1);
    const mergedMap = this.mergeMaps(map1, map2);

    return (
      <div className="task-container">
        <h1 className="header">Map Operations</h1>

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
