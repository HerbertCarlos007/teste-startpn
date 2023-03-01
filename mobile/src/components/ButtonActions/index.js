import { View, TouchableOpacity, Text } from 'react-native'
import {styles} from './styles'

export const ButtonActions = ({title}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}