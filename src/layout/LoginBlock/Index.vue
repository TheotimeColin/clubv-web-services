<template>
  <FormBlock class="LoginBlock">
    <template slot="top">
      <div class="LoginBlock_logoPosition" ref="logoPosition"></div>
    </template>
    
    <p class="LoginBlock_title">Système Central de<br>Gestion des Données</p>
    <InputText class="LoginBlock_input" label="Identifiant" :required="true" :modifiers="[ 'small' ]" />
    <InputText class="LoginBlock_input" label="Mot de passe" :required="true" :modifiers="[ 'small' ]" type="password" />
    
    <template slot="bottom">
      <ButtonSquareFull class="LoginBlock_submit" @click="() => onSubmit()">Se connecter</ButtonSquareFull>
    </template>
  </FormBlock>
</template>

<script>
import FormBlock from '@/components/FormBlock'
import InputText from '@/components/InputGeneric/InputText'
import ButtonSquareFull from '@/components/Buttons/ButtonSquareFull'
  
export default {
  name: 'LoginBlock',
  components: { FormBlock, InputText, ButtonSquareFull },
  mounted () {
    let bounds = this.$refs.logoPosition.getBoundingClientRect()
    
    this.$emit('updateLogoPosition', { x: bounds.left, y: bounds.top + window.scrollY })
  },
  methods: {
    onSubmit () {
      this.$emit('submitForm')
    }
  }
}
</script>

<style scoped lang="scss">
  .LoginBlock {
    padding-top: 60px;
    position: relative;
  }
  
  .LoginBlock_logoPosition {
    height: 5px;
    width: 1px;
    position: absolute;
    top: 0;
    left: 50%;
  }
  
  .LoginBlock_title {
    color: var(--color-text-darker);
    font-size: var(--font-size-medium);
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .LoginBlock_input {
    // margin: 15px 0;
  }
  
  .LoginBlock_submit {
    margin-top: 40px;
  }
</style>
