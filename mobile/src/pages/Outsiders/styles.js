import {StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', 
        flex: 1,
        paddingEnd: 16,
        paddingStart: 16,
    },

    topSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        alignItems: 'center'
    },

    selected: {
        backgroundColor: '#476EE6',
      },

      selectedText: {
        color: 'white',
      },

      containerSwtich: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
      },

    righSide: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
        
    },

    title: {
        fontSize: 25,
        fontWeight: '600',
        color: '#476EE6'
    },

    containerActions: {
        width: 39,
        height: 39,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#D7D7D7',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerSwitchOutsider: {
        width: 380,
        height: 45,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        paddingEnd: 10,
        paddingStart: 10,
    },

    containerClient: {
        width: 152,
        height: 35,
        backgroundColor: '#476EE6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    textClient: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 500,
    },

    containerSuppliers: {
        width: 152,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    textSuppliers: {
        fontSize: 15,
        fontWeight: '500',
        color: '#476EE6'
    },

    modalContainerConfiguration: {
        width: 375,
    },

    topSectionModal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    line: {
        height: 2,
        backgroundColor: '#E4E4EF',
        marginTop: 15,
        width: 375,

    },

    leftSideModal: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerForm: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 15,
        
    },

    textFieldsForm: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 15,
        
    },

    nameField: {
       fontWeight: '500',
       position: 'relative',
       right: 60,
    },

    inputField:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        gap: 35,
        marginTop: 10,

       
    },

    ContainerIndex: {
        width: 34,
        height: 34,
        backgroundColor: '#476EE6',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    
    },

    textIndex: {
        fontSize: 21,
        color: '#FFFFFF',
        fontWeight: '500',
    },

    input: {
        width: 235,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D7D7D7',
        borderRadius: 7,
        paddingLeft: 10, 
    },

    buttonTrash: {
        marginTop: 5,
    },

    containerIsRequired:{
        flexDirection: 'row',
        gap:20,
        marginTop: 10,
        alignContent: 'center',
        marginLeft: 10,
    },

    buttonNewField: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 15,
        marginLeft: 10,
        alignItems: 'center'
    },

    textNewField: {
        color: '#476EE6',
        fontWeight: '500',
    },

    textTitle: {
        fontSize: 18,
        fontWeight: '500,'
    },

    containerEdit: {
        width: 95,
        height: 40,
        backgroundColor: '#476EE6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    buttonEdit: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FFFFFF'
    },

    
})