<template>
  <div class="people-counter-wrapper" @click="openCounter" v-click-outside="hideCounter">
    <div class="input people-counter-input">{{total}}</div>
    <div class="people-counter" v-show="isOpened">
      <div class="block">You can select  up to 8 travelers in total</div>
      <div class="block block_space_xl">
        <div class="block block_space_x people-counter__line" v-for="(item, index) of options">
          <div class="people-counter__title">
            {{item.name}}
            <div class="people-counter__subtitle">
              Maximum: 8
            </div>
          </div>
          <div class="people-counter__counter">
            <div class="people-counter__action" @click="minusCounter(index)">-</div>
            <div class="people-counter__number">{{item.counter}}</div>
            <div class="people-counter__action people-counter__action_plus" @click="plusCounter(index)">+</div>
          </div>
        </div>
      </div>
      <button @click="hideCounter" class="btn btn_primary">
        Apply
      </button>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "PeopleCounter",
  data: ()=>({
    isOpened: false,
    maxTotal: 8,
    total: 0,
    isMax: false,
    isMin: true,
    options: [
      {
        name: 'Adult (age 18-64)',
        counter: 0
      },
      {
        name: 'Senior (age 65-100)',
        counter: 0
      },
      {
        name: 'Youth (age 13-17)',
        counter: 0
      },
      {
        name: 'child (age 5-12)',
        counter: 0
      },
    ],
  }),
  methods: {
    openCounter() {
      this.isOpened = true
    },
    hideCounter(e) {
      e.stopPropagation()
      this.isOpened = false
    },
    plusCounter(optionIndex) {
      if (this.total < this.maxTotal) {
        this.total++
        this.options[optionIndex].counter++
      }
    },
    minusCounter(optionIndex) {
      if (this.total > 0 && this.options[optionIndex].counter > 0) {
        this.total--
        this.options[optionIndex].counter--
      }
    },
  },
  watch: {
    total() {
      if (this.total === this.maxTotal) {
        this.isMax = true
      } else {
        this.isMax = false
      }
      if (this.total === 0) {
        this.isMin = true
      } else {
        this.isMin = false
      }
    }
  },
  directives: {
    ClickOutside
  },
}
</script>