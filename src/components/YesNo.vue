<template>
  <div class="block">
    <div class="block block_space_xl yes-no-list elem_w_750" v-if="type === 'default'">
      <div class="yes-no-list__item">
        <div class="yes-no-list__title"><b v-if="title">{{title}}</b></div>
        <div class="yes-no-list__controls">
          <b class="yes-no-list__el">Yes</b>
          <b class="yes-no-list__el">No</b>
        </div>
      </div>
      <div class="yes-no-list__item" v-for="(item, index) of value">
        <div class="yes-no-list__title">{{item.name}}</div>
        <div class="yes-no-list__controls">
          <label class="yes-no-list__el check check_single">
            <input class="check__input" v-model="item.value" type="radio" :name="'r'+index" :value="true">
            <span class="check__box check__box_circle"></span>
          </label>
          <label class="yes-no-list__el check check_single">
            <input class="check__input" v-model="item.value" type="radio" :name="'r'+index" :value="false">
            <span class="check__box check__box_circle"></span>
          </label>
        </div>
      </div>
    </div>
    <add-another @add="add($event)" v-if="addAnother && type === 'default'"></add-another>
    <div v-else-if="type === 'checkbox'">
      <div class="block" v-if="title">
        <b>{{title}}</b>
      </div>
      <div class="block" v-if="subtitle">
        {{subtitle}}
      </div>
      <div class="option-group">
        <label class="option check" v-for="(item, index) of value">
          <input class="check__input" type="checkbox" v-model="item.value">
          <span class="check__box"></span>
          {{item.name}}
        </label>
      </div>
      <div class="text_small text_warning">
        Please select one of the option above
      </div>
      <add-another @add="add($event)" v-if="addAnother"></add-another>
    </div>
  </div>
</template>

<script>
import AddAnother from '@/components/AddAnother'

export default {
  name: "YesNo",
  components: {
    AddAnother
  },
  props: {
    title: {
      default: false
    },
    subtitle: {
      default: false
    },
    addAnother: {
      default: false
    },
    value: {
      type: Array
    },
    type: {
      type: String,
      default: 'default'
    },
  },
  data: () => ({
  }),
  methods: {
    add(e) {
      let newEl = {
        name: e,
        value: true
      }
      this.value.push(newEl)
    },
  }
}
</script>

<style scoped>

</style>