<template>
  <div class="LoadOverlay">
  </div>
</template>

<script>
export default {
  name: 'LoadOverlay',
  props: {},
  methods: {}
}
</script>

<style scoped>
  .LoadOverlay {
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
  }
</style>
