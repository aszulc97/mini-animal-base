function FilterButton(props) {
  function handleFiltration() {
    props.filterType(props.text.toLowerCase());
  }

  return <button onClick={handleFiltration}>{props.text}</button>;
}

export { FilterButton as default };
