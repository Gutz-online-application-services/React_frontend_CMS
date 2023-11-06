import { AiFillCloseCircle } from "react-icons/ai";
import "./StaticModal.scss";

const GraphicDesignerModal = ({ toggle }) => {
  return (
    <div className="description-modal">
      <div className="modal-content">
        <div onClick={() => toggle(false)} className="modal-close">
          <AiFillCloseCircle />
        </div>

        <div className="modal-header">
          <h2>Position: Graphic Designer</h2>
        </div>
        <div className="modal-body">
          <h3>Responsibilities:</h3>
          <ul>
            <li>
              Design visual elements, such as logos, brochures, posters, and
              digital graphics.
            </li>
            <li>
              Collaborate with clients, project managers, and other stakeholders
              to develop design concepts that meet project objectives and brand
              standards.
            </li>
            <li>
              Create and edit images and graphics using industry-standard
              software, such as Adobe Creative Suite.
            </li>
            <li>
              Produce print-ready files and digital assets for distribution.
            </li>
            <li>
              Stay up-to-date with emerging design trends and technologies.
            </li>
          </ul>
          <h3>Qualifications:</h3>
          <ul>
            <li>Bachelors degree in graphic design or related field.</li>
            <li>Proven experience as a graphic designer or similar role.</li>
            <li>
              Strong knowledge of graphic design principles and practices.
            </li>
            <li>
              Proficiency in industry-standard design software, such as Adobe
              Creative Suite.
            </li>
            <li>Excellent attention to detail and organizational skills.</li>
            <li>Strong communication and interpersonal skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignerModal;
