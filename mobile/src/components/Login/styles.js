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
    },

    title: {
        fontSize: 24,
        color: '#476EE6',
        marginTop: 40,
        fontWeight: '500'
    },

    containerForm: {
        paddingTop: 20
    },

    containerInputs: {

    },

    textName: {
        paddingTop: 10,
    },

    input: {
        width: 324,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D7D7D7',
        marginTop: 10,
        paddingLeft: 10,
      },

      buttonForgotPassword: {
        marginTop: 10,
        marginLeft: 200,
        
      },

      textForgotPassword: {
        color: '#476EE6',
        fontWeight: '500'
      },
      

})  