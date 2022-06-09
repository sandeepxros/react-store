export default function ListGroupItem(props) {
  return (
    <li className="list-group-item list-group-item-action" onClick={props.onClick}>{props.children}</li>
  );
}
