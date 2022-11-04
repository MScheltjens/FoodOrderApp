import { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

const Backdrop = ({ onClose }: ModalProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};
const ModalOverlay = ({ children }: ModalProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
