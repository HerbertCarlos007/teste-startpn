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
        alignItems: 'center'
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
        fontWeight: 500,
        color: '#476EE6'
    }

    
})