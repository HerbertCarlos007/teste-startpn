import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
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

   
})