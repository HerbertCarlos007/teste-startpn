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

    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
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

    },

    centerSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,

    },

    leftSideTitles: {

    },

    rightSideDatas: {

    },

    containerAddress: {
        width: 150,
    },

    valueEmail: {
        color: '#1A1A1A',
        fontWeight: '600',
    },

    valueTelephone: {
        marginTop: 22,
        color: '#1A1A1A',
        fontWeight: '600',
    },

    valueAddress: {
        marginTop:30,
        color: '#1A1A1A',
        fontWeight: '600',
    },

    titleEmail: {
        marginTop: 2,
        fontWeight: 500,
        color: '#808080'
    },

    titleTelephone: {
        marginTop: 20,
        fontWeight: 500,
        color: '#808080'
    },

    titleAddress: {
        marginTop: 30,
        fontWeight: 500,
        color: '#808080'
    },

    containerModal: {
        height: 200,
    },

    topSectionModal: {
       width: 375,
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between'
    },

    containerActions: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    textEdit: {
        fontSize: 18,
        fontWeight: 500,
        marginTop: 15,
    },

    textDelete: {
        fontSize: 18,
        fontWeight: 500,
        color: '#EA0000',
        marginTop: 15,
    }

   
})