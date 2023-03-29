import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Arama/arama.css"


function Arama(props) {
  const { weather } = props;
  const [city,setCity]=useState("");
  
 useEffect(()=>console.log(city),[city])

const handleChange=()=>{
console.log(weather.name)
const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e15d7746a895be340d07bbe796ffb37b`
axios(baseUrl).then(data=>console.log(data));
}
  return (
    <div className='arama'>
      <form onSubmit={(e)=>{e.preventDefault();handleChange()}}>
      <input onChange={(e)=>setCity(e.target.value)} className='arama-input' type="text" placeholder='Arama'/>
    <button type='submit' className='btn'>veriyi getir</button>

      </form>
    </div>
  )
}

export default Arama
