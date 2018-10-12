<template>
  <div>
    <InputText 
      v-for="(input, i) in fields"
      :label="input.label"
      :required="input.required"
      :type="input.type"
      :modifiers="[ 'small' ]"
      v-model="input.value"
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
  }
}
</script>