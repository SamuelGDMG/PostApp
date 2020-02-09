import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloMenu = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "rgb(49, 54, 60)",
    },
    conteudoMenu : {
        borderWidth: 1,
        borderColor: "rgb(255,102,0)",
        borderRadius: 18,
        margin: 5,
        height: 50,
        justifyContent: "center"
    },
    texto : {
        color : "white",
        marginStart: 18
    }
})

export default estiloMenu;