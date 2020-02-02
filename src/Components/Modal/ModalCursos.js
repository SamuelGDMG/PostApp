import React, { Component } from 'react';
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
                    <ModalBody cursos={this.props.cursos} modalVisible={this.state.modalVisible} setModalVisible={(estado) => this.setModalVisible(estado)} />

                    <Text style={{ color: "white" }} >Cursos</Text>

                </View>
            </TouchableHighlight>
        );
    }
}

const ModalBody = (dados) => {

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
                        dados.cursos.map(curso => {
                            return(
                                <TouchableOpacity key={curso._id} onPress={() => console.log(curso._id)}>
                                <View style={{flexDirection: "row", alignItems: "center", margin: 5}}>
                                <RadioButton
                                    value="first"
                                    status={'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
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
                        <Button onPress={() => dados.setModalVisible(!dados.modalVisible)} color="red" title="Cancelar"/>
                        <Button title="Salvar"/>
                    </View>
                </View>
                
            </View>
        </Modal>
    );

}