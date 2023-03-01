import { StyleSheet, StatusBar } from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: statusBarHeight,
        paddingStart: 20,
        paddingEnd: 16,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    topSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,
    },

    textInstructions: {
        fontWeight: '500',

    },


    title: {
        fontSize: 24,
        color: '#476EE6',
        marginTop: 40,
        fontWeight: '500'
    },

    containerLetter: {
        width: 225,
        height: 213,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#476EE6',
        borderRadius: 60,
        marginTop: 30,
        marginBottom: 40,
    },

    buttonResendEmail: {
        width: 324,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#476EE6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15

    },

    textResendEmail: {
        fontSize: 18,
        color: '#476EE6'
    },

    button: {
       width: 324,
       height: 45,
       backgroundColor: '#476EE6',
       borderRadius: 60,
       justifyContent: 'center',
       alignItems: 'center',
      marginTop: 20
    },

     text: {
        fontSize: 18,
        color: '#FFFFFF'
     }


})  