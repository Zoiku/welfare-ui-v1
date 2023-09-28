import "../styles/CenteredContainer.css";

const CenteredContainer = ({ children }) => {
  return (
    <div className="centered-container">
      <div className="centered-container-inner">{children}</div>
    </div>
  );
};

export default CenteredContainer;
