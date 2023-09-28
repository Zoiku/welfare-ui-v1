import Menu from "@mui/material/Menu";
import "../styles/Menu.css";

const MenuComponent = (props) => {
  const position = {
    left: {
      transformOrigin: { horizontal: "left", vertical: "top" },
      anchorOrigin: { horizontal: "left", vertical: "bottom" },
    },
    right: {
      transformOrigin: { horizontal: "right", vertical: "top" },
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    },
  };

  return (
    <Menu
      id="lock-menu"
      children={props.children}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      onClick={props.onClick}
      disableScrollLock
      transformOrigin={position[props.position]?.transformOrigin}
      anchorOrigin={position[props.position]?.anchorOrigin}
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            mt: 1,
            borderRadius: "5px",
            padding: "0 8px",
            background: "rgb(255, 255, 255)",
            border: "1px solid var(--bg-gray-10)",
            minWidth: 200,
          },
        },
      }}
    />
  );
};

export default MenuComponent;
