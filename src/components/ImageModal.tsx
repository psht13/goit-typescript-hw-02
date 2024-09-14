import ReactModal from "react-modal";

interface ImageModal {
  isOpen: boolean;
  handleModalClose: () => void;
  modalContent: Modal | null;
}

const ImageModal = ({ isOpen, handleModalClose, modalContent }: ImageModal) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterClose={handleModalClose}
      onRequestClose={handleModalClose}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "relative",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          background: "transparent",
          padding: 0,
          overflow: "hidden",
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={true}>
      <div>
        <img
          src={modalContent?.url}
          alt={modalContent?.alt}
          className="max-h-full max-w-full object-scale-down block m-auto"
        />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
