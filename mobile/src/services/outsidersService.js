import api from './api'

export class OutsidersService {
  async getOutsiders(typeOutsider) {
    try {
      console.log(typeOutsider)
      const response = await api.get(`/outsiders?typeOutsider=${typeOutsider}`)
      return response.data.outsiders
    } catch (error) {
      console.log(error)
    }
  }
}