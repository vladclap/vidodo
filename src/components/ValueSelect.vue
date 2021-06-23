<template>
  <div class="unit-input">
    <input type="number" class="input unit-input__input" v-model="inputValue">
    <select-comp @selected="updateValue" v-model="select" class="unit-input__select" :key="update"></select-comp>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";

export default {
  name: "ValueSelect",
  props: {
    value: {
      type: Object,
      default: ()=>{ return { type: 'time', value: 0 } }
    }
  },
  data: ()=>({
    update: 0,
    inputValue: 0,
    select: {
      options: [
        { name: 'minutes', value: 'm', selected: true },
        { name: 'hours', value: 'h' },
      ]
    }
  }),
  watch: {
    inputValue() {
     this.updateValue()
    }
  },
  components: { SelectComp },
  mounted() {
    this.inputValue = this.value.value
    if (this.value.type === 'radius') {
      this.select.options = [
        { name: 'm', value: 'm', selected: true },
        { name: 'km', value: 'km' },
      ]
    }
    this.update++
  },
  methods: {
    updateValue() {
      let val = this.inputValue
      if (this.value.type === 'radius') {
        if (this.select.selectedNames[0] == 'm') {
          val = this.inputValue
        } else {
          val = this.inputValue * 1000
        }
      } else {
        val = this.inputValue
      }
      this.value.value = val.toString()
      this.$emit('changed', this.value.value)
    },
    selectedUnit(i) {
      console.log(i)
    }
  }
}
</script>

<style scoped>

</style>