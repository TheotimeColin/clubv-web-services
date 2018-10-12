<template>
  <div class="RegisterForm">
    <InputText 
      v-for="input in fields"
      :label="input.label"
      :required="input.required"
      :type="input.type"
      :modifiers="[ 'small' ]"
      v-model="form[input.name]"
    />
  </div>
</template>

<script>
import InputText from '@/components/InputGeneric/InputText'
  
export default {
  name: 'RegisterForm',
  components: { InputText },
  props: {
    fields: {
      default: () => [
        { name: 'phone', label: 'Téléphone', required: true, type: 'text', value: '' },
        { name: 'firstName', label: 'Prénom', required: true, type: 'text', value: '' },
        { name: 'lastName', label: 'Nom', required: true, type: 'text', value: '' },
        { name: 'password', label: 'Mot de passe', required: true, type: 'password', value: '' }
      ]
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

<style>

</style>