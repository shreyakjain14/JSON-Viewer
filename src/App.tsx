import { useState } from "react";
import CreateObject from "./components/CreateObject";

import "./App.css";
import { myStringify } from "./utils/myStringify";

function App() {
  const [nestedObject, setNestedObject] = useState({});

  return (
    <div className="grid grid-two-columns">
      <CreateObject
        object={nestedObject}
        setOriginalObject={setNestedObject}
        previousKeys={[]}
        originalObj={nestedObject}
      />
      <div
        className="bg-gray p-4 w-full ml-2"
        dangerouslySetInnerHTML={{ __html: myStringify(nestedObject) }}
      ></div>
    </div>
  );
}

export default App;
