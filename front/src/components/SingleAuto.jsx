
import React from "react";
import { Link } from "react-router-dom";


//necesito recibir una props de autos desde su comp Padre  q sea un array asi lo mapeo!!

export default ({ autos }) =>{ 
  
  return(
  <div>
    <Link to="/autos">
      <h4>Volver a autos</h4>
    </Link>
    <h2>
      {autos.marca} {autos.modelo}
    </h2>
    <h4>ANIO {autos.anio}</h4>
    <br />
    <h4>PRECIO {autos.precio}</h4>
    
  </div>
);
}
