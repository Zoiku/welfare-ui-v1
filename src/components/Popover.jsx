import { Popover } from "@mui/material";

const PopoverComponent = (props) => {
  const id = props.open ? "simple-popover" : undefined;

  return (
    <Popover
      {...props}
      id={id}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            mt: 1,
            padding: "10px",
            fontSize: "small",
            border: "2px solid var(--bg-gray-10)",
            color: "var(--bg-black-1)",
            borderRadius: "5px",
            width: "300px",
          },
        },
      }}
    />
  );
};

export default PopoverComponent;
