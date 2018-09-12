<template>
  <div class="Test">
    
    <SectionGeneric class="Test_upper" :pattern="true" :modifiers="[ 'shadow', 'header' ]">
      <WrapperGeneric>
        <LogoGeneric class="Test_logo" :source="assets.logoLSPD" :width="75" />
        <form @submit="() => this.onSubmitSearch()">
          <InputText class="InputTest" label="Recherche par nom, prénom, id..." @changeSearch="(e) => this.onChangeSearch(e)"/>
        </form>
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
import LogoGeneric from '@/components/LogoGeneric'
  
import logoLSPD from '@/assets/img/icons/lspd.png'
  
export default {
  name: 'HelloWorld',
  components: { TableGeneric, WrapperGeneric, InputText, SectionGeneric, LogoGeneric },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      assets: { logoLSPD },
      search: '',
      users: [],
      config: {
        rows: {
          id: { label: 'ID', style: { width: '20px', textAlign: 'center' } },
          firstname: { label: 'Prénom', style: { width: '35%' } },
          lastname: { label: 'Nom', style: { width: '35%', textTransform: 'uppercase', fontWeight: 800 } },
          phone: { label: 'Téléphone', style: { width: '20%', textAlign: 'center' } }
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
    },
    async onSubmitSearch() {
      const response = await TestService.fetchPosts(this.search)
      this.users = response.data.map((value) => {
        return {
          id: value.user_id,
          firstname: value.firstname,
          lastname: value.name,
          phone: value.phone
        }
      })
    },
    onChangeSearch(search) {
      this.$set(this, 'search', search)
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
  
  .Test_logo {
    margin-bottom: 30px;
  }
</style>
