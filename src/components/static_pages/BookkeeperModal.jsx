import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const BookkeeperModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Book Keeper</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Maintain accurate and up-to-date financial records for the
              company.
            </li>
            <li>Process accounts payable and receivable transactions.</li>
            <li>
              Conduct bank reconciliations and prepare financial statements.
            </li>
            <li>Prepare and file tax returns.</li>
            <li>
              Communicate with vendors and customers regarding financial
              matters.
            </li>
            <li>Assist in budgeting and forecasting activities.</li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Bachelors degree in accounting or finance</li>
            <li>Proven experience as a bookkeeper or similar role</li>
            <li>Strong knowledge of accounting principles and practices</li>
            <li>
              Proficiency in accounting software, such as QuickBooks or Xero
            </li>
            <li>Excellent attention to detail and organizational skills</li>
            <li>Strong communication and interpersonal skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookkeeperModal;
