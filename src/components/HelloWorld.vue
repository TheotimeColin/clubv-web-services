<template>
  <div class="Test">
    <SectionGeneric class="Test_upper" :pattern="true" :modifiers="[ 'shadow', 'header' ]">
      <WrapperGeneric>
        <InputText class="InputTest" />
      </WrapperGeneric>
    </SectionGeneric>
    <SectionGeneric :modifiers="[ 'full' ]">
      <TableGeneric :data="users" :config="config"></TableGeneric>
    </SectionGeneric>
  </div>
</template>

<script>
import TestService from '@/services/TestService'
import TableGeneric from '@/components/TableGeneric'
import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import InputText from '@/components/InputGeneric/InputText'
  
export default {
  name: 'HelloWorld',
  components: { TableGeneric, WrapperGeneric, InputText, SectionGeneric },
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
</style>
