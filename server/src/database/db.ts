import { Sequelize } from 'sequelize-typescript'
import { Users } from '../models/User'
import {Outsiders} from '../models/Outsiders'
import {CustomFields} from '../models/CustomFields'

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'mysql',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
})
sequelize.addModels([Users, Outsiders, CustomFields])

export { sequelize }