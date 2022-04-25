export default function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.type}</td>
      <td>{props.age}</td>
    </tr>
  );
}
