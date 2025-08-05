import { TbXboxX } from "react-icons/tb";

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-4 rounded">{children}</div>
    <button onClick={onClose} className="absolute top-2 right-2">
      <TbXboxX className="text-white text-5xl" />
    </button>
  </div>
);

export default Modal;
