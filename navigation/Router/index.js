import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../../screens/register';
import ChoixProfession from '../../screens/choixProfession';
import HomeScreen from '../../screens/home';
import ConsultationNull from '../../screens/consultationNull';
import ConsultationList from '../../screens/consultationList';
import Login from '../../screens/login';
import Start from '../../screens/start';
import ConsultationForm from '../../screens/consultationForm';
import PatientList from '../../screens/patientList';
import VisitList from '../../screens/visitList';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer initialRouteName="ChoixProfession">
      <Stack.Navigator>
      <Stack.Screen
          name={'ChoixProfession'}
          component={ChoixProfession}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name={'Start'}
          component={Start}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name={'Login'}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name={'ConsultationList'}
          component={ConsultationList}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name={'ConsultationNull'}
          component={ConsultationNull}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Register'}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ConsultationForm'}
          component={ConsultationForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'PatientList'}
          component={PatientList}
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen
          name={'VisitList'}
          component={VisitList}
          options={{
            headerShown: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
