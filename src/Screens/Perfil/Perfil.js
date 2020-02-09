import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import URL from '../../API/URL.js'

import estiloPerfil from './PerfilStyle.js'

export default class Perfil extends Component {

    constructor(){
        super();

        this.state = {
            dadosMeuPerfil : {}
        }

    }

    componentDidMount(){

        this.buscarDadosPerfil()

    }

    async buscarDadosPerfil(){

        let token = await AsyncStorage.getItem('autenticacao');

        const requestInfo = {
            method : 'GET',
            headers : new Headers({
                'Content-type': 'application/json',
                'x-access-token' : `${token}`
            })
        }

        var id = await AsyncStorage.getItem("idUsuario");

        console.log(id)

        var urlPerfil = URL.buscarMeusDados + id;

        fetch(urlPerfil, requestInfo).then(resposta => {

            if(resposta.ok){
                return resposta.text()
            }
            console.log(resposta.status)
            throw new Error("Deu erro")

        }).then(dados => JSON.parse(dados)).then(dados => {

            this.setState({
                dadosMeuPerfil : dados.objeto[0]
            })
        }).catch(err => console.log(err))

    }

    render() {
        return (
            <View style={estiloPerfil.container}>
                <>
                    <ConteudoMenu nome={this.state.dadosMeuPerfil.nome}/>
                    <ConteudoMenu nome={this.state.dadosMeuPerfil.email}/>
                    <ConteudoMenu nome={this.state.dadosMeuPerfil.cpf}/>
                </>
            </View>
        );
    }

}

//onPress={() => dados.funcao()}

const ConteudoMenu = (dados) => {
    return (
        <>
            <TouchableOpacity style={estiloPerfil.conteudoPerfil}>
                <Text style={estiloPerfil.texto}>{dados.nome}</Text>
                <Image style={{ marginEnd: 8 }} source={require('../../../img/icons8-editar-24.png')} />
            </TouchableOpacity>
        </>
    );
}