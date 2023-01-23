interface HeadingProps {
  taskCount: number;
}
const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h1>Task List</h1>
      <h1>Total Number Of Task: {props.taskCount}</h1>
    </div>
  );
};
export default Heading;
