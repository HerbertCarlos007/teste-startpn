import { View, Text, Modal, Button, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

export const ModalEditAndCreate = ({ visibleModal,  children }) => {

    return (
        <Modal
            visible={visibleModal}
            transparent
            statusBarTranslucent
            animationType='slide'
        >
            <View style={styles.container}  >
                <View style={styles.content}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}
