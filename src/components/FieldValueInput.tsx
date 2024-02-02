import { Select } from "antd";
import { FIELD_TYPES } from "../utils/constants";

const FieldValueInput = ({
  value = "",
  onChange,
}: {
  value: string;
  onChange: any;
}) => {
  return (
    <Select
      className="mr-2 ml-2 "
      placeholder={<div>Field Type</div>}
      value={value}
      onChange={onChange}
      options={FIELD_TYPES.map((type) => ({
        value: type,
        label: <div>{type}</div>,
      }))}
      style={{ width: "100px" }}
    />
  );
};

export default FieldValueInput;
