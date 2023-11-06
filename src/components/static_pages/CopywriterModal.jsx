import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const CopywriterModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Copywriter</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Develop high-quality written content for various platforms, such
              as websites, marketing materials, social media, and blog posts.
            </li>
            <li>
              Collaborate with clients, project managers, and other stakeholders
              to understand project objectives and target audiences.
            </li>
            <li>
              Research and gather information to support content development.
            </li>
            <li>Edit and proofread content to ensure accuracy and clarity.</li>
            <li>
              Stay up-to-date with emerging industry trends and best practices.
            </li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>
              Bachelors degree in English, journalism, or a related field.
            </li>
            <li>Proven experience as a copywriter or similar role.</li>
            <li>Strong writing and editing skills.</li>
            <li>Excellent research and analytical skills.</li>
            <li>
              Familiarity with SEO best practices and keyword research tools.
            </li>
            <li>Strong communication and interpersonal skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CopywriterModal;
