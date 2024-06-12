import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Usuarios from './src/screens/Usuarios';
import UsuariosDetail from './src/screens/UsuariosDetail';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Alert, Pressable } from 'react-native';
import UsuarioProvider from './src/context/UsuarioContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UsuarioProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='Usuarios'
            component={Usuarios}
            options={({ navigation }) => {
              return {
                headerRight:
                  () => <Pressable onPress={() => navigation.navigate("Detalhe", {item: {id: ""}})}>
                    <Icon name='add' size={25} color='black' />
                  </Pressable>,
                statusBarColor: 'lightgray',
                headerStyle: { backgroundColor: 'lightblue' },
                title: "Lista de usuários"
              }
            }}
          />
          <Stack.Screen
            name='Detalhe'
            component={UsuariosDetail}
            options={() => {
              return {
                statusBarColor: 'lightgray',
                headerStyle: { backgroundColor: 'lightblue' },
                title: "Edite os detalhes"
              }
            }}
          />
        </Stack.Navigator>
      </UsuarioProvider>
    </NavigationContainer>
  )
}