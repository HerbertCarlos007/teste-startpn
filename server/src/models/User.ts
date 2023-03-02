import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface UsersAttributes {
    id: number
    name: string
    email: string,
    password: string,
    telephone: number,
}

interface UsersCreationAttributes extends Optional<UsersAttributes, 'id'> { }

@Table({
    timestamps: true
})

class Users extends Model<UsersAttributes, UsersCreationAttributes> {


    @Column(DataType.TEXT)
    name: string | undefined

    @Column(DataType.TEXT)
    email: string | undefined

    @Column(DataType.TEXT)
    password: string | undefined

    @Column(DataType.NUMBER)
    telephone: string | undefined

}

export { Users }

