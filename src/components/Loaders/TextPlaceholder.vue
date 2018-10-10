<template>
  <div class="TextPlaceholder" :class="[{ 'TextPlaceholder--display': show }]">
    <div class="TextPlaceholder_graphic"></div>
    <div class="TextPlaceholder_transparent">{{ placeholder }}</div>
    <div class="TextPlaceholder_text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextPlaceholder',
  data () {
    return {
      show: false
    }
  },
  props: {
    display: { type: Boolean, default: false },
    placeholder: { type: String, default: '/' },
    delay: { type: Number, default: 0 }
  },
  watch: {
    display: {
      immediate: true,
      handler (value) {
        setTimeout(() => this.$set(this, 'show', value), this.delay)
      }
    }
  },
  mounted () {
    this.$set(this, 'show', this.display)
    setTimeout(() => this.$el.classList.add('TextPlaceholder--created'))
  }
}
</script>

<style scoped lang="scss">
  .TextPlaceholder {
    position: relative;
    font-size: inherit;
  }
  
  .TextPlaceholder_graphic {
    pointer-events: none;
    background: var(--color-gradient-main);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    
    animation: loading 800ms ease-in-out infinite alternate;
  }
  
  .TextPlaceholder_transparent {
    color: transparent;
    display: none;
  }
  
  .TextPlaceholder--display {
    
    .TextPlaceholder_graphic {
      display: block;
    }
    
    .TextPlaceholder_text {
      opacity: 0;
      display: none;
    }
    
    .TextPlaceholder_transparent {
      display: block;
    }
  }
  
  .TextPlaceholder_text {
    top: 0;
    opacity: 1;
    display: block;
    animation: appear 200ms linear;
  }
  
  .TextPlaceholder--leave {
    transform: scaleX(0);
  }
  
  @keyframes loading {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.8;
    }
  }
  
  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  
</style>
