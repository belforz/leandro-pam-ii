import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJj-jbJNFZTO_UL2Sv77HJUeSvsMDeYA0",
  authDomain: "meuprimeirofirestorm.firebaseapp.com",
  projectId: "meuprimeirofirestorm",
  storageBucket: "meuprimeirofirestorm.appspot.com",
  messagingSenderId: "147277565190",
  appId: "1:147277565190:web:195bec76df7085ea916287"
};



firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
