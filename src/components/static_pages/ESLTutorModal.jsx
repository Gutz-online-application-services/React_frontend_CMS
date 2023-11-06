import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const ESLTutorModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: ESL Tutor</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Provide high-quality language instruction to non-native English
              speakers.
            </li>
            <li>
              Develop and deliver customized lesson plans that meet the specific
              needs and goals of individual students.
            </li>
            <li>
              Assess and evaluate students' language proficiency and progress.
            </li>
            <li>
              Provide feedback and support to help students improve their
              language skills.
            </li>
            <li>Communicate with students and other stakeholders as needed.</li>
            <li>
              Stay up-to-date with emerging language teaching methods and
              technologies.
            </li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Bachelors degree in TESOL, education, or a related field.</li>
            <li>Proven experience as an ESL tutor or similar role.</li>
            <li>
              Strong knowledge of language teaching principles and practices.
            </li>
            <li>
              Experience teaching students from diverse cultural and linguistic
              backgrounds.
            </li>
            <li>Excellent communication and interpersonal skills.</li>
            <li>
              Ability to develop and deliver engaging and interactive lesson
              plans.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ESLTutorModal;
