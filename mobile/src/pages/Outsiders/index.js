import { View, Text, TouchableOpacity } from 'react-native'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import { styles } from './styles'
import { EvilIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export const Outsiders = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <View style={styles.leftSide}>
                        <Text style={styles.title}>Terceiros</Text>
                    </View>

                    <View style={styles.righSide}>
                        <TouchableOpacity>
                            <View style={styles.containerActions}>
                                <EvilIcons name="gear" size={24} color="#476EE6" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.containerActions}>
                                <AntDesign name="search1" size={24} color="#476EE6" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerSwitchOutsider}>
                    <TouchableOpacity>
                        <View style={styles.containerClient}>
                            <Text style={styles.textClient}>Clientes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.containerSuppliers}>
                            <Text style={styles.textSuppliers}>Fornecedores</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <Table />
            </View>
        </>
    )
}