import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image, Alert } from 'react-native';
import URL from '../../API/URL.js'

import estiloPerfil from './PerfilStyle.js'
import AlertPerfil from '../../Components/AlertPerfil/AlertPerfil.js'

export default class Perfil extends Component {

    constructor(){
        super();

        this.state = {
            dadosMeuPerfil : {},
            token : "",
        }

    }

    componentDidMount(){

        this.buscarDadosPerfil()

    }

    atualizarUsuarioLocal(chave, valor){

        let objUpdate =  Object.assign(this.state.dadosMeuPerfil, {[chave] : valor});

        this.setState({
            dadosMeuPerfil : objUpdate
        })
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

        var urlPerfil = URL.buscarMeusDados + id;

        fetch(urlPerfil, requestInfo).then(resposta => {

            if(resposta.ok){
                return resposta.text()
            }
            console.log(resposta.status)
            throw new Error("Deu erro")

        }).then(dados => JSON.parse(dados)).then(dados => {

            this.setState({
                dadosMeuPerfil : dados.objeto[0],
                token : token
            })
        }).catch(err => console.log(err))

    }

    render() {
        return (
            <View style={estiloPerfil.container}>
                <>
                    <ConteudoMenu atualizarUsuarioLocal={(chave, valor) => this.atualizarUsuarioLocal(chave, valor)} token={this.state.token} id={this.state.dadosMeuPerfil._id} chave={"nome"} complemento={"nome"} nome={this.state.dadosMeuPerfil.nome}/>
                    <ConteudoMenu atualizarUsuarioLocal={(chave, valor) => this.atualizarUsuarioLocal(chave, valor)} token={this.state.token} id={this.state.dadosMeuPerfil._id} chave={"email"} complemento={"email"} nome={this.state.dadosMeuPerfil.email}/>
                    <ConteudoMenu atualizarUsuarioLocal={(chave, valor) => this.atualizarUsuarioLocal(chave, valor)} token={this.state.token} id={this.state.dadosMeuPerfil._id} chave={"cpf"} complemento={"cpf"} nome={this.state.dadosMeuPerfil.cpf}/>
                </>
            </View>
        );
    }

}

const ConteudoMenu = (dados) => {

    const [meuEstado, setMeuEstado] = useState(false);

    const funcao = () => setMeuEstado(!meuEstado)

    return (
        <>
            <TouchableOpacity onPress={() => funcao()} style={estiloPerfil.conteudoPerfil}>
                <Text style={estiloPerfil.texto}>{dados.nome}</Text>
                <Image style={{ marginEnd: 8 }} source={require('../../../img/icons8-editar-24.png')} />
            </TouchableOpacity>
            {
                meuEstado ? <AlertPerfil {...dados} setModalVisible={(estado) => setMeuEstado(estado)} modalVisible={meuEstado}/> : null
            }
        </>
    );
}