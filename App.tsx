import 'react-native-gesture-handler';
import React from 'react'

//Importacion Navegacion
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//importacion de firebase

import FirebaseStage from './context/firebase/firebaseStage';
import PedidosStage from './context/pedidos/pedidosStage';

//importacion de vistas

import Login from './views/Login';
import Ulog from './views/Ulog';
import FormPlato from './views/FormPlato';
import DetallePedido from './views/DetallePedido';
import NuevaOrden from './views/NuevaOrden';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

//Crear variable para uso del navigate

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
    <FirebaseStage>
      <PedidosStage>
        <NavigationContainer>
          <Stack.Navigator
          >
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title:"Login User"
            }}/>
            <Stack.Screen 
            name="Ulog" 
            component={Ulog}
            options={{
              title:"User Panel"
            }} />

          </Stack.Navigator>
        </NavigationContainer>
      </PedidosStage>
    </FirebaseStage>

   
    </>
  )
}

export default App
