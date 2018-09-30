<template>
  <img class="IconGeneric" :src="src" :style="{ width: `${size.x}px`, height: `${size.y}px` }">
</template>

<script>
import arrowRightWhite from '@/assets/img/icons/arrow-right-white.png'
import logoLSPD from '@/assets/img/icons/lspd.png'

export default {
  name: 'IconGeneric',
  props: {
    width: { type: Number },
    height: { type: Number },
    name: { type: String, required: true }
  },
  computed: {
    size () {
      return {
        x: this.width ? this.width : 'auto',
        y: this.height ? this.height : 'auto'
      }
    },
    src () {
      return this[this.name]
    }
  },
  data () {
    return { arrowRightWhite, logoLSPD }
  }
}
</script>

<style scoped>
  .IconGeneric {
    display: inline-block;
    transition: all 200ms ease;
  }
</style>
