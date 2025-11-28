import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);
  let details={ name: "sawan", age: 21 };
  let arr=[1,2,3,4,5];
  return (
    <>
      <h1 className="bg-yellow-200 text-blue-400 p-4 rounded-2xl">hello my self sawan</h1>
      <Card heading="Featured" text="Discover cutting-edge design patterns and UI components that elevate your digital experiences. give me a text similar to this but diff" />
      <Card heading="Highlighted" subheading={233} />
      <Card heading={details} subheading={arr} text="This is a card with a detailed object and an array." />

    </>
  );
}

export default App;
