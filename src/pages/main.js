import TaskModal from "../modals/taskmodal";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Main(props) {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const history = useHistory();
  const { setTasks, tasks } = props;
  const [renderHack, setHack] = useState(0);
  const buttonStyle =
    "py-2 px-4 bg-white rounded-lg font-semibold mx-4 hover:bg-gray-100";

  const renderTasks = tasks => {
    return Object.keys(tasks).map(task => (
      <div
        className="ml-16 mt-16 bg-blue-200 bg-opacity-50 py-4 px-4 rounded-lg text-gray-400 font-bold select-none relative"
        key={task}
      >
        <h1 className="text-center mt-12">{task}</h1>
        <div className="flex justify-between mt-4">
          <button
            className={buttonStyle}
            onClick={() => history.push(`/task-${task}`)}
          >
            Open
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              delete tasks[task];
              // TODO: Don't know how else to re-render
              // i.e by calling setTasks to update
              // the object insteead of delete
              setHack(renderHack + 1);
            }}
          >
            Delete
          </button>
        </div>
      </div>
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
