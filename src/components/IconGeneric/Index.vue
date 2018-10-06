<template>
  <img
    class="IconGeneric"
    :src="src"
    :style="style"
  >
</template>

<script>
import arrowRightWhite from '@/assets/img/icons/arrow-right-white.png'
import logoLSPD from '@/assets/img/icons/lspd.png'

export default {
  name: 'IconGeneric',
  props: {
    width: { type: Number },
    height: { type: Number },
    name: { type: String, required: true },
    mirrorX: { type: Boolean, default: false },
    mirrorY: { type: Boolean, default: false }
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
    },
    style () {
      return {
        width: `${this.size.x}px`,
        height: `${this.size.y}px`,
        transform: `scale3d(${ this.mirrorX ? -1 : 1 }, ${ this.mirrorY ? -1 : 1 }, 1)`
      }
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
