import { Button } from "antd";

import FieldNameInput from "./FieldNameInput";
import FieldTypeInput from "./FieldValueInput";

const CreateObject = ({
  object,
  setOriginalObject,
  previousKeys,
  originalObj,
}) => {
  let keys = [];
  if (Array.isArray(object)) {
    keys = Array(object.length)
      .fill(null)
      .map((_, index) => index);
  } else {
    keys = Object.getOwnPropertyNames(object);
  }

  const updateNestedFieldName = (newFieldName, prevFieldName) => {
    const newObj = { ...originalObj };
    let curr = newObj;

    for (let i = 0; i < previousKeys.length; i++) {
      curr = curr[previousKeys[i]];
    }
    curr[newFieldName] = curr[prevFieldName];
    delete curr[prevFieldName];

    setOriginalObject(newObj);
  };

  const updateNestedFieldValue = (newValue, key) => {
    const newObj = { ...originalObj };
    let curr = newObj;

    for (let i = 0; i < previousKeys.length; i++) {
      curr = curr[previousKeys[i]];
    }
    if (newValue === "nested") newValue = {};
    else if (newValue === "array") newValue = [];

    curr[key] = newValue;
    setOriginalObject(newObj);
  };

  const addItemHandler = () => {
    const newObj = { ...originalObj };
    let curr = newObj;

    for (let i = 0; i < previousKeys.length; i++) {
      curr = curr[previousKeys[i]];
    }

    if (Array.isArray(curr)) curr[curr.length] = "";
    else curr[""] = "";
    setOriginalObject(newObj);
  };

  const editFieldNameHandler = (e, prevKey) => {
    const newKey = e.target.value;
    updateNestedFieldName(newKey, prevKey);
  };

  const editFieldTypeHandler = (e, key) => {
    updateNestedFieldValue(e, key);
  };

  const deleteField = (key) => {
    const newObj = { ...originalObj };
    let curr = newObj;

    for (let i = 0; i < previousKeys.length; i++) {
      curr = curr[previousKeys[i]];
    }
    delete curr[key];
    setOriginalObject(newObj);
  };

  return (
    <div className="bl pl-2 ml-2 ">
      {keys.map((key, index) => (
        <div className="mb-2">
          <div className="mb-2">
            <FieldNameInput
              value={key}
              onChange={(e) => editFieldNameHandler(e, key)}
            />{" "}
            <FieldTypeInput
              value={
                typeof object[key] !== "object"
                  ? object[key]
                  : Array.isArray(object[key])
                  ? "array"
                  : "nested"
              }
              onChange={(e) => editFieldTypeHandler(e, key)}
            />
            <Button>Toggle</Button>
            <Button onClick={() => deleteField(key)}>X</Button>
          </div>
          {typeof object[key] === "object" ? (
            <CreateObject
              object={object[key]}
              originalObj={originalObj}
              setOriginalObject={setOriginalObject}
              previousKeys={[...previousKeys, key]}
            />
          ) : null}
          {index === keys.length - 1 && (
            <Button className="w-full mb-2" onClick={addItemHandler}>
              + Add Item
            </Button>
          )}
        </div>
      ))}
      {keys.length === 0 && (
        <Button className="w-full mb-2" onClick={addItemHandler}>
          + Add Item
        </Button>
      )}
    </div>
  );
};

export default CreateObject;
