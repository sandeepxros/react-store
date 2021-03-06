import {ImLeaf} from "react-icons/im"
import Popup from "../helper/Popup";
import {useState} from "react"; 
import {Link} from "react-router-dom";
import useFetch from "../helper/useFetch";
export default function SignUp() {
    const [popup, setpopup] = useState(false); 
    const [response, loading, hasError] = useFetch("http://localhost:5000/user"); 
    console.log(response);
    console.log(loading); 
    console.log(hasError);
  return (
      <>
    <div className="card">
      <h5 class="card-header text-center">
        Create Your Account with Leaf
        <span>
          <ImLeaf color="green" />
        </span>
      </h5>
      <div className="card-body">
        <form>
            <div class="mb-3">
            <label htmlFor="email" className="form-label">
            Input you email
            </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              placeholder="abc@xyz.com"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={()=>setpopup(true)}
            >
              Send OTP
            </button>
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="password"
              id="otp"
              className="form-control"
              required
              disabled
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
              disabled
            />
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
          <button type="submit" className="btn btn-success btn-sm col-12 mb-2" disabled>
            Login
          </button>
          <small>
            Already have an account?<Link to="/user">click here</Link>
          </small>
        </form>
      </div>
     
    </div>
    <Popup visible={()=>setpopup(false)} status={popup}><small>Otp sent.. check your inbox</small></Popup>
    </>
  );
}
