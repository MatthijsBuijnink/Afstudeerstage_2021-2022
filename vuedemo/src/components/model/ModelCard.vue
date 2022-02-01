<template>
  <div>
    <img :class="$style.modelCardImage" src="../../assets/car.png" alt="Car" width="200px"/>
  </div>
</template>

<script>

  export default {
    name: 'ModelCard',
  };

</script>

<style lang="scss" module>
  .modelCardImage{
    display: block;
    margin:10px auto;
  }

</style>