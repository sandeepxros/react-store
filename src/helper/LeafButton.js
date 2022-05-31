import { ImLeaf } from "react-icons/im";
export default function LeafButton(props){
    const{type, css, text} = props; 
    return(
        <button type={type} className={css}>
            {text}
            <span>
                <ImLeaf size={"1.5em"}/>
            </span>
        </button>
    )
}