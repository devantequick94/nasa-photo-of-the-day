import React from "react";

export function Data(props){
    const { data } = props





return (
    <div className="data">
      <h2>{data.title}</h2>
      
      <img src={data.url}/>

      <p>{data.explanation}</p>

      <p>{data.date}</p>

      <img src={data.url}/>



    </div>
    
)

}