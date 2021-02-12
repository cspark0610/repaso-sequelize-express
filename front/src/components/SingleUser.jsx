import React from "react";
import { Link } from "react-router-dom";

export default ({ user }) => (
  <div>
    <Link to="/users">
      <h4>Volver a users</h4>
    </Link>
    <h2>
      {user.name} {user.lastname}
    </h2>
    <h4>DNI {user.dni}</h4>
    <br />
    <h3>Cars</h3>
    {/* map de cars pertenecientes al usuario */}
  </div>
);
