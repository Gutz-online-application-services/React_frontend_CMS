import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const VirtualAssistantModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Virtual Assistant</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Provide administrative support to clients remotely, such as
              managing calendars, scheduling appointments, and organizing files.
            </li>
            <li>Respond to emails and phone calls on behalf of clients.</li>
            <li>Conduct research and compile information for clients.</li>
            <li>Prepare reports and documents as needed.</li>
            <li>Assist with project management and coordination.</li>
            <li>Communicate with clients and other stakeholders as needed.</li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Proven experience as a virtual assistant or similar role.</li>
            <li>Strong organizational and time management skills.</li>
            <li>Excellent communication and interpersonal skills.</li>
            <li>
              Strong knowledge of office software, such as Microsoft Office and
              Google Suite.
            </li>
            <li>
              Ability to work independently and manage multiple tasks
              simultaneously.
            </li>
            <li>
              Familiarity with project management software, such as Asana or
              Trello.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistantModal;
