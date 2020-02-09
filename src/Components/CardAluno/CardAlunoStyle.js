import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloCardAluno = StyleSheet.create({
    styleCard: {
        borderRadius: 20,
        width : largura * 0.95,
        backgroundColor: "rgb(47,50,54)",
        alignItems: "center",
        justifyContent: 'center',
        elevation: 6,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 5,
        marginTop : 10
    },
    form : {
        width : largura * 0.90,
        borderWidth: 1,
        borderColor: "rgb(255,102,0)",
        borderRadius: 18,
        margin: 5,
        height: 30,
        alignItems: "center",
        flexDirection: "row"
    },
    texto : {
        color: "white",
        marginStart : 16
    }
})

export default estiloCardAluno;