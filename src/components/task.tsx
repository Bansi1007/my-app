interface TaskProps {
  task: string;
}
const Task = (props: TaskProps) => {
  return <li>{props.task}</li>;
};
export default Task;
