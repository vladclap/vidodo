<template>
  <div class="block">
    <p class="step">Step 1 of 4</p>
    <h1 class="page-title">
      Translate your product into {{ lang }}
    </h1>
    <p>Product descriptions</p>
    <div class="warning">
      <p>
        Please note that for the
        convenience of correction,
        the texts have been translated
      </p>
    </div>
    <div class="translate-content">
      <div class="title">Title</div>
      <div class="textarea-translate">
        <textarea class="gray-textarea" placeholder="VidodoGuide"></textarea>
        <textarea class="white-textarea" placeholder="VidodoGuide"></textarea>
      </div>
    </div>
    <div class="translate-content">
      <div class="title">What makes your product unique?</div>
      <div class="textarea-translate">
        <textarea class="gray-textarea" placeholder="Our product is so unique that it is not and never will be."></textarea>
        <textarea class="white-textarea" placeholder="Nuestro producto es tan único que no lo es y nunca lo será."></textarea>
      </div>
    </div>
    <div class="translate-content">
      <div class="title">Health restrictions</div>
      <div class="textarea-translate">
        <textarea class="gray-textarea" placeholder="Health restrictions are a must. We care about people with disabilities"></textarea>
        <textarea class="white-textarea" placeholder="Las restricciones de salud son imprescindibles. Nos preocupamos por las personas con discapacidad"></textarea>
      </div>
    </div>
    <router-link to="/product" class="btn-save translate-btn">Save & continue</router-link>
  </div>
</template>

<script>
import TranslationsPopup from "@/components/TranslationsPopup";
import Bus from "@/popup/utils/bus";

export default {
  name: "Translations",
  data: ()=>({
    lang: 'Spanish'
  }),
  mounted() {
    this.$modals.open({
      component: TranslationsPopup
    })
    Bus.$on('langSelected', (payload)=>{
      this.lang = payload
    })
    const x = {}
    const y = {}
    const xs = ''
    const ys = ''
    console.log(x === y)
    console.log(xs === ys)
    console.dir(x.__proto__)
  }
}
</script>