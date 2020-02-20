import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoData(){
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=N3PHZR56FYF0FFcCACVWpPOb5ew33e0E3gJ5dllH`)
        .then(response => {
          // console.log(response.data);
          setData(response.data);
        })
        .catch(error => console.log('You have an error!!!! ', error));
    }, []);
    return (
        <div className="PhotoData">
                    <PhotoCard
                    id={data.id}
                    date={data.date}
                    explanation={data.explanation}
                    photo={data.url}
                    title={data.title}
                    />
        </div>
    );
}