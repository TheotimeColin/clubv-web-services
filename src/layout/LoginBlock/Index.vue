<template>
  <FormBlock class="LoginBlock">
    <div class="LoginBlock_logoPosition" ref="logoPosition"></div>
    
    <p class="LoginBlock_title">Système Central de<br>Gestion des Données</p>
    
    <div class="LoginBlock_form">
      <transition name="fade" mode="out-in">
        <LoginForm class="LoginBlock_transition" v-if="formType === 'login'" />
        <RegisterForm class="LoginBlock_transition" v-else />
      </transition>
      
      <p class="text-center">
        <button class="LoginBlock_register" type="button" @click="() => this.onFormTypeSwitch()">
          {{ formType === 'login' ? `S'enregistrer` : `Se connecter` }}
        </button>
      </p>
    </div>

    <ButtonSquareFull class="LoginBlock_submit" @click="() => onSubmit()">Se connecter</ButtonSquareFull>
  </FormBlock>
</template>

<script>
import FormBlock from '@/components/FormBlock'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ButtonSquareFull from '@/components/Buttons/ButtonSquareFull'
  
export default {
  name: 'LoginBlock',
  components: { FormBlock, ButtonSquareFull, LoginForm, RegisterForm },
  data () {
    return {
      formType: 'login'  
    }
  },
  mounted () {
    this.updateLogo()
  },
  methods: {
    updateLogo () {
      let bounds = this.$refs.logoPosition.getBoundingClientRect()
      this.$emit('updateLogoPosition', { x: bounds.left, y: bounds.top + window.scrollY })
    },
    onSubmit () {
      this.$emit('submitForm')
    },
    onFormTypeSwitch () {
      this.formType = this.formType === 'login' ? 'register' : 'login'
      setTimeout(() => this.updateLogo(), 410)
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
  
  .LoginBlock_submit {
    margin-top: 40px;
  }
  
  .LoginBlock_register {
    margin-top: 10px;
    font-size: var(--font-size-small);
    text-decoration: underline;
  }
  
  .LoginBlock_form {
    padding: 0 10%;
    overflow: hidden;
  }
  
  .LoginBlock_transition {
    transition: all 400ms ease;
    
    &.fade-leave-active {
      transform: translateX(-50%);
      opacity: 0;
    }
    
    &.fade-enter {
      transform: translateX(50%);
      opacity: 0;
    }
    
    &.fade-enter-to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
</style>
