<template>
  <div class="block">
    <div class="block">
      <label class="option check" @mousedown="clickSelectAll">
        <input class="check__input" type="checkbox" v-model="selectAll">
        <span class="check__box"></span>
        Select all
      </label>
    </div>
    <div class="block">
      <div :class="{ active: item.value, 'text-toggl': true }" @click="toggleState(index)" v-for="(item, index) of days">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeekComp",
  props: ['values'],
  data: ()=>({
    selectAll: false,
    days: [
      { name: 'Sun', value: false },
      { name: 'Mon', value: false },
      { name: 'Tue', value: false },
      { name: 'Wed', value: false },
      { name: 'Thu', value: false },
      { name: 'Fri', value: false },
      { name: 'Sat', value: false },
    ],
  }),
  methods: {
    isAllSelected() {
      for (let i of this.days) {
        if (!i.value) {
          return false
        }
      }
      return true
    },
    toggleState(index) {
      if (this.days[index].value) {
        this.$set(this.days[index], 'value', false)
      } else {
        this.$set(this.days[index], 'value', true)
      }
      this.selectAll = this.isAllSelected()
    },
    clickSelectAll() {
      if (this.isAllSelected()) {
        for (let i in this.days) {
          this.days[i].value = false
        }
      } else {
        for (let i in this.days) {
          this.days[i].value = true
        }
      }
    },
  },
  mounted() {
  }
}
</script>