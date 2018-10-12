<template>
  <SectionGeneric class="Login" :class="[ { 'Login--submitted': submitted } ]" :pattern="true">
    <WrapperGeneric>
      <LogoGeneric
        class="Login_logo"
        :source="assets.townLogo"
        :width="100"
        :style="{ transform: `translate3d(${logoAnimationCoords.x}px, ${logoAnimationCoords.y}px, 0)` }"
      />
      
      <LoginBlock
        class="Login_block"
        :display-logo="!submitted"
        :login-form="form.login"
        :register-form="form.register"
        @switch-type="(v) => onSwitchType(v)"
        @update-logo-position="(coords) => onUpdateLogoPosition(coords)"
        @submit-form="() => onSubmit()"
      />
    </WrapperGeneric>
  </SectionGeneric>
</template>

<script>
import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import LoginBlock from '@/layout/LoginBlock'
import LogoGeneric from '@/components/LogoGeneric'
  
import townLogo from '@/assets/img/icons/lspd.png'
  
export default {
  name: 'Login',
  components: { WrapperGeneric, SectionGeneric, LoginBlock, LogoGeneric }, 
  data () {
    return {
      assets: { townLogo },
      logo: {
        coords: { x: 0, y: 0 }
      },
      submitted: false,
      form: {
        type: '',
        login: [
          { name: 'phone', label: 'Téléphone', required: true, type: 'text', value: '' },
          { name: 'password', label: 'Mot de passe', required: true, type: 'password', value: '' }
        ],
        register: [
          { name: 'phone', label: 'Téléphone', required: true, type: 'text', value: '' },
          { name: 'firstName', label: 'Prénom', required: true, type: 'text', value: '' },
          { name: 'lastName', label: 'Nom', required: true, type: 'text', value: '' },
          { name: 'password', label: 'Mot de passe', required: true, type: 'password', value: '' }
        ]
      }
    }
  },
  computed: {
    logoAnimationCoords () {
      return {
        x: this.submitted ? (window.innerWidth / 2) - 50 : this.logo.coords.x,
        y: this.submitted ? (window.innerHeight / 2) - 50 : this.logo.coords.y
      }
    }
  },
  methods: {
    onUpdateLogoPosition (coords) {
      this.$set(this.logo, 'coords', coords)
    },
    async onSubmit () {
      this.$set(this, 'submitted', true)
      
      if (this.form.type === 'register') {
        let response = await this.$store.dispatch('registerUser', this.getForm())
        setTimeout(() => {
          if (response.data.status === 0) {
            this.$set(this, 'submitted', false)
          } else {
            console.log('All good') 
          }
        }, 1500)
      }
    },
    onSwitchType (value) {
      this.form.type = value
    },
    getForm () {
      let parsedForm = {}
      
      this.form[this.form.type].forEach(field => {
        parsedForm[field.name] = field.value
      })
      
      return parsedForm
    }
  }
}
</script>

<style scoped lang="scss">
  .Login {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .Login_logo {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    opacity: 0;
  }
  
  .Login_block {
    transition: all 800ms ease;
  }
  
  .Login--submitted {
    
    .Login_logo {
      opacity: 1;
      transition: transform 1s ease;
    }
    
    .Login_block {
      transform: translateY(100px);
      opacity: 0;
    }
  }
</style>
