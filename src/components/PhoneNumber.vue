<template>
  <div class="option-group option-group_phone">
    <select-comp v-model="numberStart" class="select-wrapper_number-format"></select-comp>
    <input class="input input_phone elem_w_555" type="text" v-model="number">
  </div>
</template>

<script>
import SelectComp from '@/components/SelectComp'

export default {
  name: "PhoneNumber",
  props: [ 'value' ],
  data: () => ({
    numberStart: {
      options: [
        { name: '+34', value: 35, selected: true },
        { name: '+33', value: 34 },
      ],
      selected: []
    },
    number: null
  }),
  watch: {
    number: function (val) {
      this.value[1] = +val
    },
    'numberStart.selected': function (val) {
      if (val.length !== 0) {
        this.value[0] = this.numberStart.options[val].value
      }
    }
  },
  components: {
    SelectComp
  },
  methods: {
    selectPhoneStart(num) {
      for (let i in this.numberStart.options) {
        if (this.numberStart.options[i].value == num) {
          this.numberStart.options[i].selected = true
          this.numberStart.selected = +i
        }
      }
    }
  },
  created() {
    this.selectPhoneStart(this.value[0])
    this.number = this.value[1]
  }
}
</script>

<style scoped>

</style>