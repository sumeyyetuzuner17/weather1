import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Arama/arama.css"


function Arama({data_,setData_}) {
  
  const [city,setCity]=useState("");
 useEffect(()=>console.log(city),[city])
//  useEffect(()=>console.log("burdayım",data_),[data_])

 console.log("burdayım2",data_)

const handleChange=()=>{
console.log(city)
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e15d7746a895be340d07bbe796ffb37b`
axios(url).then(data=>setData_(data));
}
  return (
    <div className='arama'>
      <form onSubmit={(e)=>{e.preventDefault();handleChange()}}>
      <input onChange={(e)=>setCity(e.target.value)} className='arama-input' type="text" placeholder='Arama'/>
    <button type='submit' className='btn'>Ara</button>

      </form>
    </div>
  )
}

export default Arama
