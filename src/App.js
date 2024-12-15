import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="column">
        <div className="heading">To Do</div>
        <div className="allTasks">
          <div className="task">Task 1</div>
        </div>
      </div>

      <div className="column">
        <div className="heading">In Progress</div>
        <div className="allTasks">
          <div className="task">Task 1</div>
        </div>
      </div>

      <div className="column">
        <div className="heading">Done</div>
        <div className="allTasks">
          <div className="task">Task 1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
