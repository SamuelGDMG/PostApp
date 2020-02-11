import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloPreCadastro = StyleSheet.create( {
    container : {
        backgroundColor: "rgb(49, 54, 60)",
        flex: 1,
    },
    form : {
        width: largura * 0.8,
        height: 40,
        borderColor: "#9B2626",
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        marginBottom: 5,
        width: largura * 0.95
    },
    texto : {
        color : "white"
    },
    containerForm : {
        flex: 1, margin: 10
    },
    spinner : {
        width : largura * 0.95,
        backgroundColor: "red",
        backgroundColor : "rgb(255,102,0)",
        borderRadius : 25,
        alignItems : "center",
        marginTop: 5,
        marginBottom: 5
    }
})

export default estiloPreCadastro;