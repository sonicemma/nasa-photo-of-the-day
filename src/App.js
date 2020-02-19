import React, {useState, useEffect } from "react";
// import photocard
import "./App.css";
import axios from "axios";

// https://api.nasa.gov/planetary/apod?api_key=N3PHZR56FYF0FFcCACVWpPOb5ew33e0E3gJ5dllH


function App() {

  const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=N3PHZR56FYF0FFcCACVWpPOb5ew33e0E3gJ5dllH`)
        .then(response => {
          // console.log(response.data);
        })
        .catch(error => console.log('You have an error!!!! ', error));
    }, []);

  return (
    <div className="App">
      <h1>Photo of the day</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
