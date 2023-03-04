import { View, Text, TouchableOpacity } from 'react-native'
import { Header } from '../../components/Header'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Logout = () => {

    const navigation = useNavigation()

    const logout = () => {
        AsyncStorage.removeItem('token')
        navigation.navigate('home')    
    }

    return (
        <>
            <Header />

            <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.title}>Realmente deseja sair ?</Text>
                <TouchableOpacity style={styles.button} onPress={logout}>
                    <Text style={styles.text}>Sim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('outsiders')}>
                    <Text style={styles.text}>Não</Text>
                </TouchableOpacity>
                </View>
            </View>
        </>

    )
}