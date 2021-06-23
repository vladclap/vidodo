<template>
  <label class="option check">
    <input class="check__input" type="checkbox" v-model="value">
    <span class="check__box"></span>
    {{text}}
  </label>
</template>

<script>
export default {
  name: "CheckboxComp",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'безымянный чекбокс'
    },
  }
}
</script>

<style scoped>

</style>