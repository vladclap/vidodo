<template>
  <div class="languages-list elem_w_555">
    <div class="languages-list__item languages-list__item_main">
      <div class="languages-list__title">
        Languages
      </div>
      <div class="languages-list__controls">
        <img src="../assets/img/lng-img.svg" alt="">
        In-person
      </div>
    </div>
    <div class="languages-list__item" v-for="(item, index) of value">
      <div class="languages-list__title">
        {{item.lang}}
      </div>
      <div class="languages-list__controls">
        <label class="check_single check">
          <input class="check__input" type="checkbox" v-model="item.value">
          <span class="check__box"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguagesComp",
  props: ['value']
}
</script>

<style scoped>

</style>