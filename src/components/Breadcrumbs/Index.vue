<template>
  <router-link :to="link" class="Breadcrumbs">
    <IconGeneric name="arrowRightWhite" :width="15" :mirrorX="true"/>
    <div class="Breadcrumbs_item" v-for="item in items">{{ item }}</div>
  </router-link>
</template>

<script>
import IconGeneric from '@/components/IconGeneric'
  
export default {
  name: 'Breadcrumbs',
  components: { IconGeneric },
  props: {
    link: { type: String, required: true },
    items: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
  
  .Breadcrumbs {
    display: flex;
    align-items: center;
    padding: 20px 0;
    font-size: var(--font-size-main);
    font-weight: bold;
  }
  
  .Breadcrumbs_item {
    display: inline-block;
    margin-left: 15px;
  }
</style>
