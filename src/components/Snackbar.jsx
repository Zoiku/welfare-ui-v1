import Snackbar from "@mui/material/Snackbar";

const SnackbarComponent = ({ open, message, handleClose }) => {
  return (
    <Snackbar
      slot=""
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      message={message}
      autoHideDuration={1000}
    />
  );
};

export default SnackbarComponent;
