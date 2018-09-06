<template>
  <div class="Test">
    <WrapperGeneric>
      <PatternGeneric />
      <TableGeneric :data="users" :config="config"></TableGeneric>
    </WrapperGeneric>
  </div>
</template>

<script>
import TestService from '@/services/TestService'
import TableGeneric from '@/components/TableGeneric'
import WrapperGeneric from '@/components/WrapperGeneric'
import PatternGeneric from '@/components/PatternGeneric'
  
export default {
  name: 'HelloWorld',
  components: { TableGeneric, WrapperGeneric, PatternGeneric },
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
          lastname: { label: 'Nom', style: { textTransform: 'uppercase', fontWeight: 800 } },
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
  .Test {
    min-height: 100vh;
    background: #2a2f33;
  }
</style>
