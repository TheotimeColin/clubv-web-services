<template>
  <div class="TextPlaceholder" :class="[{ 'TextPlaceholder--display': display }]">/</div>
</template>

<script>
export default {
  name: 'TextPlaceholder',
  props: {
    display: { type: Boolean, default: false }
  },
  mounted () {
    setTimeout(() => this.$el.classList.add('TextPlaceholder--created'), 100)
  }
}
</script>

<style scoped>
  .TextPlaceholder {
    display: none;
    color: transparent;
    pointer-events: none;
    background: var(--color-gradient-main);
    
    transform: scaleX(1);
    transition: transform 200ms linear;
    animation: loading 800ms linear infinite alternate;
  }
  
  .TextPlaceholder--display {
    display: block;
  }
  
  .TextPlaceholder--leave {
    transform: scaleX(0);
  }
  
  @keyframes loading {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.7;
    }
  }
  
</style>
