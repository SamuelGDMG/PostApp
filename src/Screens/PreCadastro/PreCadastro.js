import React, { Component } from 'react';
import {Modal, Alert, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight,KeyboardAvoidingView, Picker, ScrollView } from 'react-native';
import estiloPreCadastro from '../PreCadastro/PreCadastroStyle.js'
import Spinner from '../../Components/Spinner/Spinner.js'
import ModalCursos from '../../Components/Modal/ModalCursos.js'
import URL from '../../API/URL.js'

const categorias = [{ _id: 1, nome: "Aluno" }, { _id: 2, nome: "Professor" }, { _id: 3, nome: "Coordenador" }, { _id: 4, nome: "Administração" }]

export default class PreCadastro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categoria: "Aluno",
            coordCurso : "Matematica",
            professorCursos : [],
            tipoTela : false,
            cursos : [],
            perfil : []
        }

    }

    componentDidMount(){
        if(!(this.props.navigation.state.params.tipoTela === "Login")){
            this.buscarTiposPerfil();

            this.setState({
                tipoTela : true
            })
        }

        this.buscarCursos();

    }

    buscarTiposPerfil(){
        fetch(URL.buscarPerfils).then(res => {
            if(res.ok){
                return res.text()
            }

            throw new Error("Erro dentro do fecth buscar cursos")
        }).then(dados => JSON.parse(dados)).then(perfils => {
            this.setState({perfil : perfils.objeto})
        })
    }

    salvarEstadoCursoModal(dados){
        this.setState({
            cursos : dados
        })
    }

    buscarCursos(){
        fetch(URL.buscarCursos).then(res => {
            if(res.ok){
                return res.text()
            }

            throw new Error("Erro dentro do fecth buscar cursos")
        }).then(dados => JSON.parse(dados)).then(cursos => {

            let meusCursos = cursos.objeto.map(curso => {
                curso.estado = "unchecked"

                return curso;
            })

            this.setState({cursos : meusCursos})
        })
    }

    alterarValorSpinner(chave, escolha) {
        this.setState({
            [chave]: escolha
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={estiloPreCadastro.container}>
                <View style={estiloPreCadastro.containerForm}>

                    <Inputs/>

                    <View style={estiloPreCadastro.spinner}>
                        {
                            this.state.tipoTela === true ? <Spinner chave={"categoria"} perfils={this.state.perfil} selecionado={this.state.categoria} alterarValorSpinner={(chave, escolha) => this.alterarValorSpinner(chave, escolha)} /> : null
                        }
                    </View>

                    {
                        this.state.categoria === "Coordenador" ? <SpinnerCoordenador cursos={this.state.cursos} selecionado={this.state.coordCurso} alterarValorSpinner={(chave, escolha) => this.alterarValorSpinner(chave, escolha)}/> : null
                    }
                    <ModalCursos setCursoModal={(dados) => this.salvarEstadoCursoModal(dados)} cursos={this.state.cursos}/>

                </View>
                <View style={{ margin: 8 }}>
                    <Button color={"rgb(255,102,0)"} title="Cadastrar" onPress={() => console.log(this.state.cursos)} />
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const SpinnerCoordenador = (dados) => {
    return (
        <View style={estiloPreCadastro.spinner}>
            <Spinner chave={"coordCurso"} perfils={dados.cursos} selecionado={dados.selecionado} alterarValorSpinner={(chave, escolha) => dados.alterarValorSpinner(chave, escolha)} />
        </View>
    );
}

const Inputs = () => {

    return (
        <>
            <Text style={estiloPreCadastro.texto}>Nome Completo</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="Joaquim Teixeira" />
            <Text style={estiloPreCadastro.texto}>E-mail</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="joaquim_teixeira99@hotmail.com" />
            <Text style={estiloPreCadastro.texto}>CPF</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="xxx.xxx.xxx-xx" />
            <Text style={estiloPreCadastro.texto}>Senha</Text>
            <TextInput style={estiloPreCadastro.form} placeholder="a1VB4qrG9L" />
            <Text style={estiloPreCadastro.texto}>Confirme a senha </Text>
            <TextInput style={estiloPreCadastro.form} placeholder="a1VB4qrG9L" />
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