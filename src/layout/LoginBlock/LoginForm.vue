<template>
  <div class="LoginForm">
    <InputText label="Identifiant" :required="true" :modifiers="[ 'small' ]" />
    <InputText label="Mot de passe" :required="true" :modifiers="[ 'small' ]" type="password" />
  </div>
</template>

<script>
import InputText from '@/components/InputGeneric/InputText'
  
export default {
  name: 'LoginForm',
  components: { InputText },
}
</script>

<style>

</style>