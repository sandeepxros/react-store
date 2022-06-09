import { ImLeaf } from "react-icons/im";
import {Link} from "react-router-dom";
import {useState} from "react"; 
import Popup from "../helper/Popup"; 
const card= {
    width: "18rem"
}
export default function AdminLogin(props) {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState(""); 
    const[remember, setRemember] = useState(false); 
    const[err, showErr] = useState(false); 
    const submitHandler = (e)=>{
        e.preventDefault(); 
        if(!username || username.length<=0 || !password || password.length<=0){
            showErr(true); 
        }
        else{
            const details = {"username": username, "password": password};
            if(remember)
            localStorage.setItem("admin", JSON.stringify(details))
            setUsername(""); 
            setPassword(""); 
            setRemember(false); 
            props.data(details, true);
        }
    }
  return (
    <>
    <div className="card" style={card}>
      <h5 class="card-header text-center">
        Admin Login
        <span>
          <ImLeaf color="green" />
        </span>
      </h5>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Admin ID
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              required
              autoFocus
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <small>Forget Password ? <Link to="/user">Create Ticket</Link></small>
          </div>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={remember}
              onChange={(e)=>setRemember(e.target.checked)}
            />
            <label class="form-check-label" for="flexCheckDefault">
            Remember This Browser.
            </label>
          </div>
          <button type="submit" className="btn btn-success btn-sm col-12 mb-2">
            Login
          </button>
        </form>
      </div>
    </div>
    <Popup show={err} visible={()=>showErr(false)}/>
    </>
  );
}
