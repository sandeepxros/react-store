import { NavItems } from "../helper/Navigation";
import style from "./Footer.module.css";
export default function About() {
  return (
    <div className="col-md-2 col-sm-6 col-6">
      <ul class="nav flex-column justify-content-start align-items-start">
        <li>
          <small
            class={`text-light nav-link ${style["footer__list__heading"]}`}
          >
            ABOUT
          </small>
        </li>
        <NavItems where="/" linkcss={style["footer__link"]}>
          About Us
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Careers
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Press
        </NavItems>
      </ul>
    </div>
  );
}
