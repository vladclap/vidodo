<template>
  <div class="block block_space_xxl">
    <div class="block" v-if="title">
      <b>{{title}}</b>
    </div>
    <div class="row elem_w_750">
      <label class="option check col" v-for="(item, index) of value.options">
        <input class="check__input" type="checkbox" v-model="item.selected" @input="check(index)">
        <span class="check__box"></span>
        {{item.name}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxGroup",
  props: ['value', 'title'],
  methods: {
    check(index) {
      this.updateOptions()
    },
    updateOptions() {
      setTimeout(()=>{
        if (!this.value.selected) {
          this.value.selected = []
        }
        for (let optionIndex in this.value.options) {
          console.log()
          if (typeof this.value.options[optionIndex].selected === "undefined") {
            this.value.options[optionIndex].selected = false
          } else if (this.value.options[optionIndex].selected === true) {
            if (this.value.selected.indexOf(+optionIndex) == -1) {
              this.value.selected.push(+optionIndex)
            }
          } else if (this.value.options[optionIndex].selected === false) {
            const index = this.value.selected.indexOf(+optionIndex)
            if (index > -1) {
              this.value.selected.splice(index, 1)
            }
          }
        }
      },0)
    }
  },
  created() {
    this.updateOptions()
  }
}
</script>