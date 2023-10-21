import "./Header.scss";

const PlayVideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <button className="custom-modal-close" onClick={onClose}>
          Close
        </button>
        <div className="custom-modal-content">
          <iframe
            title="YouTube Video"
            width="100%"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PlayVideoModal;
