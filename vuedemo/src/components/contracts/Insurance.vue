<template>
  <div>
    <strong>Verzekering</strong>

    <ul>
      <li v-for="value in 4" :key="value">
        <input type="radio" id="one" value=index v-model="picked">
        <label for="one">{{value}}</label>
      </li>
    </ul>

  </div>
</template>

<script>

export default{
  name:'Insurance',

}

</script>