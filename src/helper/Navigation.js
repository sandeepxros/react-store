import {Link} from "react-router-dom"; 
export const NavItems = (props)=>{
  return (
    <li class={"nav-item "+props.css}>
      <Link class={"nav-link "+props.linkcss}to={props.where}>{props.children}</Link>
    </li>
  );
}
