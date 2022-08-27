import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
  <Drawer.Navigator 
     screenOptions={{
     headerStyle: { backgroundColor: '#351401'},
     headerTintColor: 'white',
     sceneContainerStyle: { backgroundColor: '#3f2f25'},
     drawerContentStyle: { backgroundColor: '#351401'},
     drawerInactiveTintColor: 'white',
     drawerActiveTinColor: '#351401',
     drawerActiveBackgroundColor: '#e4baa1'
     }}
   >
    <Drawer.Screen 
    name='Categories' 
    component={CategoriesScreen} 
    options={{ 
      title: 'Categories All',
      drawerIcon: ({color, size}) => (
        <Ionicons name='list' size={size} color={color}/>
      ),

  }}/>
    <Drawer.Screen 
    name='Favorites' 
    component={FavoritesScreen}
    options={{
    drawerIcon: ({color, size}) => (
      <Ionicons name='star' size={size} color={color}/>
    ),
  }}/>
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
           headerStyle: { backgroundColor: '#351401'},
           headerTintColor: 'white',
           contentStyle: { backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen 
          name='Drawer' 
          component={DrawerNavigator} 
          options={{
            // title: 'All Categories',
            headerShown: false
          }}/>
          <Stack.Screen 
          name='MealsOverview' 
          component={MealsOverviewScreen}
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   }
          // }}
          />
          <Stack.Screen 
          name='MealDetail'
          component={MealDetailScreen}
          options={{
            // headerRight: () => {
            //   return <Button title='Tap me!'/>
            // },
            title: 'About the Meal'
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
});
