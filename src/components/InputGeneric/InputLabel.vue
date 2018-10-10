<template>
  <div class="InputLabel" :class="[ { 'InputLabel--active': active }, ...classes ]">
    <slot></slot>
  </div>
</template>

<script>
import ClassesMixin from '@/mixins/Classes'
  
export default {
  name: 'InputLabel',
  mixins: [ ClassesMixin ],
  props: {
    modifiers: {
      type: Array,
      default: () => []
    },
    active: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .InputLabel {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 1;
    font-size: var(--font-size-medium);
    transform: translate3d(0, -50%, 0);
    color: var(--color-label);
    pointer-events: none;
    opacity: 0.6;
    
    transform-origin: left;
    transition: all 150ms ease;
  }
  
  .InputLabel--active {
    opacity: 1;
    transform: translate3d(-10px, -40px, 0) scale(0.9);
  }
  
  .InputLabel--small {
    color: var(--color-text-dark);
    display: inline-block;
    padding: 0 8px;
    left: 50%;
    border-radius: 15px;
    text-align: center;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    background-color: rgba(255, 255, 255, 0);
    
    &.InputLabel--active {
      opacity: 1;
      transform: translate3d(-50%, -37px, 0) scale(0.8);
      background-color: rgba(255, 255, 255, 1);
    }
  }
</style>