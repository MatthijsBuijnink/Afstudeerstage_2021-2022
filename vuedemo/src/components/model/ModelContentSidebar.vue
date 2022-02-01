<template>
  <div :class="$style.modelContentSidebarWrapper" >

    <div :class="$style.section">
      <strong>Merk Model</strong>
      <br/>
      <span :class="$style.trim"><span>Uitvoering</span><span>&#8364; {{ price }}</span></span>
    </div>

    <div v-if="lease_length_object" :class="[$style.contract, $style.section]">
        <strong>Contract</strong>
        <br/>
        <span>Looptijd {{lease_length_object.months}} maanden</span>
    </div>

    <div :class="$style.section">
      <strong >Maandbedrag:</strong> &#8364;<span v-if="lease_length_object">{{parseInt(price) + parseInt(lease_length_object.price_extra)}}</span> <span v-else>{{price}}</span>
    </div>
  </div>
</template>


<script>

export default {
  name:'ModelContentSidebar',

  props:{
    lease_length_object:Object
  },

  data(){
    return{
      price:229
    }
  }
}

</script>

<style lang="scss" module>
  .modelContentSidebarWrapper{
    display: flex;
    flex-direction: column;
  }

  .section{
    padding:10px;
    margin:0 10px 0 0;
    border-radius: 5px;
  }

  .section:hover{
    background:#f3f3f3;
    cursor: pointer;
  }

</style>