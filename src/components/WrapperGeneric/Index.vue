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
    width: 100%;
    max-width: 1900px;
    margin: 0 20px;
  }
</style>
