import "./Header.scss";
import { AppWrap } from "../../wrapper";
import Scene from "./../../assets/header-assets/27.png";
import item1 from "./../../assets/header-assets/30.png";
import item2 from "./../../assets/header-assets/31.png";
import item3 from "./../../assets/header-assets/35.png";

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-container">
        <div className="container-right">
          <img className="scene" src={Scene} alt="" />
          <img src={item1} className="item one" alt="" />
          <img src={item2} className="item two" alt="" />
          <img src={item3} className="item three" alt="" />
        </div>
        <div className="container-left">
          <h2>It Takes guts to be gutz</h2>
          <p className="p-text">
            GUTZ Online Communication Services, founded in 2018 in the
            Philippines, delivers top-tier BPO solutions worldwide, led by CEO
            Regine Mae E. Gutierrez and COO Katherine J. Agripa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Header, "home");
