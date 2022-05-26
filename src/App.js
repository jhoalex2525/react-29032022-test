// Sólo se requiere importar este componente
import React from "react";
import Menu from "./menu/Menu";
import PrimerComponente, { SegundoComponente, TercerComponente } from "./PrimerComponente";
// Componente de función
function App() {
  let nombre = "Cristian";
  let apellido = "Ochoa";
  let datos = {
    nombre: "Alexis",
    apellido: "Osorio"
  };
  let edad = () => {
    alert("su edad es: 32")
  }
  return (
    // Solo se devuelve una clase, para poder devolver lso dos bloques se requiere incluir todo en un div o se deja vacío <></>
    <>
      <h1>Hola Jhonatan</h1>
      <PrimerComponente datos={datos}></PrimerComponente>
      <SegundoComponente nombre="Jhony" apellido="Ossa"></SegundoComponente>
      <TercerComponente nombre={nombre} apellido={apellido} edad={edad}></TercerComponente>
      <Menu></Menu>
    </>
  );
}

export default App;
