<template>
  <WrapperGeneric>
    <TableGeneric :data="users" :config="config"></TableGeneric>
  </WrapperGeneric>
</template>

<script>
import TestService from '@/services/TestService'
import TableGeneric from '@/components/TableGeneric'
import WrapperGeneric from '@/components/WrapperGeneric'
  
export default {
  name: 'HelloWorld',
  components: { TableGeneric, WrapperGeneric },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      users: [],
      config: {
        rows: {
          id: { label: 'ID' },
          firstname: { label: 'Prénom' },
          lastname: { label: 'Nom', style: { textTransform: 'uppercase' } },
          phone: { label: 'Téléphone' }
        }
      }
    }
  },
  methods: {
    async getPosts () {
      const response = await TestService.fetchPosts()
      this.users = response.data.map((value) => {
        return {
          id: value.user_id,
          firstname: value.firstname,
          lastname: value.name,
          phone: value.phone
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
