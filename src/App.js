//import logo from "./logo.svg";
import animalsArray from "./animals.json";
import "./App.css";
import Button from "./Button";
import TableRow from "./TableRow";

function App() {
  const newArray = animalsArray.map((animal) => [...animal.fullname.split(" "), animal.age]);
  let objArray = [];
  newArray.forEach((array) => {
    const animalObj = { name: "", description: "", type: "", age: 0 };
    [animalObj.name, , animalObj.description, animalObj.type, animalObj.age] = array;
    objArray = [...objArray, animalObj];
  });
  return (
    <div className="App">
      <Button text="Cats" />
      <Button text="Dogs" />
      <Button text="All" />
      <table>
        <thead>
          <tr>
            <TableHeader text="Name" />
            <TableHeader text="Type" />
            <TableHeader text="Description" />
            <TableHeader text="Age" />
          </tr>
        </thead>
        <tbody>
          {objArray.map((animal) => (
            <TableRow {...animal}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeader({ text }) {
  return <th>{text}</th>;
}

export default App;
