<template>
  <div id="app">
    <transition :name="transition.name" :mode="transition.mode" :enter-active-class="transition.active">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transition: {
        name: 'fade',
        mode: 'out-in',
        active: ''
      }
    }
  },
  created() {
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
      
      next()
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400i,700');

:root {
  --color-text-main: #ffffff;
  --color-text-dark: #585858;
  
  --color-gradient-main: linear-gradient(to right, #8e2de2, #4a00e0);
  
  --color-grid-lines: #434749;
  --color-label: #ffffff;
  --color-background-light: #22292d;
  --color-background-medium: #2a2f33;
  --color-background-dark: #191f23;
  --color-background-darker: #0d0f10;
}
  
  
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  color: var(--color-text-main);
  font-size: 25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

.slideUp-enter-active,
.slideDown-leave-active {
  animation-duration: 350ms;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(.46,.9,.47,.99);
  animation-name: slide-up;
}
  
  .slideDown-leave-active {
    animation-timing-function: cubic-bezier(.46,.9,.47,.99);
  }
  
.slideUp-enter-active {
  z-index: 1000;
  top: 0;
  position: absolute;
  width: 100%;
}
  
.slideDown-leave-active {
  animation-direction: reverse;
}
  
@keyframes slide-up {
  from {
    transform: translate3d(0, 100vh, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  background: transparent;
  outline: none;
}
  
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
  
body {
  line-height: 1;
}
  
ol, ul {
  list-style: none;
}
  
blockquote, q {
  quotes: none;
}
  
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
  
table {
  border-collapse: collapse;
  border-spacing: 0;
}
  
input {
  width: auto;
  font-size: inherit;
  font-family: inherit;
  border: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}
</style>
