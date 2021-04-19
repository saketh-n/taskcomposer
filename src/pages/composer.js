import { useParams } from "react-router-dom";
import CardTree from "../components/cardtree";
import { useHistory } from "react-router-dom";

export default function Composer(props) {
  const { taskname } = useParams();
  const { tasks, setTasks } = props;
  const history = useHistory();

  if (!tasks.hasOwnProperty(taskname)) {
    // set to empty tree
    setTasks({
      ...tasks,
      [taskname]: {
        text: "",
        id: "1"
      }
    });
  }

  console.log(tasks[taskname]);

  const taskTree = tasks[taskname];

  const handleSubmit = () => {
    history.push(`/`);
  };

  // because setTasks is async
  return tasks[taskname] ? (
    <>
      <h1 className="m-auto text-center text-gray-400 font-extrabold p-6 text-lg tracking-wide select-none">
        {`Composite Task: ${taskname}`}
      </h1>
      <CardTree tree={taskTree} />
      <div className="flex flex-row-reverse my-16 mr-32">
        <button
          className="py-4 px-8 bg-gray-100 rounded-lg
         font-semibold text-xl flex flex-col-reverse"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  ) : (
    <></>
  );
}
