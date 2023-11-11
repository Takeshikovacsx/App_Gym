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
import Footer from './views/Footer';
import ViewRoutines from './views/Viewroutines';
import AssignedRoutines from './views/AssignedRoutines';
import DetalleRutina from './views/DetalleRutina';
import FormPlato from './views/FormPlato';
import DetallePedido from './views/DetalleRutina';
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
                  headerStyle: {
                    backgroundColor: '#2D3748'
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
                  headerStyle: {
                    backgroundColor: '#2D3748'
                  },
                  headerTintColor: 'white',
                  headerLeft: () => <></>
                }}
              />

              <Stack.Screen name="ViewRoutines"
                component={ViewRoutines}
                options={{
                  title: "View Routines",
                  headerStyle: {
                    backgroundColor: '#2D3748'
                  },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center'
                }}



              />

              <Stack.Screen name="AssignedRoutines"
                component={AssignedRoutines}
                options={{
                  title: "Assigned Routines",
                  headerStyle: {
                    backgroundColor: '#2D3748'
                  },
                  headerTintColor: 'white',
                  headerTitleAlign: 'center'
                }}
              />
              <Stack.Screen
  name="AssignedRoutines"
  component={AssignedRoutines}
  options={{
    title: "Assigned Routines",
    headerStyle: {
      backgroundColor: '#2D3748'
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center'
  }}
/>
             

            </Stack.Navigator>
          </NavigationContainer>
        </PedidosStage>
      </FirebaseStage>
      <Footer />
    </>
  );
}

export default App;
