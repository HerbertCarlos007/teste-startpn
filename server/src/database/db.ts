import { Sequelize } from 'sequelize-typescript'
import { Users } from '../models/User'

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'mysql',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
})
sequelize.addModels([Users])

export { sequelize }