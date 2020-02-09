import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloPesquisar = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: "rgb(49, 54, 60)",
    },
    conteudoPesquisa : {
        flex : 1,
        alignItems : "center"
    },
    campoInput : {
        borderColor : "rgb(255,102,0)",
        borderWidth : 1,
        borderRadius: 18,
        margin : 10,
        height : 50,
        paddingStart : 10
    }
})

export default estiloPesquisar;