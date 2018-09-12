<template>
  <div class="Logo" v-if="source">
    <img :src="source" :width="width" />
  </div>
</template>

<script>
export default {
  name: 'LogoGeneric',
  props: {
    source: { default: false },
    width: { type: Number }
  }
}
</script>

<style scoped>
  .Logo {
  }
</style>
