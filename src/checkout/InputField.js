export default function InputField(props) {
  return (
    <div className={props.css}>
      <label htmlFor={props.label} className="form-label">
        {props.name}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.label}
        placeholder=""
        value=""
        required
      />
    </div>
  );
}
