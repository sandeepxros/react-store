import { NavItems } from "../helper/Navigation";
import style from "./Footer.module.css";
export default function Customer() {
  return (
    <div className="col-md-2 col-sm-6 col-6">
      <ul class="nav flex-column justify-content-start align-items-start ">
        <li>
          <small
            class={`text-light nav-link ${style["footer__list__heading"]}`}
          >
            CUSTOMER
          </small>
        </li>
        <NavItems where="/" linkcss={style["footer__link"]}>
          My Account
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Charges
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Customer Service
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Tract Order
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          Contact Us
        </NavItems>
      </ul>
    </div>
  );
}
