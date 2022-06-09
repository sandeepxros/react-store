import {ImLeaf} from "react-icons/im";
import style from "./Footer.module.css"; 
export const Logo = () => {
  return (
    <div className="d-flex">
      <span className={`${style["im__brand"]}`}>Leaf</span>
      <ImLeaf color="#e45574" size={"3em"} />
    </div>
  );
};
