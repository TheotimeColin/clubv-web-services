<template>
  <SectionGeneric
    :pattern="true"
    :modifiers="[ 'header', { name: 'header-mini', active: mini } ]"
  >
    <WrapperGeneric>
      <form class="Test_form" @submit="(e) => this.onSubmitSearch(e)" action="#">
        <IconGeneric class="Test_logo" name="logoLSPD" :width="mini ? 70 : 100" />
        
        <InputText class="InputTest" label="Prénom" v-model="form.firstName" />
        <InputText class="InputTest" label="Nom" v-model="form.lastName" />
        
        <button class="SubmitTest" type="submit">
          <IconGeneric :width="15" name="arrowRightWhite" />
        </button>
      </form>
    </WrapperGeneric>
  </SectionGeneric>
</template>

<script>
import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import InputText from '@/components/InputGeneric/InputText'
import LogoGeneric from '@/components/LogoGeneric'
import IconGeneric from '@/components/IconGeneric'
  
export default {
  name: 'HeaderMain',
  components: { WrapperGeneric, InputText, SectionGeneric, LogoGeneric, IconGeneric },
  props: {
    mini: { type: Boolean, default: false }
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: ''
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.$store.commit('changeSearch', this.form)
      }
    }
  },
  methods: {
    onSubmitSearch (e) {
      e.preventDefault()
      this.$store.dispatch('search')
    }
  }
}
</script>

<style scoped>
  .Test_form {
    display: flex;
    width: 100%;
    margin-left: 5px;
    align-items: center;
    justify-content: space-around;
  }
  
  .InputTest {
    margin: 0 5px;
    flex-grow: 1;
  }
  
  .SubmitTest {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    line-height: 70px;
    color: white;
    background: var(--color-gradient-main);
  }
</style>
