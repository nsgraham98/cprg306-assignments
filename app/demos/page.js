"use client";
import HomeButton from "../components/HomeButton";
import CitiesComponent from "./citiesComponent";
import AddNewCityComponent from "./addNewCityComponent";
import CounterExample from "./useStateEx";
import React from "react";


function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <CounterDisplay count={count} setCount={setCount} />
      <IncreaseCountComponent setCount={setCount}/>
    </div>
  );
}

function CounterDisplay({count, setCount}) {
  return (
    <div>
      <button>
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
        <div>count: {count}</div>
        </button>
    </div>
  );
}

const IncreaseCountComponent = ({setCount}) => {
  return (
    <button onClick={() => {setCount((prev) => prev + 1)}}>Increment</button>
  );
}

export default function Page(){

  // const obj = { name: "Daisy", age: 25, address: { city: "Calgary" } };
  // const newObj = { ...obj, address: { ...obj.address, country: "Canada" } };

  // const array = [obj, newObj];

  // const arr = [
  //   { name: "Daisy", age: 25 },
  //   { name: "Puddles", age: 30 },
  // ];
  // const newArr = arr.map((item) =>
  //   item.name === "Daisy" ? { ...item, age: 26 } : item
  // );

  // const NewComponent = () => { 
  //   return <div>
  //     <h1>My New Component</h1>
  //   </div>
  // };


return (
<main>
    <HomeButton/>
    <CounterExample/>
    <Counter/>

    {/* <ul>
      {arr.map((item) => (
        <div key={item}>
          <li>{item.name}</li>
          <li>{item.age}</li>
        </div>
      ))}
    </ul>

    <ul>
      {newArr.map((item2) => (
        <div key={item2}>
          <li>{item2.name}</li>
          <li>{item2.age}</li>
        </div>
      ))}
    </ul> */}
    


</main>
    
  );
}