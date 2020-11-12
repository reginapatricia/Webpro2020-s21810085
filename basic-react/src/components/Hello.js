import React from 'react';
import {cekTahun, cekHari} from "../utils/waktu";

const Hello = ()=>{
    return(
      <>
     <p> Hello, welcome to the Web Programming Class</p>
     <p>Tahun sekarang adalah {cekTahun()}</p>
     <p>Tanggal sekarang adalah {cekHari()}</p>
      </>
    ); 
  };

  export default Hello;