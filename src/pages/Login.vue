<template>
  <SectionGeneric class="Home" :pattern="true">
    <WrapperGeneric>
      Hi
    </WrapperGeneric>
  </SectionGeneric>
</template>

<script>
import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
  
export default {
  name: 'RecordDetails',
  components: { WrapperGeneric, SectionGeneric }, 
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .Home {
    min-height: 100vh;
  }
</style>
