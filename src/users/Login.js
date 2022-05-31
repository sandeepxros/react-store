import { ImLeaf } from "react-icons/im";
import "./Login.css";
import img from "../assets/loading.gif"; 
export default function Login() {
  return (
    <div className="card mb-3" style={{ width: "50rem" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
        <img src={img} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8 col-sm-12">
        <h5 class="card-header text-center">Login to your account</h5>
        <div className="card-body">
        <form>
          <div className="container text-center my-5">
          <ImLeaf color="green" size={"1.5em"} />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput ">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-success" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </div>

        </div>
      </div>
    </div>
  );
}
