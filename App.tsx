import 'react-native-gesture-handler';
import React, { useState } from 'react';

// Importación de la navegación
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de contextos
import FirebaseStage from './context/firebase/firebaseStage';
import PedidosStage from './context/pedidos/pedidosStage';

// Importación de vistas
import Login from './views/Login';
import Ulog from './views/Ulog';
import FormPlato from './views/FormPlato';
import DetallePedido from './views/DetallePedido';
import NuevaOrden from './views/NuevaOrden';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <>
      <FirebaseStage>
        <PedidosStage>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                initialParams={{ onLogin: handleLogin }}
                options={{
                  title: "¡Welcome to vitality Gym! ",
                  headerTitleAlign: 'center',
                  headerStyle:{
                    backgroundColor: 'indigo'
                  },
                  headerTintColor: 'white'
                }}
              />

              <Stack.Screen
                name="Ulog"
                component={Ulog}
                options={{
                  title: "User Panel",
                  headerTitleAlign: 'center',
                  headerLeft: () => <></>
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidosStage>
      </FirebaseStage>
    </>
  );
}

export default App;
