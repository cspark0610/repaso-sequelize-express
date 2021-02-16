//armo el componente presencaional html para poder renderizar en el front el new auto que voy
//a cargar lueog en la db

import React from "react";

export default ({ handleChange, handleSubmit }) => (
  <div>
    <h2>Crear auto</h2>
    <form onSubmit={handleSubmit}>
      <label>Marca: </label>
      <input name="marca" onChange={handleChange}></input>
      <br />
      <label>Modelo: </label>
      <input name="modelo" onChange={handleChange}></input>
      <br />
      <label>anio: </label>
      <input name="anio" onChange={handleChange}></input>
      <br />
      <label>precio: </label>
      <input name="precio" onChange={handleChange}></input>
      <br />
      <label>owner Id: </label>
      <input name="ownerId" onChange={handleChange}></input>
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
  </div>
);
