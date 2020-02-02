import React, {Component} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import StyleLogin from './LoginStyle.js'

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

    }

    abrirTelaCadastro(){
        this.props.navigation.navigate('PreCadastro');
    }

    render(){
        return (
            <View style={StyleLogin.container}>
                <View style={StyleLogin.styleCard}>
                    <Text style={StyleLogin.titulo}>PostApp</Text>
                    <Form capturarDados={(campo, dados)=> this.capturarDados(campo, dados)}/>
                    <View style={{width: 90}}>
                        <Button color={"rgb(255,102,0)"} title="Login"  onPress={() => this.validarCampos()}/>
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
                <TextInput onChangeText={email => this.props.capturarDados("email", email)} style={StyleLogin.form} placeholder="Email..."/>
                <TextInput secureTextEntry={true} onChangeText={senha => this.props.capturarDados("senha", senha)} style={StyleLogin.form} placeholder="Senha..."/>
            </View>
        );
    }

}