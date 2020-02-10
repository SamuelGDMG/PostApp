import React, { Component } from 'react';
import { Modal, ToastAndroid, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, Picker, ScrollView } from 'react-native';
import URL from '../../API/URL.js'
import estiloAlertPerfil from './AlertPerfilStyle.js'

export default class AlertPerfil extends Component {

    constructor(props){
        super(props)

        this.state = {
            dado : this.props.nome
        }
    }

    enviarAlteracao(chave){

        if(this.state.dado !== "" && this.state.dado !== null && this.state.dado !== this.props.nome ){
            console.log("entrei aqui")
            const requestInfo = {
                method : 'PUT',
                body : JSON.stringify({
                    [chave] : this.state.dado,
                }),
                headers : new Headers({
                    'Content-type': 'application/json',
                    'x-access-token' : this.props.token
                })
            }
    
            let urlUpdate = `${URL.alteracaoUsuario}${this.props.id}`

            console.log(urlUpdate)
    
            fetch(urlUpdate, requestInfo).then(resposta => {
    
                console.log(requestInfo.userId)
    
                if(resposta.ok){
                    return resposta.text()
                }
                this.msg("Erro")
                throw new Error("Deu erro")
            }).then(dados => JSON.parse(dados)).then(dados => {

                this.props.atualizarUsuarioLocal(chave, this.state.dado)

                this.msg("Sucesso")
                this.props.setModalVisible(!this.props.modalVisible);
            }).catch(err => console.log(err))
        }
    }

    msg(texto){
        ToastAndroid.show(texto, ToastAndroid.SHORT);
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    this.props.setModalVisible(!this.props.modalVisible);
                }}>

                <View style={estiloAlertPerfil.container}>
                    <View style={estiloAlertPerfil.styleCard}>
                        <View style={{ flex: 1 }}>
                            <Text style={{color : "white"}}>Editar {this.props.complemento}:</Text>
                            <TextInput onChangeText={(texto) => this.setState({dado : texto})} value={this.state.dado} style={estiloAlertPerfil.form} placeholder="Digite seu nome..."/>
                        </View>
                        <View style={{ flexDirection: "row", margin: 5, justifyContent: "flex-end" }}>
                        <Button color="red" onPress={() => {
                                this.props.setModalVisible(!this.props.modalVisible);
                            }} title="Cancelar" />
                            <Button onPress={() => {
                                this.enviarAlteracao(this.props.chave)
                            }} title="Confirmar" />
                        </View>
                    </View>

                </View>

            </Modal>
        );
    }
}