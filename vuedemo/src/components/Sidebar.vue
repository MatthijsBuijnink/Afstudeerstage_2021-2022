<template>
  <div :class="$style.sidebar">
    <strong>Overzicht</strong>
    <model-card />

    <model-content-sidebar :lease_length_object="lease_length_object" />
  </div>
</template>

<script>
import ModelCard from './model/ModelCard.vue';
import ModelContentSidebar from './model/ModelContentSidebar.vue';

  export default {
    name: 'Sidebar',

    props:{
      lease_length_object:Object
    },

    components: {
      ModelCard,
      ModelContentSidebar,
    },

  }
</script>

<style lang="scss" module>
  .sidebar {
    background: #ffffff;
    padding: 15px;
    width: auto;
    margin-left:50px;
    border-radius: 5px;
    margin-bottom:100px;

    @media screen and (min-width: 1024px) {
      padding: 20px;
      width: 350px;
    }
  }
</style>
