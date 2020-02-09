import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image, ScrollView } from 'react-native';
import estiloCardAluno from './CardAlunoStyle.js'

const CardAluno = (dados) => {

    return (
        <View style={estiloCardAluno.styleCard}>
            <Conteudo dado={"Nome: " + dados.nome}/>
            <Conteudo dado={"E-mail: " +dados.email}/>
            <View style={{flexDirection : "row"}}>
                <Button onPress={() => dados.aceitarAndRejeitar(dados._id, false)} color="red" title="Rejeitar"/>
                <Button onPress={() => dados.aceitarAndRejeitar(dados._id, true)} title="Aceitar"/>
            </View>
        </View>
    );
}

const Conteudo = (dados) => {
    return(
        <View style={estiloCardAluno.form}>
            <Text style={estiloCardAluno.texto}>{dados.dado}</Text>
        </View>
    );
}

export default CardAluno;