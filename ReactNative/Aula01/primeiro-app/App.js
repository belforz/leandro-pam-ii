import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './app/home'; // Import your screens

const Stack = createStackNavigator();

function App() {
  return (
    
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pagina inicial" component={Home} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>

    
  );
  
}

export default App;
