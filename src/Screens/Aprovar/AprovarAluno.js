import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image, ScrollView } from 'react-native';
import estiloAprovar from './AprovarStyle.js'
import CardAluno from '../../Components/CardAluno/CardAluno.js'
import URL from '../../API/URL.js'

export default class AprovarAluno extends Component {

    constructor() {
        super();

        this.state = {
            alunosAprovar : []
        }
    }

    componentDidMount(){
        this.buscarAlunos();
    }

    buscarAlunos(){
        AsyncStorage.getItem('autenticacao').then(token => {

            const requestInfo = {
                method : 'GET',
                headers : new Headers({
                    'Content-type': 'application/json',
                    'x-access-token' : `${token}`
                })
            }

            fetch(URL.buscarAlunos, requestInfo).then(res => {
                if(res.ok){
                    return res.text();
                }
                throw new Error("Erro dentro do fetch")
            }).then(dados => JSON.parse(dados)).then(dados => this.listarPendentes(dados.objeto)).then(dados => {

                this.setState({
                    alunosAprovar : dados
                })
            })
    

        });
    }

    listarPendentes(dados){

        let meusAlunos = []

        dados.map(dado => {
            if(!dado.ativo){
                meusAlunos.push(dado);
            }
        })

        return meusAlunos;

    }

    async aceitarAndRejeitar(id, AddOrRjc){

        let token = await AsyncStorage.getItem('autenticacao');

        const requestInfo = {
            method : 'PUT',
            body : JSON.stringify({
                "ativo": AddOrRjc
            }),
            headers : new Headers({
                'Content-type': 'application/json',
                'x-access-token' : token,
            })
        }

        console.log(requestInfo.body)

        let url = `${URL.buscarAlunos}${id}`

        console.log("uh!", url)

        fetch(url, requestInfo).then(res => {
            if(res.ok){
                this.removerAlunoAprovadoReprovadoArray(id)
                return res.text();
            }

            console.log(res.text())
            console.log(res.status)
            throw new Error("Erro dentro do fetch aprovar aluno")
        }).then(dados => {
            console.log("Sucesso")
            if(AddOrRjc){
                console.log("Aceito")
            }else{
                console.log("Rejeitado")
            }
        }).catch(err => console.log("Deuuuuuuuuuu erro porra!", err))
    }

    removerAlunoAprovadoReprovadoArray(id){

        let arrayAtualizar = []

        this.state.alunosAprovar.map(aluno => {
            if(!(aluno._id === id)){
                arrayAtualizar.push(aluno)
            }
        })

        this.setState({
            alunosAprovar : arrayAtualizar
        })
    }

    render() {
        return (
            <View style={estiloAprovar.container}>
                <ScrollView>
                    {
                        this.state.alunosAprovar.map(dados => <CardAluno {...dados} aceitarAndRejeitar={(id, estado) => this.aceitarAndRejeitar(id, estado)}/>)
                    }
                </ScrollView>
            </View>
        );
    }

}