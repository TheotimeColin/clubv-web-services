<template>
  <div class="RecordDetails">
    <router-link to='/records'>Back</router-link>
    lorem ipsum lorem ipsum
  </div>
</template>

<script>
import TestService from '@/services/TestService'

import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'

export default {
  name: 'RecordDetails',
  components: { WrapperGeneric, SectionGeneric },
  mounted () {
    console.log(this.$route.params.id)
  }, 
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
  .RecordDetails {
    display: flex;
    flex-direction: column;
    align-content: stretch;
    height: 100vh;
    overflow: hidden;
    background-color: var(--color-background-medium);
  }
</style>
