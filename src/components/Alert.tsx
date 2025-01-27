import React, { ReactNode } from "react";
// using the children Prop we can pass children/more complex structures to a component
interface Props {
  children: ReactNode;
  onClose: () => void;
}
// An alert box called My Alert is shown when the Click Me button is clicked(Buttons component). The Alert closes wehen the 'x' button is clicked
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      My Alert
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
