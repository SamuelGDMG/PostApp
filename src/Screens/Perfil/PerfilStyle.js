import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloPerfil = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "rgb(49, 54, 60)",
    },
    conteudoPerfil : {
        borderWidth: 1,
        borderColor: "rgb(255,102,0)",
        borderRadius: 18,
        margin: 5,
        height: 50,
        alignItems: "center",
        flexDirection: "row"
    },
    nomeFlex : {
        flex: 1,
    },
    texto : {
        color : "white",
        marginStart: 18,
        flex : 1
    }
});

export default estiloPerfil;