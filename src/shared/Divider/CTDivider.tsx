import { Divider, DividerProps } from "@mantine/core";

const CTDivider = (props?: DividerProps) => {
  return <Divider size={1.5} className="my-6 w-full " classNames={{
    root: "border border-[#fbf0c9] dark:!border-black"
  }} {...props} />;
};

export default CTDivider;
