import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloPublicar = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(49, 54, 60)",
    },
    rodape: {
        flexDirection: "row", backgroundColor: "rgb(47,50,54)", height: 50, backgroundColor: "rgb(47,50,54)",
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "red",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 4,
        borderColor: "white",
        borderTopWidth: 1,
    },
    conteudoRodape: { flex: 1, alignItems: "center", justifyContent: "center" },
    textoRodape : {color: "white"},
    form : {
        height: 40,
        borderColor: "rgb(255,102,0)",
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
        marginBottom: 5,
        padding: 5
    },
    containerForm : {
        flex: 1, margin: 10
    },
    texto : {
        color : "white",
        marginStart: 5
    },
});

export default estiloPublicar;