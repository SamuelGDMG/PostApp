import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const StyleLogin = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "rgb(49, 54, 60)",
    },
    styleCard: {
        borderRadius: 20,
        height: 300,
        backgroundColor: "rgb(47,50,54)",
        alignItems: "center",
        justifyContent: 'center',
        elevation: 6,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 5
    },
    form: {
        width: largura * 0.8,
        height: 40,
        borderColor: "rgb(255,102,0)",
        borderWidth: 1,
        borderRadius: 4,
        padding: 5
    },
    titulo: {
        color: "white",
        fontWeight: "bold",
    },
})

export default StyleLogin;