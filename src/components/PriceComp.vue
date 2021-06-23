<template>
  <div class="currency-block">
    <input type="number" class="input input_currency" v-model="value.sum">
  </div>
</template>

<script>
export default {
  name: "PriceComp",
  props: {
    value: {
      type: Object,
      default: {
        sum: '',
        currency: 'eur'
      }
    }
  },
}
</script>v