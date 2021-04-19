import { useState } from "react";

export default function Card(props) {
  const { node } = props;
  const [text, setText] = useState(node.text);
  const handleChange = e => {
    setText(e.target.value);
    // Pass update along!
    node.text = e.target.value;
  };

  const addChild = () => {
    if (!node.hasOwnProperty("children")) {
      node.children = [];
    }
    node.children = [
      ...node.children,
      { text: "", id: `${node.id}-${node.children.length}`, parent: node }
    ];
    // hack to re-render parent tree
    props.update(prev => prev + 1);
  };

  const deleteNode = () => {
    const index = node.parent.children.indexOf(node);
    node.parent.children.splice(index, 1);
    props.update(prev => prev + 1);
  };

  const deleteNodeSafely = () => {
    // you can only get here if you have a parent
    if (node.children) {
      // TODO: pop-up warning
      if (window.confirm("This node has children!")) {
        deleteNode();
      }
      return;
    }
    deleteNode();
  };

  return (
    <div className="flex justify-center mt-8">
      <div
        className="p-4 bg-gray-100 my-2 rounded-b-lg
     rounded-t-lg
     shadow-outline shadow-lg border-2 border-solid border-gray-50 mx-2"
      >
        <textarea
          className="p-2 bg-gray-100 w-full outline-none h-24"
          value={text}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <button
            className="py-2 px-4 bg-white rounded-lg
         font-semibold mr-8"
            onClick={addChild}
          >
            Add Child
          </button>
          {node.parent ? (
            <button
              className="py-2 px-4 bg-white rounded-lg
         font-semibold"
              onClick={deleteNodeSafely}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
