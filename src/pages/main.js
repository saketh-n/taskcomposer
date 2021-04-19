import TaskModal from "../modals/taskmodal";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Main(props) {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const history = useHistory();
  const { setTasks, tasks } = props;
  console.log(Object.keys(tasks));

  const renderTasks = tasks => {
    return Object.keys(tasks).map(task => (
      <button
        className="ml-16 mt-16 bg-blue-200 bg-opacity-50 p-16 rounded-lg text-gray-400 font-bold hover:bg-blue-300 select-none relative"
        key={task}
        onClick={() => history.push(`/task-${task}`)}
      >
        <h1>{task}</h1>
      </button>
    ));
  };

  return (
    <>
      <div class="flex flex-wrap">
        <button
          className="ml-16 mt-16 bg-blue-200 bg-opacity-50 p-16 rounded-lg text-gray-400 font-bold hover:bg-blue-300 select-none"
          onClick={() => setShowModal(true)}
        >
          Create New +
        </button>
        {tasks && renderTasks(tasks)}
      </div>
      {showModal && (
        <TaskModal
          setShowModal={setShowModal}
          taskName={taskName}
          setTaskName={setTaskName}
        />
      )}
    </>
  );
}
