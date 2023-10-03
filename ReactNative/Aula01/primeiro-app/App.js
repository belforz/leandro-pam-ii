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
import * as ImagePicker from 'expo-image-picker';
import { useState,  useRef } from 'react';
import CircleButton from './components/CircleButton';
import IconButton from './components/iconButton';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import EmojiSticker from './components/EmojiSticker';


const placeholderImage = require('./assets/taylorfundo.jpg')

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
  
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou nenhuma imagem');
    }
    
  }
  const [status, requestPermission] = MediaLibrary.usePermissions();
  if (status === null) {
    requestPermission();
  }
  const imageRef = useRef();
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={placeholderImage}
            selectedImage={selectedImage} // Pass selectedImage as a prop
          />
          {pickedEmoji !== null ? (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          ) : null}
        </View>
  
        <View style={styles.imageContainer}>{/* Additional content */}</View>
  
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Escolha uma imagem" onPress={pickImageAsync} />
            <Button label={"Use essa foto"} onPress={() => setShowAppOptions(true)} />
          </View>
        )}
  
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
        }  



const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#B5EBF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
    borderColor: '#4DEB8C'
  },
   image:{
    width:320,
    height:440,
    borderRadius:18,
    shadowColor:'#F50DE5',
        shadowOffset:{
           width:1,
           height:1, 
        },
        shadowOpacity:0.5,
        shadowRadius:3,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
    
  }, optionsContainer: {
    position: 'absolute',
    bottom: 80,
    margin: -80,
    backgroundColor:''
    
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  
});


