import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:3000/api/items?q=mate",
    })
      .then((response) => {
        setList(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="App">
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>
              <span>
                {item.price.amount}.{item.price.decimals} {item.price.currency}
              </span>
            </p>
            <img
              alt="imagen del producto"
              src={item.picture}
              height="100px"
              width="100px"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
