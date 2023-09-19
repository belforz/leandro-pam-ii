import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation(); // Get the navigation object

  const onPress = () => {
    // Use the navigation object to navigate to the "index" screen
    navigation.navigate('Index', { name: 'index' }); // Use the screen name 'Index'
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/taylor.jpg')}
        style={styles.image}
      />

      <Text variant="h3" style={{ margin: 16 }}>
        Taylor Alison Swift born in 1989
      </Text>

      <Button
        title="Saiba mais"
        style={{ alignSelf: "center", marginTop: 40, backgroundColor: "#0EEB9A" }}
        onPress={onPress} // Use the onPress function
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Set your desired width
    height: 200, // Set your desired height
  },
});
