<template>
  <SectionGeneric class="Login" :class="[ { 'Login--submitted': submitted } ]" :pattern="true">
    <WrapperGeneric>
      <LogoGeneric
        class="Login_logo"
        :source="assets.townLogo"
        :width="100"
        :style="{ transform: `translate3d(${logoCoords.x}px, ${logoCoords.y}px, 0)` }"
      />
      
      <LoginBlock
        class="Login_block"
        @updateLogoPosition="(coords) => onUpdateLogoPosition(coords)"
        @submitForm="() => onSubmit()"
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
  name: 'RecordDetails',
  components: { WrapperGeneric, SectionGeneric, LoginBlock, LogoGeneric }, 
  data () {
    return {
      assets: { townLogo },
      logoCoords: { x: 0, y: 0 },
      submitted: false
    }
  },
  methods: {
    onUpdateLogoPosition(coords) {
      this.$set(this, 'logoCoords', coords)
    },
    onSubmit() {
      console.log('lel')
      this.$set(this, 'submitted', true)
      
      this.$set(this, 'logoCoords', {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      })
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
