<template>
  <div class="ButtonHorizontal">
    <p><slot></slot></p>
    <IconGeneric class="ButtonHorizontal_icon" name="arrowRightWhite" :width="15" />
  </div>
</template>

<script>
import IconGeneric from '@/components/IconGeneric'
  
export default {
  name: 'ButtonHorizontal',
  components: { IconGeneric }
}
</script>

<style scoped>
  .ButtonHorizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-medium);
    font-weight: bold;
    border: 1px solid black;
    padding: 12px;
  }
  
  .ButtonHorizontal_icon {
    flex-shrink: 0;
  }
</style>
