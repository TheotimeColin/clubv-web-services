<template>
  <div class="RecordDetails">
    <WrapperGeneric>
      <Breadcrumbs link="/records" :items="[ $route.params.id ]"/>
      <div class="RecordDetails_page">
        
        <div class="RecordDetails_header">
          <div class="RecordDetails_general">
            <div class="RecordDetails_row" v-for="row in general">
              <b>{{ row.label }} :</b>
              <TextPlaceholder class="RecordDetails_cell" :display="row.loading">
                {{ row.value }}
              </TextPlaceholder>
            </div>
          </div>
          <div class="RecordDetails_pictureContainer">
            <div class="RecordDetails_picture" :style="{ backgroundImage: `url(${assets.person})` }"></div>
          </div>
        </div>
        
        <div class="RecordDetails_permits">
          <ButtonHorizontal v-for="row in permits">{{ row.label }}</ButtonHorizontal>
        </div>
      </div>
    </WrapperGeneric>
  </div>
</template>

<script>
import WrapperGeneric from '@/components/WrapperGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import Breadcrumbs from '@/components/Breadcrumbs'
import TextPlaceholder from '@/components/Loaders/TextPlaceholder'
import ButtonHorizontal from '@/components/Buttons/ButtonHorizontal'
  
import person from '@/assets/img/temp/person.png'
  
export default {
  name: 'RecordDetails',
  components: { WrapperGeneric, SectionGeneric, Breadcrumbs, TextPlaceholder, ButtonHorizontal },
  mounted () {
    
  }, 
  data () {
    return {
      assets: { person }, 
      general: [
        { label: 'Prénom', value: 'Text', loading: true },
        { label: 'Nom', value: 'Text', loading: false },
        { label: 'Immatriculation', value: 'Text', loading: false },
        { label: 'Téléphone', value: 'Text', loading: true },
        { label: 'Citoyenneté', value: 'Text', loading: false },
        { label: 'Adresse', value: 'Text', loading: true },
      ],
      permits: [
        { label: 'Permis de conduire' },
        { label: 'Permis hélicoptère' },
        { label: 'Permis port d\'armes' },
        { label: 'Permis port d\'armes lourdes' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .RecordDetails {
    display: flex;
    flex-direction: column;
    align-content: stretch;
    height: 100vh;
    overflow: hidden;
    background-color: var(--color-background-medium);
  }
  
  .RecordDetails_page {
    border: 1px solid var(--color-grid-lines);
    padding: 15px;
  }
  
  .RecordDetails_row {
    display: flex;
    margin: 5px 10px;
  }
  
  .RecordDetails_cell {
    flex-grow: 1;
    margin-left: 10px;
  }
  
  .RecordDetails_general {
    max-height: 150px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px 10px;
    background-color: var(--color-grid-lines);
  }
  
  .RecordDetails_header {
    display: flex;
    width: 100%;
  }
  
  .RecordDetails_pictureContainer {
    max-width: 150px;
    min-width: 100px;
    flex-shrink: 1;
    flex-grow: 1;
    margin-left: 15px;
    position: relative;
  }
  
  .RecordDetails_picture {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 120%;
    background-color: green;
    background-size: cover;
  }
  
  .RecordDetails_permits {
    display: flex;
    flex-wrap: wrap;
    margin: 10px -3px -3px;
    
    > * {
      flex-basis: calc(50% - 6px);
      margin: 3px;
    }
  }
</style>
