<template>
  <div
    class="Wrapper"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script>
  
export default {
  name: 'WrapperGeneric',
  props: {
    modifiers: { type: Array, default: () => [] },
  },
  computed: {
    classes () {
      return this.modifiers.map(modifier => `Wrapper--${modifier}`)
    }
  }
}
</script>

<style scoped>
  .Wrapper {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
