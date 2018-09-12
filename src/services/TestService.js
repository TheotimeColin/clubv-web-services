import Api from '@/services/Api'

export default {
  fetchPosts (search) {
    return Api().get('posts',
      { params: { search: search } }
    )
  }
}