<template>
  <div id="app">
    <HeaderMain
      @submit-search="(v) => this.onSubmitSearch(v)"
      @change-search="(v) => this.onChangeSearch(v)"
      :class="headerClasses"
    />
    
    <div class="App_container">
      <transition
        :name="transition.name"
        :mode="transition.mode"
        :enter-active-class="transition.active"
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderMain from '@/layout/HeaderMain'
  
export default {
  name: 'App',
  components: { HeaderMain },
  data() {
    return {
      headerModifiers: [],
      transition: {
        name: 'fade',
        mode: 'out-in',
        active: ''
      }
    }
  },
  computed: {
    headerClasses () {
      return this.headerModifiers.map((modifier) => `SectionGeneric--header-${modifier}`)
    }
  },
  created() {
    this.$set(this, 'headerModifiers', this.$route.meta.headerModifiers)
    
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName
      
      if (to.meta.transitionName === 'slideUp') {
        this.$set(this, 'transition', {
          name: transitionName,
          mode: 'in-out',
          active: 'slideUp-enter-active'
        })
      }
      
      if (from.meta.transitionName === 'slideUp') {
        this.$set(this, 'transition', {
          name: 'slideDown',
          mode: 'in-out',
          active: null
        })
      }
      
      this.$set(this, 'headerModifiers', to.meta.headerModifiers)
      
      next()
    })
  }
}
</script>

<style lang="scss">
@import 'main.css';
  
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  color: var(--color-text-main);
  font-size: var(--font-size-main);
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  display: flex;
  flex-direction: column;
  align-content: stretch;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-background-medium);
}

.App_container {
  position: relative;
  overflow: hidden;
  height: 100%;
}
  
.slideUp-enter-active,
.slideDown-leave {
  animation-duration: 350ms;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(.46,.9,.47,.99);
  animation-name: slide-up;
}
  
.slideDown-leave-active {
  animation-timing-function: cubic-bezier(.46,.9,.47,.99);
}
  
.slideUp-enter-active,
.slideDown-leave-active {
  z-index: 1000;
  top: 0;
  position: absolute;
  width: 100%;
}
  
.slideDown-leave-active {
  animation-direction: reverse;
}
  
.slideUp-leave-active,
.slideDown-leave-active {
  position: absolute;
  top: -9999px;
}
  
@keyframes slide-up {
  from {
    transform: translate3d(100vh, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
