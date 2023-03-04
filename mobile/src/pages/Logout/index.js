import { View, Text, TouchableOpacity } from 'react-native'
import { Header } from '../../components/Header'
import {styles} from './styles'

export const Logout = () => {
    return (
        <>
            <Header />

            <View style={styles.container}>
                <Text>Realmente deseja sair ?</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Sim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Não</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}