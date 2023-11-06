import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const TechSupportModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Technical Support Specialist</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Provide technical assistance and support to end-users for
              hardware, software, and network-related issues.
            </li>
            <li>
              Troubleshoot and resolve technical problems in a timely and
              efficient manner.
            </li>
            <li>Install and configure hardware and software systems.</li>
            <li>Communicate with end-users to identify and resolve issues.</li>
            <li>
              Document technical procedures and solutions for future reference.
            </li>
            <li>
              Stay up-to-date with emerging technology trends and best
              practices.
            </li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Bachelors degree in computer science or related field.</li>
            <li>
              Experience with remote desktop tools such as TeamViewer or Remote
              Desktop Protocol (RDP).
            </li>
            <li>
              Knowledge of network protocols and troubleshooting network
              connectivity issues.
            </li>
            <li>
              Experience with mobile devices such as smartphones and tablets,
              and the ability to troubleshoot mobile apps and mobile device
              issues.
            </li>
            <li>
              Familiarity with cloud-based applications and services such as
              Microsoft 365 or Google Workspace.
            </li>
            <li>
              Ability to document technical issues and solutions in a clear and
              concise manner for future reference.
            </li>
            <li>
              A strong customer-oriented mindset with the ability to empathize
              with customer needs and provide excellent customer service.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechSupportModal;
