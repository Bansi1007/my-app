import Task from "./task";

interface TaskProps {
  title: string;
  tasks: string[];
}

//Unordered list of tasks
const Tasks = (props: TaskProps) => {
  return (
    <ul style={{ padding: "0" }}>
      <li style={{ listStyle: "none" }}>
        <h1>{props.title}</h1>
      </li>
      <li style={{ listStyle: "none" }}>
        <ul style={{ listStyleType: "disc" }}>
          {props.tasks.map((ts) => (
            <Task task={ts} key={ts} />
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Tasks;
