import React, { Component } from 'react';
import {Modal, Alert, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight,KeyboardAvoidingView, Picker, ScrollView } from 'react-native';
import estiloPreCadastro from '../PreCadastro/PreCadastroStyle.js'
import Spinner from '../../Components/Spinner/Spinner.js'
import ModalCursos from '../../Components/Modal/ModalCursos.js'

const categorias = [{ _id: 1, nome: "Aluno" }, { _id: 2, nome: "Professor" }, { _id: 3, nome: "Coordenador" }, { _id: 4, nome: "Administração" }]
const cursos = [
    {
      "ativo": true,
      "_id": "5e3465d6c7192b3674baed02",
      "nome": "Mecanica",
      "data_criacao": "2020-01-31T17:37:26.324Z",
      "__v": 0
    },
    {
        "ativo": true,
        "_id": "5e3465d6c7192b3674baed028",
        "nome": "Mecatronica",
        "data_criacao": "2020-01-31T17:37:26.324Z",
        "__v": 0
      }
  ];

export default class PreCadastro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categoria: "Aluno",
            coordCurso : "Matematica",
            professorCursos : []
        }

    }

    alterarValorSpinner(chave, escolha) {
        this.setState({
            [chave]: escolha
        })
        console.log("Ei aqui", escolha)
    }

    render() {
        return (
            <KeyboardAvoidingView style={estiloPreCadastro.container}>
                <View style={estiloPreCadastro.containerForm}>

                    <Inputs/>

                    <View style={estiloPreCadastro.spinner}>
                        <Spinner chave={"categoria"} categorias={categorias} selecionado={this.state.categoria} alterarValorSpinner={(chave, escolha) => this.alterarValorSpinner(chave, escolha)} />
                    </View>

                    {
                        this.state.categoria === "Coordenador" ? <SpinnerCoordenador selecionado={this.state.coordCurso} alterarValorSpinner={(chave, escolha) => this.alterarValorSpinner(chave, escolha)}/> : null
                    }
                    <ModalCursos cursos={cursos}/>

                </View>
                <View style={{ margin: 8 }}>
                    <Button color={"rgb(255,102,0)"} title="Cadastrar" onPress={() => console.log("awdaw")} />
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const SpinnerCoordenador = (dados) => {
    return (
        <View style={estiloPreCadastro.spinner}>
            <Spinner chave={"coordCurso"} categorias={cursos} selecionado={dados.selecionado} alterarValorSpinner={(chave, escolha) => dados.alterarValorSpinner(chave, escolha)} />
        </View>
    );
}

const Inputs = () => {

    return (
        <>
            <Text style={estiloPreCadastro.texto}>Digite seu nome:</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="Nome..." />
            <Text style={estiloPreCadastro.texto}>Digite seu e-mail:</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="Email..." />
            <Text style={estiloPreCadastro.texto}>Digite seu CPF:</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="CPF..." />
            <Text style={estiloPreCadastro.texto}>Digite uma senha:</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="Senha..." />
            <Text style={estiloPreCadastro.texto}>Confirme a senha: </Text>
            <TextInput style={estiloPreCadastro.form} placeholder="Senha..." />
        </>
    );

}

  /*

  <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>

                */