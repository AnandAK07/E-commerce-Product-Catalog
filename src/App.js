import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      // console.log(data, "jsonData", status);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.map((ele, i) => {
        return (
          <div key={i} className="card">
            {ele.title}
          </div>
        ); // Added curly braces for block scope
      })}
    </div>
  );
}
