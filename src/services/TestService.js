import Api from '@/services/Api'

export default {
  fetchPosts (params) {
    return Api().post('posts', params)
  }
}