import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface CustomFieldsAttributes {
    id: number
    name: string
    description: string
}

interface CustomFieldsCreationAttributes extends Optional<CustomFieldsAttributes, 'id'> { }

@Table({
    timestamps: true
})

class CustomFields extends Model<CustomFieldsAttributes, CustomFieldsCreationAttributes> {

    @Column(DataType.TEXT)
    name: string | undefined

    @Column(DataType.TEXT)
    description: string | undefined

}

export { CustomFields }