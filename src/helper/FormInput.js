export default function FormInput(props){
    return(
        <div className={"mb-3 "+props.css}>
            <label className="form-label" htmlFor={props.label}>{props.label}</label>
            <input type={props.type} className="form-control" id={props.label} placeholder={props.placeholder} required/>
            {props.children}
        </div>
    )
}