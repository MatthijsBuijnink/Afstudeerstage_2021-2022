<template>
  <div :class="$style.leaseLengthWrapper">
    <strong>Kies je looptijd</strong>
    <ul>
      <li v-for="value in data" :key="value.id">
        <input
            @change="onLeaseLengthChange"
            v-model="selectedLeaseLength"
            type="radio"
            :id=value.id
            name="selected_lease_length"
            :value="value.months"
        >
        <label :for=value.id>{{value.months}} Maanden</label>
      </li>
    </ul>
  </div>
</template>

<script>


import axios from "axios";

export default{
    name:'LeaseLength',

  data() {
    return {
        data: {},
        selectedLeaseLength: Number
      }
    },

    beforeMount(){
      this.onLeaseLengthChange();

      this.getData();
    },

    methods: {
      onLeaseLengthChange :function() {
       var selectedLeaseLengthObject = Object.values(this.data).find( ({months}) => months === this.selectedLeaseLength);
        this.$root.$emit('change-lease-length', selectedLeaseLengthObject);
      },

      async getData(){
        axios
            .get('https://plm.dtcmedia.dev/api/trims/2/lease-lengths')
            .then(response => (this.data = response.data))
      }
    },

};
</script>

<style lang="scss" module>
  .leaseLengthWrapper{
    border-radius: 5px;
    margin-bottom:20px;
  }

  ul{
    list-style: none;
    padding:0;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  ul li{
    position: relative;
  }

  ul li input{
    width:20px;
    height:20px;
    top:50%;
    margin: -10px 0 0 10px;
    position: absolute;

  }

  ul li label{
    padding:20px 0 20px 40px;
    display: block;
    cursor: pointer;
  }

  input:checked + label  {
    background:#f3f3f3;
  }

</style>