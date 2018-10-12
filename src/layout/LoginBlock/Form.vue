<template>
  <div>
    <InputText 
      v-for="input in fields"
      :label="input.label"
      :required="input.required"
      :type="input.type"
      :modifiers="[ 'small' ]"
      v-model="form[input.name]"
      :key="input.name"
    />
  </div>
</template>

<script>
import InputText from '@/components/InputGeneric/InputText'
  
export default {
  name: 'Form',
  components: { InputText },
  props: {
    fields: {
      type: Array,
      default: () => []
    }
  },
  created () {
    this.fields.forEach((field) => this.$set(this.form, field.name, ''))
  },
  data () {
    return {
      form: {}
    }
  },
  watch: {
    form: {
      deep: true,
      handler (value) {
        this.$emit('update', value)
      }
    }
  }
}
</script>