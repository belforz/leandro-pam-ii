import React from 'react';
import { View, Text, Button } from 'react-native';

function PaginaDetalhes({ navigation }) {
  return (
    <View>
      <Text>Página de Detalhes</Text>
      <Button
        title="Voltar para Inicial"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default PaginaDetalhes;
