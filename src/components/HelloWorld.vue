<template>
  <div class="Test">
    <WrapperGeneric class="Test_upper" :pattern="true" :modifiers="[ 'shadow', 'header' ]">
      <InputText class="InputTest" />
    </WrapperGeneric>
    <WrapperGeneric :modifiers="[ 'full' ]">
      <TableGeneric :data="users" :config="config"></TableGeneric>
    </WrapperGeneric>
  </div>
</template>

<script>
import TestService from '@/services/TestService'
import TableGeneric from '@/components/TableGeneric'
import WrapperGeneric from '@/components/WrapperGeneric'
import InputText from '@/components/InputGeneric/InputText'
  
export default {
  name: 'HelloWorld',
  components: { TableGeneric, WrapperGeneric, InputText },
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
    display: flex;
    flex-direction: column;
    align-content: stretch;
    height: 100vh;
    overflow: hidden;
    background-color: var(--color-background-medium);
  }
  
  .Test_upper {
    padding: 0 20px;
  }
</style>
