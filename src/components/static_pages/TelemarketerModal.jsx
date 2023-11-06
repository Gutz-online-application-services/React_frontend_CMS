import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const TelemarketerModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Telemarketer</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Conduct outbound sales calls to potential customers to promote
              products or services.
            </li>
            <li>
              Follow up on leads and customer inquiries to convert them into
              sales.
            </li>
            <li>
              Keep accurate records of customer interactions and sales data.
            </li>
            <li>Meet or exceed sales targets and goals.</li>
            <li>
              Provide excellent customer service to build and maintain customer
              relationships.
            </li>
            <li>Stay up-to-date with product knowledge and industry trends.</li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Proven experience as a telemarketer or similar role.</li>
            <li>Strong communication and interpersonal skills.</li>
            <li>Excellent sales and negotiation skills.</li>
            <li>Strong knowledge of sales principles and practices.</li>
            <li>
              Ability to work in a fast-paced and competitive environment.
            </li>
            <li>Ability to work independently and as part of a team.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TelemarketerModal;
