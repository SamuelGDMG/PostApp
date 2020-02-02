import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloMain = StyleSheet.create({
    conatainer: {
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
    textoRodape : {color: "white"}
});

export default estiloMain;