import { Pay } from "./SecurePayments";
import { NewsLetter } from "./NewsLetter";
import { Logo } from "./Logo";
export default function Branding() {
  return (
    <div className="col-md-4 col-12 justify-content-center align-items-start d-flex flex-column mb-3">
      <Logo />
      <NewsLetter />
      <Pay />
    </div>
  );
}
