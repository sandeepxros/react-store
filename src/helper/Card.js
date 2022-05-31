import "./Card.css";
import { Link} from "react-router-dom";
export default function Card(props) {
  return (
    
    <div className="card card-fit p-3">
      <div className="img-fit text-center">
      <img
        src={props.imgsrc}
        className="card-img-top img-fluid d-block imgs"
        alt={props.imgsrc}
        width= {"150px"}
      />
      </div>
      <div className="card-text-fit m-0 ">
      <div className="card-body ">
        <p className="card-text text-fit small"><b>{props.title}</b></p>
        <Link to={"/product/"+props.all.id} className="btn btn-success">Check Out</Link>
      </div>
    </div>
    </div>
  );
}
