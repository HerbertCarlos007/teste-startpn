import { Table, Column, Model, DataType, AllowNull} from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface ClientsAttributes {
  id: number
  name: string
  email: string
  telephone: string
  address: string
  type: string
}

interface ClientsCreationAttributes extends Optional<ClientsAttributes, 'id'> {}

@Table({
  timestamps: true
})

class Clients extends Model <ClientsAttributes, ClientsCreationAttributes> {

  @Column(DataType.TEXT)
  name: string | undefined

  @Column(DataType.TEXT)
  email: string | undefined

  @Column(DataType.TEXT)
  telephone: string | undefined

  @Column(DataType.TEXT)
  address: string | undefined

  @Column(DataType.TEXT)
  type: string | undefined

}

export {Clients}