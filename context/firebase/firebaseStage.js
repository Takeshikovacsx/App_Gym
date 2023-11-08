import React,{useReducer} from 'react'
import firebase from '../../firebase'
import FirebaseContext from './firebaseContext'
import FirebaseReducer from './firebaseReducer'


const FirebaseStage = props => {
//crea consulta de la bd

const inicialStage = {
    Rutinas: []
}

//uso del reducer

const [state, dispach]= useReducer(FirebaseReducer,inicialStage)

return (

    <FirebaseContext.Provider
    value = {{
        Rutinas: state.Rutinas,
        firebase
    }}
    >
        {props.children}

    </FirebaseContext.Provider>
)

}

export default FirebaseStage