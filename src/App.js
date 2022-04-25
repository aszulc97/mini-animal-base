//import logo from "./logo.svg";
import animalsArray from "./animals.json";
import "./App.css";
import Button from "./Button";
import TableRow from "./TableRow";
import { useState } from "react";

function App() {
  const newArray = animalsArray.map((animal) => [...animal.fullname.split(" "), animal.age]);
  let objArray = [];
  newArray.forEach((array) => {
    const animalObj = { name: "", description: "", type: "", age: 0 };
    [animalObj.name, , animalObj.description, animalObj.type, animalObj.age] = array;
    objArray = [...objArray, animalObj];
  });

  const [type, setType] = useState("all");

  //let filteredArray = objArray;

  const [filteredArray, setFilteredArray] = useState(objArray);

  function filterType(type) {
    setType(type);
    setFilteredArray(objArray.filter((animal) => animal.type === type));
    if (type === "all") {
      setFilteredArray(objArray);
    }
    console.log(filteredArray);
  }
  return (
    <div className="App">
      <Button text="Cat" filterType={filterType} />
      <Button text="Dog" filterType={filterType} />
      <Button text="All" filterType={filterType} />
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
          {filteredArray.map((animal) => (
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
