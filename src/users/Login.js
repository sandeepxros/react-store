import { ImLeaf } from "react-icons/im";
import "./Login.css";
import img from "../assets/model_3.jpg";
import ForgetPassword from "./ForgetPassword";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <>
    <div className="card">
      <h5 class="card-header text-center">
        Login to your Account
        <span>
          <ImLeaf color="green" />
        </span>
      </h5>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
            <small>Forget Password ? <Link to="/forget-password">click here</Link></small>
          </div>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
            Remember me.
            </label>
          </div>
          <button type="submit" className="btn btn-success btn-sm col-12 mb-2">
            Login
          </button>
          <small>Don't have an account?<Link to="/signup">click here</Link></small>
        </form>
      </div>
    </div>
    </>
  );
}
