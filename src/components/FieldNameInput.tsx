import { Input } from "antd";

const FieldNameInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: any;
}) => {
  return (
    <Input
      type="text"
      className="mr-2 "
      style={{ height: "fit-content", width: "auto" }}
      placeholder="Field Name"
      value={value}
      onChange={onChange}
    />
  );
};

export default FieldNameInput;
