export const stylingModal = () => {
    const modalStyle = {
        style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%)',
            width: "30%",
            maxHeight: "70%",
            borderRadius: "5px",
            padding: "10px",
            background: "rgba(255, 255, 255)",
        },
        className: "modal-component"
    }

    return modalStyle;
}