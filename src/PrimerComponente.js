import React, { Component } from "react";

// Componente de clase
class PrimerComponente extends Component{
    render(){
        console.log(this.props);
        let prueba = this.props.datos;
        return(
            <h1>Hola {prueba.nombre} {prueba.apellido}</h1>
        );
    }
}

// Creando otro componente, componente de función
export function SegundoComponente({nombre,apellido}){
    // Se imprime props para ver las propiedades en consola en navegador
    // console.log(props);
    return(
        <h2>Hola {nombre} {apellido}</h2>
    );
}

// Componente de flecha
export let TercerComponente = ({nombre,apellido, edad}) =>{ 
    // console.log(props);
    return (
        <>
            <h3>Hola {nombre} {apellido}</h3>
            <button onClick={edad}>ver mi edad</button>
        </>
    );
}


// Para exportar el componente como principal se usa el default
export default PrimerComponente;