import React,{useReducer} from 'react'
import pedidosContext from './pedidosContext'
import pedidosReducer from './pedidosReducer'


const PedidosStage = props => {
//crea consulta de la bd

const inicialStage = {
    pedidos: []
}

//uso del reducer

const [state, dispach]= useReducer(pedidosReducer,inicialStage)

return (

    <pedidosContext.Provider
    value = {{
        pedidos: state.Rutinas
    }}
    >
        {props.children}

    </pedidosContext.Provider>
)

}

export default PedidosStage