
import { StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width;

const StyleLogin = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "rgb(49, 54, 60)",
    },
    styleCard: {
        borderRadius: 30,
        height: 300,
        backgroundColor: "rgb(47,50,54)",
        alignItems: "center",
        justifyContent: 'center',
        elevation: 6,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 15
        
    },
    form: {
        width: largura * 0.8,
        height: 50,
        borderColor: "#9B2626",
        borderWidth: 1,
        borderRadius: 14,
        padding: 5,
        marginBottom: 15
        
    },
    titulo: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 20,
    },
})

export default StyleLogin;

