import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import estiloMain from './MainStyle.js'

export default class Main extends Component {

    onActionSelected(position) {
        if (position === 0) {
            showSettings();
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={estiloMain.conatainer}>

                </View>
                <View style={estiloMain.rodape}>
                    <ConteudoRodape/>
                </View>
            </View>
        );
    }

}

const ConteudoRodape = () => {
    return (
        <>
        <TouchableOpacity style={estiloMain.conteudoRodape}>
            <Image source={require("../../../img/baseline_search_white_18dp.png")} />
            <Text style={estiloMain.textoRodape}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estiloMain.conteudoRodape}>
            <Image source={require("../../../img/baseline_send_white_18dp.png")} />
            <Text style={estiloMain.textoRodape}>Publicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estiloMain.conteudoRodape}>
            <Image source={require("../../../img/baseline_reorder_white_18dp.png")} />
            <Text style={estiloMain.textoRodape}>Menu</Text>
        </TouchableOpacity>
        </>
    );
}