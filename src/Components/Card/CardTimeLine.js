import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import estiloCard from './CardStyle.js'
import HtmlText from 'react-native-html-to-text'

const CardTimeLine = (dados) => {
    return(
        <View style={estiloCard.container}>
            <View style={estiloCard.styleCard}>
                <Text style={estiloCard.textoTitulo}>{dados.titulo}</Text>
                {
                    dados.descricao === '' ? null :  <HtmlText style={estiloCard.textoDescricao} html={dados.descricao}/>
                }
            </View>
        </View>
    );
}

export default CardTimeLine;