import { RiSecurePaymentFill } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";
import { SiPaytm } from "react-icons/si";
import style from "./Footer.module.css";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaGooglePay,
  FaRupeeSign,
} from "react-icons/fa";
export const SecurePayments = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <FaRupeeSign color={"#525252"} size={"1.4em"} />
      <RiSecurePaymentFill color={"#525252"} size={"1.4em"} />
      <FaCcVisa color={"#525252"} size={"1.4em"} />
      <FaCcMastercard color={"#525252"} size={"1.4em"} />
      <BsPaypal color={"#525252"} size={"1.4em"} />
      <SiPaytm color={"#525252"} size={"1.4em"} />
      <FaCcAmazonPay color={"#525252"} size={"1.4em"} />
      <FaGooglePay color={"#525252"} size={"1.4em"} />
    </div>
  );
};

export const Pay = () => {
  return (
    <div class="col-6 col-md-6 d-flex justify-content-evenly flex-column">
      <p className={`mt-3 ${style["footer__list__heading"]}`}>100% SECURE PAYMENT</p>
      <SecurePayments />
    </div>
  );
};
