import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const WebDeveloperModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Web Developer</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>Develop and maintain custom websites and web applications.</li>
            <li>
              Write clean, efficient, and well-documented code using HTML, CSS,
              JavaScript, and other programming languages.
            </li>
            <li>
              Collaborate with designers, project managers, and other
              stakeholders to ensure project objectives are met.
            </li>
            <li>
              Test and troubleshoot code to ensure functionality and
              cross-browser compatibility.
            </li>
            <li>
              Implement and maintain content management systems, such as
              WordPress or Drupal.
            </li>
            <li>
              Stay up-to-date with emerging web development technologies and
              trends.
            </li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Bachelors degree in computer science or related field</li>
            <li>Proven experience as a web developer or similar role</li>
            <li>
              Strong knowledge of web development languages, such as HTML, CSS,
              and JavaScript
            </li>
            <li>
              Experience with front-end frameworks, such as React or Vue.js
            </li>
            <li>
              Familiarity with content management systems, such as WordPress or
              Drupal
            </li>
            <li>Strong problem-solving and analytical skills</li>
            <li>Excellent communication and interpersonal skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloperModal;
