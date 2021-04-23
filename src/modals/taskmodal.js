import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function TaskModal(props) {
  const ref = useRef(null);
  const { setShowModal, taskName, setTaskName } = props;
  const history = useHistory();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = () => {
    setShowModal(false);
    if (!taskName) {
      window.alert("Task Name cannot be empty!");
    } else {
      history.push(`/task-${taskName}`);
    }
  };

  return (
    <div
      className="bg-gray-100 w-80 mt-16 m-auto rounded-b-lg
     rounded-t-lg p-1 text-gray-500
     shadow-outline shadow-2xl border-2 border-solid border-gray-50"
    >
      <h1 className="p-3 text-center font-semibold">Name New Task</h1>
      <div className="flex justify-center">
        <input
          ref={ref}
          className="w-3/4 rounded-lg my-1 py-1 px-2"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </div>

      <div className="flex justify-between my-3 mx-2">
        <button
          className="py-2 px-4 bg-white rounded-lg
         font-semibold"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button
          className="py-2 px-4 bg-white rounded-lg
         font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
