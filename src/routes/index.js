import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import Assessorias from '../views/Assessoria';
import DetailAssessoria from '../views/Assessoria/DetailAssessoria';
import Nova from '../views/Assessoria/Nova';
import Cursos from '../views/Cursos';
import DetalheCurso from '../views/Cursos/Detalhes';
import Profile from '../views/Profile';

import TabRoutes from './tabs.js';

const Auth = createStackNavigator();

export default function AuthRoutes(){
    return(
        <Auth.Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#333' },
            }}
            // initialRouteName="DetalhesAssessoria"
        >
        {/* <Auth.Navigator> */}
            <Auth.Screen 
                // options={{headerShown: false}}
                name="Login" 
                component={Login} 
            />
            <Auth.Screen name="TabRoutes" component={TabRoutes} />
            <Auth.Screen name="Dashboard" component={Dashboard} />
            {/* <Auth.Screen name="DrawerMenu" component={DrawerMenu} /> */}
            <Auth.Screen name="NovaAssessoria" component={Nova} />
            <Auth.Screen name="Assessorias" component={Assessorias} />
            <Auth.Screen name="DetalhesAssessoria" component={DetailAssessoria} />
            <Auth.Screen name="Cursos" component={Cursos} />
            <Auth.Screen name="DetalheCurso" component={DetalheCurso} />
            <Auth.Screen name="Profile" component={Profile} />
        </Auth.Navigator>
    );
};