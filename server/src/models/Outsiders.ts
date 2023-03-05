import { Table, Column, Model, DataType, AllowNull} from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface OutsidersAttributes {
  id: number
  name: string
  email: string
  telephone: string
  address: string
  typeOutsider: string
  avatar: string
}

interface OutsidersCreationAttributes extends Optional<OutsidersAttributes, 'id'> {}

@Table({
  timestamps: true
})

class Outsiders extends Model <OutsidersAttributes, OutsidersCreationAttributes> {

  @Column(DataType.TEXT)
  name: string | undefined

  @Column(DataType.TEXT)
  email: string | undefined

  @Column(DataType.TEXT)
  telephone: string | undefined

  @Column(DataType.TEXT)
  address: string | undefined

  @Column(DataType.TEXT)
  typeOutsider: string | undefined

  @Column(DataType.TEXT)
  avatar: string | undefined

}

export {Outsiders}