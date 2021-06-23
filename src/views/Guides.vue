<template>
  <div>
    <router-link to="/product" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Tell us about the guides provided
    </h1>
    <div class="block block_space_xxl">
      <div class="option-group">
        <div class="option-title">Do you offer in-person, audio or written guides?</div>
        <label class="option check">
          <input class="check__input" type="radio" v-model="audioOrWrittenGuides" :value="true">
          <span class="check__box check__box_circle"></span>
          Yes
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="audioOrWrittenGuides" :value="false">
          <span class="check__box check__box_circle"></span>
          No
        </label>
      </div>
    </div>
    <div class="block block_space_xxl" v-if="audioOrWrittenGuides">
      <div class="block">
        <b>What type of guide is included?</b> <span class="img-text img-text_question"></span>
      </div>
      <languages-comp v-model="languages"></languages-comp>
    </div>
    <router-link to="product" class="btn btn_primary btn_big btn_text_regular">
      Save &amp; continue
    </router-link>
  </div>
</template>

<script>
import LanguagesComp from "@/components/LanguagesComp";

export default {
  name: "Guides",
  data: ()=>({
    audioOrWrittenGuides: false,
    languages: [
      {
        lang: 'English'
      },
      {
        lang: 'Spanish'
      },
      {
        lang: 'French'
      },
      {
        lang: 'German'
      },
      {
        lang: 'Italian'
      },
    ]
  }),
  components: {LanguagesComp},
}
</script>