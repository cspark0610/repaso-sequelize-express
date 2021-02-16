import React from "react";
import { Link } from "react-router-dom";

export default ({ autos }) => (
  <div>
    <h2>CARS</h2>
    <table>
      <thead>
        <tr>
          <td>
            <h4>Marca</h4>
          </td>
          <td>
            <h4>Modelo</h4>
          </td>
          <td>
            <h4>Anio</h4>
          </td>
          <td>
            <h4>Precio</h4>
          </td>
          <td>
            <h4>Owner </h4>
          </td>
        </tr>
      </thead>
      <tbody>
        {autos.map((auto) => {
          //console.log(auto);
          return (
            <tr key={auto.id}>
              <td>
                <h4>
                  <Link to={`/autos/${auto.id}`}>{auto.marca}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/autos/${auto.id}`}>{auto.modelo}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/autos/${auto.id}`}>{auto.anio}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/autos/${auto.id}`}>{auto.precio}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/users/${auto.id}`}>{auto.owner.name}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/users/${auto.id}`}>{auto.owner.lastname}</Link>
                </h4>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
