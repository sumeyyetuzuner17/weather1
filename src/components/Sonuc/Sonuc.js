import React, { useState } from "react";
import "../Sonuc/sonuc.css";

function Sonuc({ data_ }) {
  return (
    <div className="sonuc">
          {                                         
          data_?.data ? <div className="detay">
          <div className="derece_">{data_?.data ? data_?.data?.main.temp : "Geçersiz Şehir" }</div>
          <div className="durum"> yağmurlu</div>
        </div> :
        <div>
          
        </div>

          
          
          
          
          
          }

      
    </div>
  );
}

export default Sonuc;
