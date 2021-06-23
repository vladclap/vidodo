<template>
  <div class="block">
    <div class="block block_space_x">
      <b v-if="type == 'included'">What's included</b>
      <b v-if="type == 'excluded'">What's excluded</b>
      <div class="block block_space_x included-list">
        <div class="included-list__item" v-for="(item, index) of value.list">
          <div class="included-list__title" v-if="editing !== index">
            {{ item.name }}
          </div>
          <input type="text" class="input" v-model="item.name" v-else>
          <div class="included-list__controls">
            <div class="included-list__btn included-list__btn_edit" @click="toggleEdit(index)"></div>
            <div class="included-list__btn included-list__btn_remove" @click="remove(index)"></div>
          </div>
        </div>
      </div>
    </div>
    <a class="text_acc" href="javascript:;" @click="openPopup">
      <b v-if="type == 'included'">+ Add an inclusion</b>
      <b v-if="type == 'excluded'">+ Add an exclusion</b>
    </a>
  </div>
</template>

<script>
import AddAnother from '@/components/AddAnother'
import IncludedPopup from '@/components/IncludedPopup'
import ExcludedPopup from '@/components/ExcludedPopup'
import Bus from "@/popup/utils/bus";

export default {
  name: "ProvideList",
  props: [ 'value' ],
  data: ()=>({
    editing: false,
    type: 'included'
  }),
  components: {AddAnother},
  methods: {
    add(text) {
      this.value.list.push({name: text})
    },
    remove(index) {
      this.value.list.splice(index, 1)
    },
    toggleEdit(index) {
      if (typeof this.editing == 'number' && this.editing == index) {
        this.editing = false
      } else {
        this.editing = index
      }
    },
    openPopup() {
      if (this.type == 'included') {
        this.$modals.open({
          component: IncludedPopup,
          center: true
        })
      } else {
        this.$modals.open({
          component: ExcludedPopup,
          center: true
        })
      }
    }
  },
  mounted() {
    if (this.value.type) {
      this.type = this.value.type
    }
    if (this.type == 'included') {
      Bus.$on('addIncluded', (payload)=>{
        this.add(payload[0])
      })
    } else {
      Bus.$on('addExcluded', (payload)=>{
        this.add(payload[0])
      })
    }
  }
}
</script>

<style scoped>

</style>