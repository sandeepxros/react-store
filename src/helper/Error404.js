import { Link } from "react-router-dom";

export default function Error404(){
    return(
        <>
        <h5 className="display-5">ERR:: 404</h5>
        <Link to={"/"}>Back to Home</Link>
        </>
    )
}