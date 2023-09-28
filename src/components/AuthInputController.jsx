import "../styles/AuthInputController.css";

export const AuthInputController = ({ children, labelText, labelHelper }) => (
  <div className="auth-input-controller">
    <div className="auth-input-label">
      <div className="auth-input-label-text">{labelText}</div>
      <div className="auth-input-label-helper">{labelHelper}</div>
    </div>
    <div className="auth-input-box">{children}</div>
  </div>
);
