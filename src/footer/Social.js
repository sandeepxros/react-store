import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import style from "./Footer.module.css";
import { NavItems } from "../helper/Navigation";
export default function Social() {
  return (
    <div className="col-md-2 col-sm-6 col-6">
      <ul class="nav flex-column justify-content-start align-items-start">
        <li>
          <small
            class={`text-light nav-link ${style["footer__list__heading"]}`}
          >
            SOCIAL
          </small>
        </li>
        <NavItems where="/" linkcss={style["footer__link"]}>
          <AiOutlineFacebook />
          <span className="ms-2">Facebook</span>
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          <AiOutlineInstagram />
          <span className="ms-2">Instagram</span>
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          <AiOutlineTwitter />
          <span className="ms-2">Twitter</span>
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          <AiOutlineYoutube />
          <span className="ms-2">Youtube</span>
        </NavItems>
        <NavItems where="/" linkcss={style["footer__link"]}>
          <AiOutlineWhatsApp />
          <span className="ms-2">WhatsApp</span>
        </NavItems>
      </ul>
    </div>
  );
}
