<template>
  <div :class="$style.plm">
      <h1>Merk Model Private Lease</h1>
      <div :class="$style.wrapper">
          <Step />
          <Sidebar
              :lease_length_object="lease_length_object"
          />
      </div>
  </div>
</template>

<script>

    import Step from './components/Step.vue';
    import Sidebar from './components/Sidebar.vue';

    export default {
      name: 'App',

      mounted(){
        this.$root.$on('change-lease-length' , (data) => {
         this.lease_length_object= data;
        })
      },

      components: {
        Step,
        Sidebar
      },

      data(){
        return {
          lease_length_object: null
        }
      },
    }
</script>

<style lang="scss" module>
  h1{
   max-width: 1400px;
    width:100%;
  }
  .plm {
    background:#f3f3f3;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .wrapper{
    display: flex;
    flex-direction: row;
    width:100%;
    max-width:1400px;
  }
</style>
