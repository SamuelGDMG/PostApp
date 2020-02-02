import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloModalCursos = StyleSheet.create( {
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    styleCard: {
        borderRadius: 20,
        height: 300,
        width : largura * 0.80,
        backgroundColor: "rgb(47,50,54)",
        justifyContent: 'center',
        elevation: 6,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 5
    }
})

export default estiloModalCursos;