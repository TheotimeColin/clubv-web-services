<template>
  <div
    class="InputText"
    :class="[
      { 'InputText--focused' : isFocused },
      { 'InputText--hasValue' : hasValue },
      ...classes
    ]"
  >
    <InputLabel :active="isActive" :modifiers="modifiers">{{ label }}</InputLabel>
    <input
      class="InputText_input"
      :type="type"
      :required="required"
      @focus="() => this.$set(this, 'isFocused', true)"
      @blur="() => this.$set(this, 'isFocused', false)"
      @input="(e) => this.onInput(e)"
      v-bind:value="value"
      ref="input"
    >
  </div>
</template>

<script>
import InputLabel from './InputLabel'
  
import ClassesMixin from '@/mixins/Classes'
  
export default {
  name: 'InputText',
  components: { InputLabel },
  mixins: [ ClassesMixin ],
  data () {
    return {
      hasValue: false,
      isFocused: false
    }
  },
  props: {
    value: {},
    type: { type: String, default: 'text' },
    modifiers: { type: Array, default: () => [] },
    required: { type: Boolean, default: false },
    label: { type: String, default: '' }
  },
  computed: {
    isActive () {
      return this.hasValue || this.isFocused
    }
  },
  watch: {
    value () {
      this.$set(this, 'hasValue', this.value.length > 0 ? true : false)
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .InputText,
  .InputText_input {
    font-weight: 800;
  }
  
  .InputText {
    position: relative;
    z-index: 1;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  
  .InputText_input {
    width: 100%;
    padding: 16px 20px;
    font-size: var(--font-size-big);
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--color-label);
    
    transition: all 150ms ease;
  }
  
  .InputText--focused,
  .InputText--hasValue {
    
    .InputText_input {
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
  
  .InputText--small {
    margin-top: 15px;
    
    .InputText_input {
      font-size: var(--font-size-medium);
      color: var(--color-text-darker);
      border: 1px solid var(--color-grid-lines);
      border-bottom: 1px solid var(--color-grid-lines);
      background-color: transparent;
      padding: 12px 8px;
      border-radius: 4px;
      text-align: center;
      text-transform: none;
    }
    
    &:hover {
      background-color: transparent;
    }
    
    &.InputText--focused,
    &.InputText--hasValue {
      
      .InputText_input {
        background-color: transparent;
        border-bottom: 1px solid var(--color-grid-lines);
      }
    }
  }
  
</style>
