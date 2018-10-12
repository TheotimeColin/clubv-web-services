import Api from '@/services/Api'

export default {
  registerUser (params) {
    return Api().post('register', params)
  }
}