import api from './api'

export class OutsidersService {
  async  getOutsiders(typeOutsider) {
        try {
            const response = await api.get(`/outsiders`, {
                params: {
                    typeOutsider
                }
            })
            return (response.data.outsiders)
        } catch (error) {
            console.log(error)
        }
    }
}

