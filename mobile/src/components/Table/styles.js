import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 150,
    },

    containerList: {
        marginTop: 30,
        width: 380,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D7D7D7',
        padding: 20,
        borderRadius: 10,

    },

    topSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textAction: {
        fontSize: 18,
        fontWeight: '500'
    },

    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    line: {
        height: 2,
        backgroundColor: '#E4E4EF',
        marginTop: 15,
        width: 375,

    },

    centerSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,

    },

    contentHeader: {
        height: 150
    },

    rowContent: {
        height: 150,
        
    },


    columnValue: {
        color: '#1A1A1A',
        fontWeight: '600',
        marginTop: 10,
    },

    columnName: {
        fontWeight: '500',
        color: '#808080',
        marginTop: 10,

    },

    containerModal: {
        height: 200,
    },


    topSectionModal: {
        width: 375,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textTitle: {
        fontSize: 18,
        fontWeight: '500,'
    },

    containerActions: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    textEdit: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 15,
    },

    textDelete: {
        fontSize: 18,
        fontWeight: '500',
        color: '#EA0000',
        marginTop: 15,
    },

    leftSideModal: {
        flexDirection: 'row',
        gap: 20,
    },

    containerDelete: {
        width: 82,
        height: 37,
        backgroundColor: '#FFE1E1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    buttonDelete: {
        fontWeight: '500',
        color: '#EA0000'
    },

    containerInstructions: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },

    textDeleteOutsider: {
        fontSize: 18,
        fontWeight: '600',
    },

    buttonCloseModalDelete: {
        marginTop: 5,
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

    uploadPhoto: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        

    },

    containerIconPhoto: {
        backgroundColor: '#476EE6',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 70,
        padding: 5,
        position: 'relative'
       
    },

    containerForm: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
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
    }

})