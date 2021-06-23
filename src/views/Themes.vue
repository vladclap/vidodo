<template>
  <div id="themes">
    <div class="wrapper main__wrapper">
      <router-link to="/product" class="back">Back to product content</router-link>
      <h1 class="page-title">
        Choose the themes that best describe this product
      </h1>
      <div class="block">
        Select up to 3 themes that highlight what your product is about and help travelers know what to expect.
      </div>
      <div class="block block_space_xxl elem_w_750">
        <select-comp v-model="mainTheme.category"></select-comp>
        <CheckboxGroup v-model="mainTheme.theme" title="Select theme(s)"></CheckboxGroup>
      </div>
      <div class="block block_space_xxl" v-if="!anotherTheme.active" @click="activateAnotherTheme">
        <a href="javascript:;" class="text_acc"><b>+ Add another theme</b> <span class="text_small">(optional)</span></a>
      </div>
      <div class="block block_space_xxl" v-else>
        <div class="block block_space_xxl">
          <b>Add another theme</b> <span class="text_small">(optional)</span>
          <div class="block elem_w_750">
            <select-comp v-model="anotherTheme.category"></select-comp>
          </div>
        </div>
        <CheckboxGroup v-model="anotherTheme.theme" v-if="anotherTheme.category.selected.length > 0" title="Select theme(s)"></CheckboxGroup>
      </div>
      <router-link to="/product" class="btn btn_primary btn_big btn_text_regular">
        Save &amp; continue
      </router-link>
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
import CheckboxGroup from "@/components/CheckboxGroup";

export default {
  name: "Themes",
  data: ()=>({
    mainTheme: {
      category: {
        options: [
          { name: 'travel', value: 'travel' },
          { name: 'not travel', value: 'not travel' },
        ]
      },
      theme: {
        options: [
          { name: 'Airport Transfer', selected: true },
          { name: 'Layover' },
          { name: 'City' },
          { name: 'Outback' },
          { name: 'Cruise' },
          { name: 'Port Transfer' },
          { name: 'Hop-on Hop-off' },
          { name: 'Shore Excursion' },
          { name: 'Inter-Island' },
          { name: 'Sightseeing' },
          { name: 'Intercity Transfer' },
        ]
      }
    },
    anotherTheme: {
      active: false,
      category: {
        options: [
          { name: 'travel', value: 'travel' },
          { name: 'not travel', value: 'not travel' },
        ],
        selected: []
      },
      theme: {
        options: [
          { name: 'Architecture' },
          { name: 'Literature' },
          { name: 'Art' },
          { name: 'Photography' },
          { name: 'Fashion' },
          { name: 'Street Art' },
        ]
      }
    },
  }),
  components: {SelectComp, CheckboxGroup},
  methods: {
    activateAnotherTheme() {
      this.anotherTheme.active = true
    }
  },
}
</script>