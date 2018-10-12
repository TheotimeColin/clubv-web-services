import Api from '@/services/Api'

export default {
  fetchCitizens (params) {
    return Api().post('citizens', params)
  },
  getCitizen (phone) {
    return Api().post('citizens', { phone })
  }
}