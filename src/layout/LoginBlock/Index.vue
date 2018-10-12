<template>
  <FormBlock class="LoginBlock">
    <LogoGeneric
      class="LoginBlock_logoPosition"
      :source="assets.townLogo"
      :width="100"
      ref="logoPosition"
      v-show="displayLogo"
    />
    
    <p class="LoginBlock_title">Système Central de<br>Gestion des Données</p>
    
    <form @submit.prevent="() => onSubmit()" action="#">
      <div class="LoginBlock_form">
        <transition name="fade" mode="out-in">
          <Form
            class="LoginBlock_transition"
            :fields="loginForm"
            v-if="formType === 'login'"
            key="login"
          />

          <Form
            class="LoginBlock_transition"
            :fields="registerForm"
            key="register"
            v-else
          />
        </transition>

        <p class="text-center">
          <button class="LoginBlock_register" type="button" @click="() => this.onFormTypeSwitch()">
            {{ formType === 'login' ? `S'enregistrer` : `Se connecter` }}
          </button>
        </p>
      </div>

      <ButtonSquareFull class="LoginBlock_submit" type="submit">
        {{ formType === 'register' ? `S'enregistrer` : `Se connecter` }}
      </ButtonSquareFull>
    </form>
  </FormBlock>
</template>

<script>
import FormBlock from '@/components/FormBlock'
import Form from './Form'
import ButtonSquareFull from '@/components/Buttons/ButtonSquareFull'
import LogoGeneric from '@/components/LogoGeneric'
  
import townLogo from '@/assets/img/icons/lspd.png'
  
export default {
  name: 'LoginBlock',
  components: { FormBlock, LogoGeneric, ButtonSquareFull, Form },
  props: {
    displayLogo: { type: Boolean, default: true },
    loginForm: { type: Array, required: true },
    registerForm: { type: Array, required: true }
  },
  data () {
    return {
      assets: { townLogo },
      formType: 'login'
    }
  },
  watch: {
    formType: {
      immediate: true,
      handler (value) {
        this.$emit('switch-type', value)
      }
    }
  },
  methods: {
    updateLogo () {
      let bounds = this.$refs.logoPosition.$el.getBoundingClientRect()
      this.$emit('update-logo-position', { x: bounds.left, y: bounds.top + window.scrollY })
    },
    onSubmit () {
      this.updateLogo()
      setTimeout(() => this.$emit('submit-form'))
    },
    onFormTypeSwitch () {
      this.formType = this.formType === 'login' ? 'register' : 'login'
    },
  }
}
</script>

<style scoped lang="scss">
  .LoginBlock {
    padding-top: 60px;
    position: relative;
  }
  
  .LoginBlock_logoPosition {
    position: absolute;
    top: 0;
    left: 50%;
    margin: -50px 0 0 -50px;
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
    cursor: pointer;
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
