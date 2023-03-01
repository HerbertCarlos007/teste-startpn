import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import logo from '../../../assets/logo.png'
import perfil from '../../../assets/perfil.png'

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Entypo 
                name="menu" 
                size={50} 
                color="#476EE6" 
                />
                <Image source={logo}/>
                <Image source={perfil}/>
            </View>
        </View>
    )
}