import "../styles/Modal.css";
import { Modal } from "@mui/material";
import Fade from "@mui/material/Fade";
import { stylingModal } from "../functions/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ModalComponent = ({ open, onClose, children, style }) => {
  const modalStyle = stylingModal(style);

  return (
    <Modal
      disableScrollLock
      disableAutoFocus
      disableEnforceFocus
      keepMounted
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={open}>
        <div className={modalStyle.className} style={modalStyle.style}>
          <div onClick={onClose} className="modal-close-button">
            <CloseRoundedIcon fontSize="small" color="inherit" />
          </div>
          <div>{children}</div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
