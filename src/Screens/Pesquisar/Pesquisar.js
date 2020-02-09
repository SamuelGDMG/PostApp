import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import estiloPesquisar from './PesquisarStyle.js'

export default class Pesquisar extends Component{

    constructor(){
        super()
    }

    render(){
        return (
            <View style={estiloPesquisar.conatainer}>
                <View>
                    <TextInput style={estiloPesquisar.campoInput} placeholder="Pesquisar"/>
                </View>
                <View style={estiloPesquisar.conteudoPesquisa}>
                    
                </View>
            </View>
        );
    }

}