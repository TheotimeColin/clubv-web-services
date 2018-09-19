<template>
  <div class="Test">
    
    <SectionGeneric class="Test_upper" :pattern="true" :modifiers="[ 'shadow', 'header' ]">
      <WrapperGeneric>
        <LogoGeneric class="Test_logo" :source="assets.logoLSPD" :width="75" />
        <form @submit="() => this.onSubmitSearch()" action="#">
          <InputText class="InputTest" label="Prénom" @changeSearch="(v) => this.onChangeSearch({ firstname: v })"/>
          <InputText class="InputTest" label="Nom" @changeSearch="(v) => this.onChangeSearch({ lastname: v })"/>
          <button type="submit"></button>
        </form>
      </WrapperGeneric>
    </SectionGeneric>
    
    <SectionGeneric :modifiers="[ 'full', { name: 'no-overflow', active: state.isLoading } ]">
      <LoadOverlay v-if="state.isLoading" />
      
      <TableGeneric :data="users" :config="config"></TableGeneric>
      
      <LoadMore @load-more="() => this.onLoadMore()" v-if="this.pages.current < this.pages.max">Charger plus ({{ pages.items }} entrées restantes)</LoadMore>
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
import LoadMore from '@/components/LoadMore'
import LoadOverlay from '@/components/LoadOverlay'
  
import logoLSPD from '@/assets/img/icons/lspd.png'
  
export default {
  name: 'HelloWorld',
  components: { TableGeneric, WrapperGeneric, InputText, SectionGeneric, LogoGeneric, LoadMore, LoadOverlay },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      state: {
        isLoading: false
      },
      assets: { logoLSPD },
      search: {},
      users: [],
      pages: {
        current: 0,
        max: 0,
        items: 0
      },
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
    async getPosts (append = false) {
      if (!append) this.$set(this.pages, 'current', 0)
      
      const params = {
        search: this.search,
        page: this.pages.current
      }
      
      this.$set(this.state, 'isLoading', true)
      const response = await TestService.fetchPosts(params)
      
      setTimeout(() => {
        this.$set(this.state, 'isLoading', false)
      }, 1000)
      
      const current = append ? this.users : []
      const users = response.data.users.map((value) => {
        return {
          id: value.user_id,
          firstname: value.firstname,
          lastname: value.name,
          phone: value.phone
        }
      })
      
      this.$set(this.pages, 'max', response.data.pages)
      this.$set(this.pages, 'items', response.data.items)
      this.$set(this, 'users', current.concat(users))
    },
    async onSubmitSearch() {
      this.getPosts()
    },
    onChangeSearch(search) {
      this.$set(this, 'search', { ...this.search, ...search })
    },
    onLoadMore() {
      this.$set(this.pages, 'current', this.pages.current + 1)
      this.getPosts(true)
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
  
  .InputTest {
    display: inline-block;
  }
</style>
