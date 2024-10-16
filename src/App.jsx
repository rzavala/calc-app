//importacion
import React from "react"
import './App.css'

//arrow function(ES6), () no recibe params
//generacion de la funcion del componente
const App = () => { 
    //cuerpo de la funcion, lo que ejecuta
    console.log("renderizacion de app")
    return (
        <main className="react-calculator">
            <div className="result">
            </div>
            <div className="numbers">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>
                    clear
                </button>
                <button>
                    r
                </button>
            </div>
            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </main>
    )
}

//exportacion, [default] es por que solo va a exportar un componente
//en este demo se hace un componente por archivo
export default App