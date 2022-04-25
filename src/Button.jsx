export default function Button(props) {
  function handleFiltration() {
    console.log(props.text.toLowerCase());
    props.filterType(props.text.toLowerCase());
  }
  return <button onClick={handleFiltration}>{props.text}</button>;
}
