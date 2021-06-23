<template>
  <div class="block">
    <div class="block block_frame chek-card">
      <div class="check-card__checkbox">
        <label class="check">
          <input class="check__input" type="checkbox">
          <span class="check__box check__box_circle"></span>
        </label>
      </div>
      <div class="check-card__img">
        <img src="../assets/img/map-points.svg" alt="">
      </div>
      <div class="check-card__content">
        <div class="block">
          <b>Tour</b>
        </div>
        <div class="block">
          A guided visit to one or more sites
        </div>
        <div class="block block_space_xl">
          <div class="option-group">
            <div class="option-title">
              What's the mode of transport?
            </div>
            <select-comp v-model="modeOfTransport"></select-comp>
          </div>
        </div>
        <div class="option-group">
          <div class="option-title">
            How long is this tour?
          </div>
          <label class="option check">
            <input class="check__input" type="checkbox">
            <span class="check__box check__box_circle"></span>
            One day or less
          </label>
          <label class="option check">
            <input class="check__input" type="checkbox">
            <span class="check__box check__box_circle"></span>
            Two or more days
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComp from '@/components/SelectComp'

export default {
  name: "ProductType",
  data: ()=>({
    tourSelect: {

    },
    modeOfTransport: {
      options: [
        { name: 'option 1', value: 1 },
        { name: 'option 2', value: 2 },
        { name: 'option 3', value: 3, selected: true },
        { name: 'option 4', value: 4 },
      ],
      selected: [],
      multi: true,
      search: true,
      inputType: 'tags',
    }
  }),
  components: {SelectComp},
}
</script>

<style scoped>

</style>