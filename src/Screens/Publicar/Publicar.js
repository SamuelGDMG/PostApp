import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image, ToastAndroid } from 'react-native';
import estiloPublicar from './PublicarStyle.js'
import CardTimeLine from '../../Components/Card/CardTimeLine.js'
import URL from '../../API/URL.js'

export default class Publicar extends Component {

    constructor(props){
        super(props);

        this.state = {
            fragment : true,
            titulo : "",
            link : "",
            descricao : ""
        }

    }

    campoInput(chave, valor){
        this.setState({
            [chave] : valor
        })
    }

    mudarFragment(valor){
        this.setState({
            fragment : valor
        })
    }

    async publicar(){
        let validar = this.validarCampo();

        if(validar === true){
            let token = await AsyncStorage.getItem('autenticacao').then(token => token);
            let idUser = await AsyncStorage.getItem('idUsuario').then(id => id);

            this.enviarPublicacao(token, idUser);

        }
    }

    enviarPublicacao(token, idUser){

        const requestInfo = {
            method : 'POST',
            body : JSON.stringify({
                "titulo": `${this.state.titulo}`,
                "descricao": `${this.state.descricao}`,
                "data_evento": "2020-01-27T16:40:46.279Z",
                "curso" : [],
                "usuario" : `${idUser}`,
                "ativo": true
            }),
            headers : new Headers({
                'Content-type': 'application/json',
                'x-access-token' : token,
            })
        }

        fetch(URL.postar, requestInfo).then(res => {
            if(res.ok){
                return res.text();
            }

            throw new Error("Erro dentro do fetch enviar publicacao")
        }).then(dados => this.msg("Publicado")).catch(err => console.log(err))
    }

    validarCampo(){
        if(!this.state.titulo == ""){
            return true;
        }else{
            this.msg('Campo título é obrigatório')
        }

        return false;
    }

    msg(texto){
        ToastAndroid.show(texto, ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={estiloPublicar.container}>

                    {
                        this.state.fragment ? <FormularioPublicar dadosInput={this.state} campoInput={(chave, valor) => this.campoInput(chave, valor)}/> : <CardTimeLine descricao={this.state.descricao} titulo={this.state.titulo}/>
                    }

                </View>
                <View style={estiloPublicar.rodape}>
                    <ConteudoRodape publicar={() => this.publicar()} mudarFragment={(valor) => this.mudarFragment(valor)}/>
                </View>
            </View>
        );
    }

}

const FormularioPublicar = (dados) => {
    return (
        <>
        <Text style={estiloPublicar.texto}>Titulo da publicação:</Text>
        <TextInput value={dados.dadosInput.titulo} onChangeText={(texto) => dados.campoInput("titulo", texto)} placeholder="Ex: Palestra sobre chatbot" style={estiloPublicar.form} />
        <Text style={estiloPublicar.texto}>Link para mais informações:</Text>
        <TextInput value={dados.dadosInput.link} onChangeText={(texto) => dados.campoInput("link", texto)} placeholder="Link..." style={estiloPublicar.form} />
        <Text style={estiloPublicar.texto}>Descrição da publicação:</Text>
        <TextInput value={dados.dadosInput.descricao} onChangeText={(texto) => dados.campoInput("descricao", texto)} multiline numberOfLines={10} placeholder="Descrição..." style={[estiloPublicar.form, { height: 200, alignItems: "baseline" }]} />
        </>
    );
}

const ConteudoRodape = (dados, { rotas }) => {
    return (
        <>
            <TouchableOpacity onPress={() => dados.mudarFragment(true)} style={estiloPublicar.conteudoRodape}>
                <Image />
                <Text style={estiloPublicar.textoRodape}>Conteúdo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dados.mudarFragment(false)} style={estiloPublicar.conteudoRodape}>
                <Image />
                <Text style={estiloPublicar.textoRodape}>Visualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dados.publicar()} style={estiloPublicar.conteudoRodape}>
                <Image />
                <Text style={estiloPublicar.textoRodape}>Publicar</Text>
            </TouchableOpacity>
        </>
    );
}