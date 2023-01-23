import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Tasks from "./components/tasks";

function App() {
  const [taskList, setTasklist] = useState([
    {
      title: "Humber",
      tasks: ["Task 1", "Task 2", "Task 3"],
      id: 1,
    },
    {
      title: "MERN",
      tasks: ["Lab", "Project", "Quiz"],
      id: 2,
    },
    {
      title: "Java",
      tasks: ["Group Discussion", "Exam", "Assignment"],
      id: 3,
    },
  ]);

  //Counts number of tasks in asklist array.
  function taskCount(): number {
    let taskCount = 0;
    taskList.map((t) => {
      taskCount += t.tasks.length;
    });
    return taskCount;
  }

  return (
    <div>
      <Heading taskCount={taskCount()} />
      {taskList.map((tl) => (
        <Tasks title={tl.title} tasks={tl.tasks} key={tl.id.toString()} />
      ))}
    </div>
  );
}

export default App;
