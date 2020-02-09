import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image, ScrollView } from 'react-native';
import estiloMenu from './MenuStyle';
import { NavigationActions } from 'react-navigation';

export default class Menu extends Component{

    constructor(props){
        super(props)
    }

    deslogar(){
        AsyncStorage.removeItem("autenticacao").then(() => this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0))
    }

    abrirTela(tela){
        if(tela === "PreCadastro"){
            this.props.navigation.navigate(tela, {tipoTela : "PreCadastro"})
        }else{
            this.props.navigation.navigate(tela)
        }
    }

    render(){
        return (
            <View style={estiloMenu.container}>
                <ScrollView>
                    <ConteudoMenu nome={"Perfil"} funcao={() => this.abrirTela("Perfil")}/>
                    <ConteudoMenu nome={"Meus post"}/>
                    <ConteudoMenu nome={"Aprovar alunos"} funcao={() => this.abrirTela("AprovarAluno")}/>
                    <ConteudoMenu nome={"Criar usuário"} funcao={() => this.abrirTela("PreCadastro")}/>
                    <ConteudoMenu nome={"Sair"} funcao={() => this.deslogar()} rota={"Main"}/>
                </ScrollView>
            </View>
        );
    }

}

const ConteudoMenu = (dados) => {
    return (
        <TouchableOpacity onPress={() => dados.funcao()} style={estiloMenu.conteudoMenu}>
            <Text style={estiloMenu.texto}>{dados.nome}</Text>
        </TouchableOpacity>
    );
}

