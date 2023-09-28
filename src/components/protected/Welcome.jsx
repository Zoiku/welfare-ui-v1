import "../../styles/ClientWelcome.css";
import { Avatar, IconButton } from "@mui/material";
import Menu from "../../components/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const ClientWelcome = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const openMenu = Boolean(menuAnchorEl);
  const handleClickMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = (open) => () => {
    setMenuAnchorEl(null);
    setOpenModal(open);
  };

  return (
    <div className="client-welcome">
      <div className="client-welcome-inner">
        <div className="client-welcome-helper">Hello</div>
        <div className="client-welcome-text">John Doe</div>
      </div>
      <div className="client-welcome-mobile-avartar-container">
        <IconButton onClick={handleClickMenu}>
          <Avatar className="client-welcome-mobile-avartar">A</Avatar>
        </IconButton>
        <Menu
          position={"right"}
          open={openMenu}
          anchorEl={menuAnchorEl}
          onClose={handleCloseMenu}
        >
          <div onClick={toggleOpenModal(true)} className="menu-item">
            <span>Settings</span>
          </div>
          <div onClick={navigateTo("/login")} className="menu-item">
            <span>Logout</span>
          </div>
        </Menu>
        <Modal open={openModal} onClose={toggleOpenModal(false)}></Modal>
      </div>
    </div>
  );
};

export default ClientWelcome;
