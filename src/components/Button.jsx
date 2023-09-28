import { styled } from "@mui/material";
import { applyButtonTheme } from "../functions/Button";
import { LoadingButton } from "@mui/lab";
import "../styles/Button.css";

const ButtonComponent = (props) => {
  const buttonTheme = applyButtonTheme(props.theme);
  const Button = styled(LoadingButton)({
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: buttonTheme.fontSize,
    background: buttonTheme.bg,
    fontFamily: [].join(","),
    color: buttonTheme.color,
    "&:hover": {
      background: buttonTheme.bgOnHover,
      color: buttonTheme.color,
    },
  });

  return (
    <Button
      sx={props.sx}
      type={props.type}
      onClick={props.onClick}
      variant={props.variant}
      fullWidth={props.fullWidth}
      disableElevation
      className={buttonTheme.className}
    >
      {props.label}
    </Button>
  );
};

export default ButtonComponent;
