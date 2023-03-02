import { Sequelize } from 'sequelize-typescript'
import { Users } from '../models/User'
import {Clients} from '../models/Clients'
import {Suppliers} from '../models/Supplier'

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'mysql',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
})
sequelize.addModels([Users, Clients, Suppliers])

export { sequelize }