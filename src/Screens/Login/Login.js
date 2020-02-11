import React, {Component} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage} from 'react-native';
import StyleLogin from './LoginStyle.js'
import URL from '../../API/URL.js'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email : '',
            senha : ''
        }
    }

    capturarDados(campo, dados){
        this.setState({
            [campo] : dados
        });
    }

    validarCampos(){
        if(!this.state.email == "" && !this.state.senha == ""){
            this.efetuarLogin();
        }else{
            console.log("Uh")
        }
        
    }

    componentDidMount(){
        AsyncStorage.getItem("autenticacao").then(dados => {
            if(dados !== null){
                this.props.navigation.replace("PaginaPrincipal")
            }
        })
    }

    efetuarLogin(){
        const requestInfo = {
            method : 'POST',
            body : JSON.stringify({
                email : this.state.email,
                senha : this.state.senha,
            }),
            headers : new Headers({
                'Content-type': 'application/json',
            })
        }


        fetch(URL.login, requestInfo).then(resposta => {

            console.log(requestInfo.userId)

            if(resposta.ok){
                return resposta.text()
            }
            console.log(resposta.status)
            throw new Error("Deu erro")
        }).then(dados => JSON.parse(dados)).then(dados => {
            console.log(dados)
            AsyncStorage.setItem("autenticacao", dados.token)
            AsyncStorage.setItem("idUsuario", dados.id)
            this.props.navigation.replace("PaginaPrincipal")
        }).catch(err => console.log(err))

    }

    abrirTelaCadastro(){
        this.props.navigation.navigate('PreCadastro', {tipoTela: "Login"});
    }

    render(){
        return (
            <View style={StyleLogin.container}>
                <View style={StyleLogin.styleCard}>
                    <Text style={StyleLogin.titulo}>PostApp</Text>
                    <Form capturarDados={(campo, dados)=> this.capturarDados(campo, dados)}/>
                    <View style={{width: 100}}>
                        <Button color={"#9B2626"} title="Login"  onPress={() => this.validarCampos()}/>
                    </View>
                    <TouchableOpacity onPress={() => this.abrirTelaCadastro()} style={{marginTop: 12}}>
                        <Text style={{color: "white"}}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

class Form extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <View style={{marginTop: 8, marginBottom: 8}}>
                <TextInput onChangeText={email => this.props.capturarDados("email", email)} style={StyleLogin.form} placeholder="Email"/>
                <TextInput secureTextEntry={true} onChangeText={senha => this.props.capturarDados("senha", senha)} style={StyleLogin.form} placeholder="Senha"/>
            </View>
        );
    }

}