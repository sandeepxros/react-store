import { NavItems } from "../helper/Navigation";
import style from "./Footer.module.css";
export default function Organization() {
  return (
    <div className="col-md-2 col-sm-6 col-6">
      <ul class="nav flex-column justify-content-start align-items-start">
        <li>
          <small
            class={`text-light nav-link ${style["footer__list__heading"]}`}
          >
            ORGANIZATION
          </small>
        </li>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Becom a Seller
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Privacy & Policy
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Terms Of Use
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          FAQ
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Report Infringement
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Sitemap
        </NavItems>
      </ul>
    </div>
  );
}
