import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import estiloMain from './MainStyle.js'
import CardTimeLine from '../../Components/Card/CardTimeLine.js'
import { ScrollView } from 'react-native-gesture-handler';
import URL from '../../API/URL.js'

export default class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            postar : [],
        }
    }

    componentDidMount(){

        AsyncStorage.getItem('autenticacao').then(token => {

            const requestInfo = {
                method : 'GET',
                headers : new Headers({
                    'Content-type': 'application/json',
                    'x-access-token' : `${token}`
                })
            }

            fetch(URL.postar, requestInfo).then(res => {
                if(res.ok){
                    return res.text();
                }
    
                throw new Error("Erro dentro do fetch")
            }).then(dados => {
                let dadosConvertido = JSON.parse(dados)

                this.setState({
                    postar : dadosConvertido.objeto
                })
            })
    

        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={estiloMain.conatainer}>
                    <ScrollView>
                    {
                        this.state.postar.map(dados => <CardTimeLine titulo={dados.titulo} descricao={dados.descricao}/>)
                    }
                    </ScrollView>
                </View>
                <View style={estiloMain.rodape}>
                    <ConteudoRodape rotas={this.props.navigation}/>
                </View>
            </View>
        );
    }

}

const ConteudoRodape = ({rotas}) => {
    return (
        <>
        <TouchableOpacity onPress={() => rotas.navigate('Pesquisar')} style={estiloMain.conteudoRodape}>
            <Image source={require("../../../img/baseline_search_white_18dp.png")} />
            <Text style={estiloMain.textoRodape}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => rotas.navigate('Publicar')} style={estiloMain.conteudoRodape}>
            <Image source={require("../../../img/baseline_send_white_18dp.png")} />
            <Text style={estiloMain.textoRodape}>Publicar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => rotas.navigate('Menu')} style={estiloMain.conteudoRodape}>
            <Image source={require("../../../img/baseline_reorder_white_18dp.png")} />
            <Text style={estiloMain.textoRodape}>Menu</Text>
        </TouchableOpacity>
        </>
    );
}