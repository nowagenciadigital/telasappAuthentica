import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import { 
    createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';
// import TabBar from '../components/TabBar';

import Assessorias from '../views/Assessoria';
import Cursos from '../views/Cursos';

// import DrawerMenu from './drawer.js';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        // <>      
            <Tab.Navigator tabBar={(props) => <CTabBar {...props} />}>
                <Tab.Screen name="Assessorias" component={Assessorias} />
                <Tab.Screen name="Cursos" component={Cursos} />
            </Tab.Navigator>
        // </>
    );
};