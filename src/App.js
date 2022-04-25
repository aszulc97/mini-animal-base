//import logo from "./logo.svg";
import animalsArray from "./animals.json";
import "./App.css";
import FilterButton from "./FilterButton";
import TableRow from "./TableRow";
import { useState } from "react";

function App() {
  const newArray = animalsArray.map((animal) => [...animal.fullname.split(" "), animal.age]);
  let objArray = [];
  newArray.forEach((array) => {
    const animalObj = { id: Math.random(), name: "", description: "", type: "", age: 0 };
    [animalObj.name, , animalObj.description, animalObj.type, animalObj.age] = array;
    objArray = [...objArray, animalObj];
  });

  const [allAnimals, setAllAnimals] = useState(objArray);
  const [type, setType] = useState("all");
  const [filteredArray, setFilteredArray] = useState(objArray);

  function filterType(type) {
    setType(type);
    setFilteredArray(allAnimals.filter((animal) => animal.type === type));
    if (type === "all") {
      setFilteredArray(allAnimals);
    }
  }

  function deleteAnimal(id) {
    setAllAnimals((oldState) => oldState.filter((animal) => animal.id !== id));
    filterType(type);
  }

  return (
    <div className="App">
      <FilterButton text="Cat" filterType={filterType} />
      <FilterButton text="Dog" filterType={filterType} />
      <FilterButton text="All" filterType={filterType} />
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
            <TableRow {...animal} delete={deleteAnimal}></TableRow>
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
