// import React from 'react';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import { View } from 'react-native';

// import Dashboard from '../views/Dashboard';
// import Nova from '../views/Assessoria/Nova';
// import Assessorias from '../views/Assessoria';

// const Drawer = createDrawerNavigator();    

// export default function AuthRoutes(){
//     function CustomDrawerContent(props) {
//         return (
//           <DrawerContentScrollView {...props}>
//             <View style={{flexGrow: 2}} />
//               <DrawerItem
//                 label="Início"
//                 onPress={() => props.navigation.openDrawer()}
//               />
//               <DrawerItem
//                 label="Toggle drawer"
//                 onPress={() => props.navigation.toggleDrawer()}
//               />
//           </DrawerContentScrollView>
//         );
//       }

//     return(
//         <Drawer.Navigator 
//           drawerContent={props => <CustomDrawerContent {...props} />}>
//             <Drawer.Screen name="Dashboard" component={Dashboard} />
//             <Drawer.Screen name="Nova Assessoria" component={Nova} />
//             <Drawer.Screen name="Assessorias" component={Assessorias} />
//         </Drawer.Navigator>
//     );
// };