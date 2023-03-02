import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
       backgroundColor: '#FFFFFF',
       flex: 1
    },

    topSection: {
        flexDirection: 'row',
        marginTop: 50,
        height: 70,
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '##FFFFFF',
        gap: 120,
        paddingStart: 20
    },

    myAccount: {
        fontSize: 18,
        fontWeight: '500',
    },

    containerIconIconArrow: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#476EE6',
        borderRadius: 20,
    },

    uploadPhoto: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },

    containerIconPhoto: {
        backgroundColor: '#476EE6',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 70,
        padding: 5,
        position: 'relative',
        bottom: 35,
        left: 35,
    },

    containerForm: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelForm: {
        fontWeight: '400',
        marginTop: 10,
    },

    input: {
        width: 350,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D7D7D7',
        borderRadius: 7,
        marginTop: 10,
        paddingLeft: 10,
    },

    buttonContainer: {
        width: 315,
        height: 45,
        backgroundColor: '#476EE6',
        marginTop: 10,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textSave: {
        color: '#ffffff',
        fontWeight: '600',
    }
})