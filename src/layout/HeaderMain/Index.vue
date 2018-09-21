<template>
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
</template>

<script>
import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import InputText from '@/components/InputGeneric/InputText'
import LogoGeneric from '@/components/LogoGeneric'
  
import logoLSPD from '@/assets/img/icons/lspd.png'
  
export default {
  name: 'HeaderMain',
  components: { WrapperGeneric, InputText, SectionGeneric, LogoGeneric },
  data () {
    return {
      assets: { logoLSPD }
    }
  },
  methods: {
    onSubmitSearch () {
      this.$emit('submit-search')
    },
    onChangeSearch (search) {
      this.$emit('change-search', search)
    }
  }
}
</script>

<style scoped>
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
</style>
