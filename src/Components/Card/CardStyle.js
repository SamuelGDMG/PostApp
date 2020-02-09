import { StyleSheet, Dimensions } from 'react-native';
const largura = Dimensions.get("screen").width;

const estiloCard = StyleSheet.create({
    styleCard: {
        borderRadius: 12,
        width: largura * 0.90,
        backgroundColor: "rgb(47,50,54)",
        elevation: 6,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 5
    },
    container : {
        marginTop: 12,
        marginBottom: 4,
        width: largura,
        alignItems: "center"
    },
    textoTitulo : {
        color: "white",
        fontStyle : "normal",
        fontSize : 16
    },
    textoDescricao : {
        color : "white"
    }
});

export default estiloCard;