import { ReactNode, useEffect } from "react";
import CloseSolid from "../assets/icons/CloseSolid";

interface ModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

const FSModal = ({ isModalOpen, onCloseModal, children }: ModalProps) => {
  // Disable scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-out animate-fadeIn`}
          >
            <button
              onClick={onCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <CloseSolid />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FSModal;
