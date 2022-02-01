<template>
  <section :class="$style.wrapper">
    <div :class="[$style.step, $style.contentArea]">
      <div :class="$style.content">
        <contract/>
      </div>
    </div>
  </section>
</template>

<script>

import Contract from './steps/Contract.vue'

export default {
  name: 'Step',

  components:{
    Contract
  }
};
</script>

<style lang="scss" module>
 .wrapper{
   width: 100%;
   flex-grow: 1;
   display: flex;
   flex-direction: column;
 }

 .step{

 }

 .contentArea{

 }

 .content{

 }
</style>
