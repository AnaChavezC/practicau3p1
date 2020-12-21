import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Formulario from '../Screens/Formulario';
import Listado from '../Screens/Listado';
import Inicio from '../Screens/Inicio';
import Consulta from '../Screens/Consulta';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>

            <Stack.Screen
             name="Inicio"
             component={Inicio}
             options={{headerShown:true, headerTitle:'Bienvenidos',headerStyle: { backgroundColor: '#258902' },headerTitleAlign:'center' }}
            />

            <Stack.Screen
                name="Listado"
                component={Listado}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Formulario"
                component={Formulario}
            />

            <Stack.Screen
                name="Consulta"
                component={Consulta}
                options={{headerShown:true, headerTitle:'Consultas',headerStyle: { backgroundColor: '#258902' },headerTitleAlign:'center' }}
            />

        </Stack.Navigator>
    )
}
