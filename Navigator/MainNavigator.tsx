import React from 'react';

import Bienvenida from '../screen/Bienvenida';
import RegistroScreen from '../screen/RegistroScreen';
import EditarEliminarScreen from '../screen/EditarEliminarScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListaScreen } from '../screen/ListaScreen';
import ApiScreen from '../screen/ApiScreen';





const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Bienvenida} /> 
      <Tab.Screen name="Listas" component={ListaScreen} />
      <Tab.Screen name="Registro Almacenado" component={RegistroScreen} />
      <Tab.Screen name="Editar/Eliminar" component={EditarEliminarScreen} />
      <Tab.Screen name="API" component={ApiScreen} />
      
    </Tab.Navigator>
  );
};