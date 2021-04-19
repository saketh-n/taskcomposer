import Card from "./card";
import { useState } from "react";

export default function CardTree(props) {
  const { tree } = props;

  // TODO: replace w/ something better
  const [renderHack, setRenderHack] = useState(0);

  // flattens given tree to array of node with corresponding level tag
  const treetolevelmap = (arr, tree, levelNum) => {
    arr.push({ level: levelNum, node: tree });
    if (tree.children) {
      tree.children.forEach(child => treetolevelmap(arr, child, levelNum + 1));
    }
  };

  const groupByLevel = tree => {
    // flattens tree to array of node with corresponding level tag
    const flattenedTree = [];
    treetolevelmap(flattenedTree, tree, 0);

    // Creates an group of arrays of nodes corresponding to each level in the tree
    const groupedByLevel = flattenedTree.reduce(function(obj, item) {
      const level = item.level;
      if (!obj.hasOwnProperty(level)) {
        obj[level] = [];
      }
      obj[level].push(item.node);
      return obj;
    }, {});

    return groupedByLevel;
  };

  // leveledTree is one where the nodes are grouped by level
  const renderTree = tree => {
    const leveledTree = groupByLevel(tree);
    return Object.values(leveledTree).map((level, index) => (
      <div className="flex justify-around" key={index}>
        {level.map(node => (
          <Card node={node} key={node.id} update={setRenderHack} />
        ))}
      </div>
    ));
  };

  return <>{renderTree(tree)}</>;
}
