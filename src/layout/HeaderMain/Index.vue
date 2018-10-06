<template>
  <SectionGeneric
    :pattern="true"
    :modifiers="[ 'header', { name: 'header-mini', active: mini } ]"
  >
    <WrapperGeneric>
      <div class="Test_form">
        <IconGeneric class="Test_logo" name="logoLSPD" :width="mini ? 70 : 100" />
        <form class="Test_form" @submit="(e) => this.onSubmitSearch(e)" action="#">
          <InputText class="InputTest" label="Prénom" @changeSearch="(v) => this.onChangeSearch({ firstname: v })"/>
          <InputText class="InputTest" label="Nom" @changeSearch="(v) => this.onChangeSearch({ lastname: v })"/>
          <button class="SubmitTest" type="submit">
            <IconGeneric :width="15" name="arrowRightWhite" />
          </button>
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
import IconGeneric from '@/components/IconGeneric'
  
export default {
  name: 'HeaderMain',
  components: { WrapperGeneric, InputText, SectionGeneric, LogoGeneric, IconGeneric },
  props: {
    mini: { type: Boolean, default: false }
  },
  methods: {
    onSubmitSearch (e) {
      e.preventDefault()
      this.$store.dispatch('search')
    },
    onChangeSearch (search) {
      this.$store.commit('changeSearch', search)
    }
  }
}
</script>

<style scoped>
  .Test_form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  
  .SubmitTest {
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    color: white;
    background: var(--color-gradient-main);
  }
</style>
