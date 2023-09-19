import React from 'react';
import {View, Text, Button} from 'react-native';

function PaginaInicial ({navigation}){
    return(
        <View>
            <Text>Pagina Inicial </Text>
            <Button
            title="Ir para detalhes"
            onPress={() => navigation.navigate('PaginaDetalhes')}
            />
        </View>
    )

}
export default pgprincipal