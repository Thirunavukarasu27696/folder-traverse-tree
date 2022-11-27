import { useState } from "react";
import Folder from "./components/Folder";
import { explorer } from "./data/folderData";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";

export default function App() {
  const [explorerData, setExplorerDate] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorer, folderId, item, isFolder);
    setExplorerDate(finalTree);
  };
  console.log("explorerData", explorerData);
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
