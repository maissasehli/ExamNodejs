import React from "react";
import './App.css';
import Taskone from './ExamNodeJs/JS/Taskone'; 
import Tasktwo from './ExamNodeJs/JS/Tasktwo';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">React Task Manager</h1>
        <p className="app-subtitle">A simple tool for managing tasks and maps</p>
      </header>
      <main className="main-content">
        <section className="task-section">
          <h2 className="task-section-title">Task One: Map Operations</h2>
          <Taskone />
        </section>

        <section className="task-section">
          <h2 className="task-section-title">Task Two: Task Management</h2>
          <Tasktwo />
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Task Management App</p>
      </footer>
    </div>
  );
}

export default App;
