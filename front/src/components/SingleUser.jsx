import React from "react";
import { Link } from "react-router-dom";



export default ({ user, cars }) =>(
  <div>
    <Link to="/users"> <h4>Volver a users</h4> </Link>
    <h2>
      {user.name} {user.lastname}
    </h2>
    <h4>DNI {user.dni}</h4>
    <br />
    <h3>Cars</h3>
    {cars.map((car) => {
      return (
        <table key={car.id}>
        <tbody> 
        <tr>
            <td>
              <h4>
                <Link to={`/cars/${car.id}`}>{car.marca}</Link>
              </h4>
            </td>
            <td>
              <h4>
                <Link to={`/cars/${car.id}`}>{car.modelo}</Link>
              </h4>
            </td>
        </tr>
        </tbody>
        </table>
      );
    })}
  
  </div>
);

