<template>
  <div>
    <div class="block block_add-another elem_w_750" v-if="editing">
      <input type="text" class="input" v-model="text">
      <div class="block__btn-close" @click="closeEditing"></div>
    </div>
    <a class="text_acc" href="javascript:;" @click="addAnotherBtn">
      <b>{{ title }}</b>
    </a>
  </div>
</template>

<script>
export default {
  name: "AddAnother",
  props: {
    title: {
      type: String,
      default: '+ Add another'
    }
  },
  data: () => ({
    text: '',
    editing: false
  }),
  methods: {
    toggleEditing() {
      if (this.editing === false) {
        this.openEditing()
      } else {
        this.closeEditing()
      }
    },
    openEditing() {
      this.editing = true
    },
    closeEditing() {
      this.editing = false
    },
    addAnotherBtn() {
      if (this.editing === false) {
        this.openEditing()
      } else if (this.text.length > 0) {
        this.add()
        this.closeEditing()
      }
    },
    add() {
      this.$emit('add', this.text)
      this.text = ''
    }
  },
}
</script>

<style scoped>

</style>