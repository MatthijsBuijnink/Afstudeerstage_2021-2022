<template>
  <section :class="$style.wrapper">
    <div :class="$style.step">
      <div :class="$style.content">
        <div>
          <lease-length />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LeaseLength from '../contracts/LeaseLength.vue';

  export default {
    name: 'Contract',

    props:{
      lease_length:Number
    },

    components:{
      LeaseLength
    }
  };

</script>

<style lang="scss" module>
.wrapper{
  background: #ffff;
  padding:60px;
  border-radius: 5px;
  margin-bottom: 20px;
}

</style>