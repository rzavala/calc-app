//importacion
import React from "react"

//arrow function(ES6), () no recibe params
//generacion de la funcion del componente
const App = () => { 
    //cuerpo de la funcion, lo que ejecuta
    console.log("renderizacion de app")
    return <h1>Calc App</h1>
}

//exportacion, [default] es por que solo va a exportar un componente
//en este demo se hace un componente por archivo
export default App