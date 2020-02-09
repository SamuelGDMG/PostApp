import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estiloAprovar = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "rgb(49, 54, 60)",
        alignItems : "center"
    }
})

export default estiloAprovar;