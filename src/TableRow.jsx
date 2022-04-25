export default function TableRow(props) {
  function handleDelete() {
    props.delete(props.id);
  }
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.type}</td>
      <td>{props.age}</td>
      <td>
        <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  );
}
