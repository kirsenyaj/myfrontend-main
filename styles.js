import { StyleSheet } from "react-native";

const newButtonColor = '#a38f7a'; 

export default StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: '900',
        color: '#4a413a',
        textAlign: 'center',
        marginBottom: 35,
        paddingTop: 15,
    },

    button: {
        backgroundColor: '#a38f7a',
        paddingVertical: 14,
        paddingHorizontal: 110,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
    },

    buttonColor: {
        backgroundColor: newButtonColor,
    },

    buttonSpacing: {
        marginBottom: 10,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#f8f4f0'
    },

    input: {
        borderWidth: 1,
        borderColor: "#d1c9bd",
        padding: 18,
        marginBottom: 20,
        borderRadius: 6,
        backgroundColor: "#ffffff",
    },

    text: {
        fontSize: 18,
        marginBottom: 30,
        color: '#6e6155',
        lineHeight: 28,
    },

    card: {
        backgroundColor: "#ffffff",
        padding: 22,
        marginBottom: 15,
        borderRadius: 12,
        width: '80%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
    },

    homeCard: {
        padding: 22,
        marginBottom: 15,
        borderRadius: 12,
        width: '80%',
        alignSelf: 'center',
    },

    title: {
    textAlign: 'center',
    fontSize: 28,          
    fontWeight: '900',    
    marginBottom: 20,      
    color: '#333333',
}
});