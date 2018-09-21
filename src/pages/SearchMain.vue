<template>
  <div class="Test">
    
    <SectionGeneric class="Test_upper" :pattern="true" :modifiers="[ 'shadow', 'header' ]">
      <WrapperGeneric>
        <div class="Test_form">
          <LogoGeneric class="Test_logo" :source="assets.logoLSPD" :width="100" />
          <p>Recherche</p>
          <form @submit="() => this.onSubmitSearch()" action="#">
            <InputText class="InputTest" label="Prénom" @changeSearch="(v) => this.onChangeSearch({ firstname: v })"/>
            <InputText class="InputTest" label="Nom" @changeSearch="(v) => this.onChangeSearch({ lastname: v })"/>
            <button class="SubmitTest" type="submit">></button>
          </form>
        </div>
      </WrapperGeneric>
    </SectionGeneric>
    
    <SearchTable
      :config="config"
      :data="users"
      :displayLoading="state.isLoading"
      :pages="pages"
      @load-more="() => onLoadMore()"
      @on-scroll="(percentage) => onProgress(percentage)"
    />
    
    <div class="ProgressBar" :style="{ transform: `scaleX(${ state.progress })` }"></div>
  </div>
</template>

<script>
import TestService from '@/services/TestService'

import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import InputText from '@/components/InputGeneric/InputText'
import LogoGeneric from '@/components/LogoGeneric'
  
import SearchTable from '@/layout/SearchTable'
  
import logoLSPD from '@/assets/img/icons/lspd.png'
  
export default {
  name: 'SearchMain',
  components: { SearchTable, WrapperGeneric, InputText, SectionGeneric, LogoGeneric },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      state: {
        isLoading: false,
        progress: 0
      },
      assets: { logoLSPD },
      search: {},
      users: [],
      pages: {
        current: 0,
        max: 0,
        items: 0,
        itemsByPage: 50
      },
      config: {
        link: {
          base: '/records/',
          parameters: ['id', 'lastname']
        },
        rows: {
          id: { label: 'ID', style: { width: '100px', textAlign: 'center' } },
          firstname: { label: 'Prénom', style: { width: '35%' } },
          lastname: { label: 'Nom', style: { width: '35%', textTransform: 'uppercase', fontWeight: 800 } },
          phone: { label: 'Téléphone', style: { whiteSpace: 'nowrap', textAlign: 'center' } }
        }
      }
    }
  },
  methods: {
    async getPosts (append = false) {
      if (!append) this.$set(this.pages, 'current', 0)
      
      const params = {
        search: this.search,
        page: this.pages.current,
        limit: this.pages.itemsByPage
      }
      
      this.$set(this.state, 'isLoading', true)
      const response = await TestService.fetchPosts(params)
      
      setTimeout(() => this.$set(this.state, 'isLoading', false), 0)
      
      const current = append ? this.users : []
      const users = response.data.users.map((value) => (
        {
          id: value.user_id,
          firstname: value.firstname,
          lastname: value.name,
          phone: value.phone
        }
      ))
      
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
    },
    onProgress(percentage) {
      const currentItems = this.pages.itemsByPage * (this.pages.current + 1)
      const maxItems = this.pages.itemsByPage * (this.pages.max + 1)
            
      this.$set(this.state, 'progress', (percentage * currentItems) / maxItems)
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
  
  .Test_form {
    display: flex;
    width: 100%;
    align-items: center;
  }
  
  .InputTest {
    display: inline-block;
    margin-left: 10px;
  }
  
  .SubmitTest {
    display: inline-block;
    width: 70px;
    height: 70px;
    color: white;
    background: var(--color-gradient-main);
  }
  
  .ScrollView {
    width: 100%;
    overflow-y: scroll;
  }
  
  .ProgressBar {
    position: fixed;
    bottom: 0;
    height: 5px;
    width: 100%;
    border-radius: 2px;
    background: var(--color-gradient-main);
    transform-origin: left;
  }
</style>
