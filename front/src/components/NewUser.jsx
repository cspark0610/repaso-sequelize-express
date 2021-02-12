import React from "react";

export default ({ handleChange, handleSubmit }) => (
  <div>
    <h2>Crear usuario</h2>
    <form onSubmit={handleSubmit}>
      <label>Nombre: </label>
      <input name="name" onChange={handleChange}></input>
      <br />
      <label>Apellido: </label>
      <input name="lastname" onChange={handleChange}></input>
      <br />
      <label>DNI: </label>
      <input name="dni" onChange={handleChange}></input>
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
  </div>
);
