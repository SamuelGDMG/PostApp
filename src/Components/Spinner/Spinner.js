import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Picker,Dimensions  } from 'react-native';

const largura = Dimensions.get("screen").width;

const Spinner = (dados) => {
    console.log("Aqui", dados.perfils)
    return (
        <Picker style={{flex: 1}}
            selectedValue={dados.selecionado}
            style={{ height: 50, width: largura * 0.80, color: "white" }}
            onValueChange={(itemValue, itemIndex) =>
                dados.alterarValorSpinner(dados.chave, itemValue)
            }>
            {dados.perfils.map(perfil => <Picker.Item key={perfil._id} label={perfil.nome} value={perfil.nome} />)}
        </Picker>
    );
}

/*
{dados.categoriasCursos.map(categoria => <Picker.Item label={categoria} value={categoria} />)}
*/

export default Spinner;