import React, { Component, useState, useEffect } from 'react';
import { Modal, Alert, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, Picker, ScrollView } from 'react-native';
import estiloPreCadastro from '../../Screens/PreCadastro/PreCadastroStyle.js'
import estiloModalCursos from '../Modal/ModalCursosStyle'
import { RadioButton } from 'react-native-paper';

export default class ModalCursos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <TouchableHighlight onPress={() => { this.setModalVisible(true); }} underlayColor={'transparent'}>
                <View style={[estiloPreCadastro.spinner, { height: 50, alignItems: "center", justifyContent: "center" }]}>
                    <ModalBody setCursoModal={(dados) => this.props.setCursoModal(dados)} cursos={this.props.cursos} modalVisible={this.state.modalVisible} setModalVisible={(estado) => this.setModalVisible(estado)} />

                    <Text style={{ color: "white" }} >Cursos</Text>

                </View>
            </TouchableHighlight>
        );
    }
}

const ModalBody = (dados) => {
    const [cursosSelecionados, setCursoSelecionado] = useState([]);

    useEffect(() => {
        setCursoSelecionado(dados.cursos)
    })

    const alterarEstado = (estadoAtual, id) => {
        let alterarEstadoCurso = cursosSelecionados.map(curso => {
            if(curso._id === id){
                if(estadoAtual === "checked"){
                    curso.estado = "unchecked"
                }else{
                    curso.estado = "checked"
                }
            }

            return curso;
        })

        setCursoSelecionado(alterarEstadoCurso);
    }

    return (
        <Modal
            transparent={true}
            visible={dados.modalVisible}
            onRequestClose={() => {
                dados.setModalVisible(!dados.modalVisible);
            }}>
            <View style={estiloModalCursos.container}>
                <View style={estiloModalCursos.styleCard}>
                    <View style={{flex: 1}}>
                    <ScrollView>
                    {
                        cursosSelecionados.map(curso => {
                            return(
                                <TouchableOpacity key={curso._id} onPress={() => { alterarEstado(curso.estado, curso._id)}}>
                                <View style={{flexDirection: "row", alignItems: "center", margin: 5}}>
                                <RadioButton
                                    value="first"
                                    status={curso.estado}
                                    onPress={() => { alterarEstado(curso.estado, curso._id)}}
                                />
                                <Text style={{color: "white"}}>{curso.nome}</Text>
                            </View>
                            </TouchableOpacity>
                            )
                        })
                    }
                    </ScrollView>
                    </View>
                    <View style={{flexDirection: "row", margin: 5, justifyContent: "flex-end"}}>
                        <Button onPress={() => {
                            dados.setModalVisible(!dados.modalVisible)
                        }} title="Confirmar"/>
                    </View>
                </View>
                
            </View>
        </Modal>
    );

}