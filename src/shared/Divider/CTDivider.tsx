import { Divider, DividerProps } from "@mantine/core";

const CTDivider = (props?: DividerProps) => {
  return <Divider size={1.5} className="my-6 w-full " classNames={{
    root: "dark:!border-gray-500"
  }} {...props} />;
};

export default CTDivider;
