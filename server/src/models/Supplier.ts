import { Table, Column, Model, DataType, AllowNull} from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface SuppliersAttributes {
  id: number
  name: string
  email: string
  telephone: string
  address: string
  type: string
}

interface SuppliersCreationAttributes extends Optional<SuppliersAttributes, 'id'> {}

@Table({
  timestamps: true
})

class Suppliers extends Model <SuppliersAttributes, SuppliersCreationAttributes> {

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

export {Suppliers}