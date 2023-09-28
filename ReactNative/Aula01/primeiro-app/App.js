// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// import Home from './app/home'; // Import your screens

// const Stack = createStackNavigator();

// function App() {
//   return (
    
    
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Pagina inicial" component={Home} />
//         {/* Add more screens as needed */}
//       </Stack.Navigator>
//     </NavigationContainer>

    
//   );
  
// }

// export default App;

import {StatusBar} from 'expo-status-bar';
import { StyleSheet,Text,View ,Image} from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/button';

const placeholderImage = require('./assets/taylorfundo.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={placeholderImage} />

      </View>
      <View style={styles.footerContainer}>
        <Button label={"Escolha uma imagem"} />
        <Button label={"Use essa foto"} />
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}



const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFA8E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
  },
   image:{
    width:320,
    height:440,
    borderRadius:18,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
    
  }
  
});


