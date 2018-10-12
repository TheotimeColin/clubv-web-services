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
        @switch-type="(v) => onSwitchType(v)"
        @update-logo-position="(coords) => onUpdateLogoPosition(coords)"
        @submit-form="() => onSubmit()"
        @update-values="(v) => onUpdateValues(v)"
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
      logoCoords: { x: 0, y: 0 },
      submitted: false,
      form: {
        type: '',
        login: {},
        register: {}
      }
    }
  },
  computed: {
    logoAnimationCoords () {
      return {
        x: this.submitted ? (window.innerWidth / 2) : this.logoCoords.x,
        y: this.submitted ? (window.innerHeight / 2) : this.logoCoords.y
      } 
    }
  },
  methods: {
    onUpdateLogoPosition (coords) {
      this.$set(this, 'logoCoords', coords)
    },
    onSubmit () {
      this.$set(this, 'submitted', true)
      
      if (this.form.type === 'register') {
        this.$store.dispatch('registerUser', this.form.register).then((res) => {
          setTimeout(() => {
            if (res.data.status === 0) {
              this.$set(this, 'submitted', false)
            } else {
              console.log('All good') 
            }
          }, 1500)
        })
      }
    },
    onSwitchType (value) {
      this.form.type = value
    },
    onUpdateValues (value) {
      this.form = {
        ...this.form,
        ...value
      }
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
    margin: -50px 0 0 -50px;
    transition: all 1s ease;
  }
  
  .Login_block {
    transition: all 800ms ease;
  }
  
  .Login--submitted {
    
    .Login_logo {
      transition: all 1s ease;
    }
    
    .Login_block {
      transform: translateY(100px);
      opacity: 0;
    }
  }
</style>
