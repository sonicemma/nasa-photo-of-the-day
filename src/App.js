import React, {useState, useEffect } from "react";
import PhotoCard from "./components/PhotoCard";
import "./App.css";
import axios from "axios";

// https://api.nasa.gov/planetary/apod?api_key=N3PHZR56FYF0FFcCACVWpPOb5ew33e0E3gJ5dllH


function App() {
  return (
    <div className="App">
      <h1>Photo of the day</h1>
      <PhotoCard></PhotoCard>
    </div>
  );
}

export default App;
