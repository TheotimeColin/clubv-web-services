<template>
  <button class="ButtonSquareFull" type="button" @click="() => onClick()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonSquareFull',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .ButtonSquareFull {
    display: block;
    width: 100%;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: var(--font-size-medium);
    color: var(--color-background-white);
    background: var(--color-gradient-main);
  }
</style>