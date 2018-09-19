<template>
  <div
    class="InputText"
    :class="[
      { 'InputText--focused' : isFocused },
      { 'InputText--hasValue' : hasValue }
    ]"
  >
    <label class="InputText_label">{{ label }}</label>
    <input
      class="InputText_input"
      type="text"
      :required="required"
      value=""
      @focus="() => this.$set(this, 'isFocused', true)"
      @blur="() => this.$set(this, 'isFocused', false)"
      @keyup="(e) => this.onKeyup(e)"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data () {
    return {
      value: '',
      hasValue: false,
      isFocused: false
    }
  },
  props: {
    required: { type: Boolean, default: false },
    label: { type: String, default: '' }
  },
  methods: {
    onKeyup (e) {
      this.$set(this, 'value', this.$refs.input.value)
      this.$set(this, 'hasValue', this.value.length > 0 ? true : false)
      
      this.$emit('changeSearch', this.value)
    }
  }
}
</script>

<style scoped>
  .InputText,
  .InputText_input {
    font-weight: 800;
  }
  
  .InputText {
    position: relative;
    z-index: 1;
  }
  
  .InputText_label {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 1;
    font-size: 18px;
    transform: translate3d(0, -50%, 0);
    color: var(--color-label);
    pointer-events: none;
    opacity: 0.6;
    
    transform-origin: left;
    transition: all 150ms ease;
  }
  
  .InputText--focused .InputText_label,
  .InputText--hasValue .InputText_label {
    opacity: 1;
    transform: translate3d(-10px, -45px, 0) scale(0.9);
  }
  
  .InputText--focused .InputText_input,
  .InputText--hasValue .InputText_input {
    background-color: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  }

  .InputText:hover .InputText_input {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  .InputText_input {
    width: 100%;
    padding: 16px 20px;
    font-size: 30px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--color-label);
    
    transition: all 150ms ease;
  }
</style>
