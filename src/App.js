
import React, { useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {Data} from "./Data"
import Header from "./Header"

function App() {
  const [details, setDetails] = useState([])
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OI36iw0qlYvP9WVrIKRAqrAoxuzCKQUKecrFpETR'
  ).then((res)=>{
   console.log(res.data)
    setDetails(res.data)
  })
}, [])
  return (
    <div className="App">
      <Header/>
      
  
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
