<template>
  <button type="button" class="LoadMore" @click="() => onClick()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'LoadMore',
  props: {},
  methods: {
    onClick () {
      this.$emit('load-more')
    }
  }
}
</script>

<style scoped>
  .LoadMore {
    color: var(--color-text-dark);
    font-size: 20px;
    text-align: center;
    display: block;
    width: 100%;
    font-weight: bold;
    padding: 40px 10px;
    position: relative;
    background-color: var(--color-background-darker)
  }
</style>
