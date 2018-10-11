import Api from '@/services/Api'

export default {
  fetchCitizens (params) {
    return Api().post('citizens', params)
  }
}