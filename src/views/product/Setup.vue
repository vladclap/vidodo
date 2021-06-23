<template>
  <div>
    <h1 class="page-title">
      Let’s get started
    </h1>
    <div class="block block_space_x">
      <div class="block"><b>Select the language you will use to enter your product  details</b></div>
      <div class="block">You must use this language to write any descriptions or text about this product.</div>
      <select-comp ref="langSelect" v-model="lang" class="elem_w_555"></select-comp>
      <p class="text_small text_warning" v-if="$v.selectedLanguage.$dirty && !$v.selectedLanguage.required">The choice is required</p>
    </div>
    <div class="block block_space_xxl option-group">
      <div class="option-title">Would you like to translate your product details into other languages</div>
      <label class="option check">
        <input class="check__input" v-model="translate" :value="true" type="radio">
        <span class="check__box check__box_circle"></span>
        Yes
      </label>
      <label class="option check">
        <input class="check__input" v-model="translate" :value="false" type="radio">
        <span class="check__box check__box_circle"></span>
        No
        <span class="check__if-not-checked check__if-not-checked_ok">Continue entering your product details in {{ selectedLanguage }}. You will be able to translate once everything is done.</span>
      </label>
      <p class="text_small text_warning" v-if="$v.translate.$dirty && !$v.translate.required">The choice is required</p>
    </div>
    <div class="block">
      <b>Enter your product title</b>
      <input class="input option elem_w_555" :class="{ 'input_error': ($v.title.$dirty && !$v.title.required), input: true, option: true }" type="text" v-model="title">
      <p class="text_small text_warning" v-if="$v.title.$dirty && !$v.title.required">Title is required</p>
    </div>
    <div class="block block_space_xxl">
      <div class="block">
        <two-side>
          <template v-slot:front>
            <span class="text_acc">Add your product reference code</span>
            <span class="text_small">(optional)</span>
          </template>
          <div class="block">
            <b>Product reference code</b> <span class="text_small">(optional)</span>
          </div>
          Assign a reference code to your product for your internal use.
          <input class="input" type="text" v-model="refCode">
        </two-side>
      </div>
    </div>
    <a href="javascript:;" @click="save" class="btn btn_primary btn_big btn_text_regular">
      Save &amp; continue
    </a>
  </div>
</template>

<script>
import TwoSide from "@/components/TwoSide";
import SelectComp from "@/components/SelectComp";

import {required} from 'vuelidate/lib/validators'

export default {
  name: "Setup",
  components: { SelectComp, TwoSide },
  data: ()=>({
    refCode: '',
    lang: {
      options: [
        { name: "English" },
        { name: "Spanish" },
        { name: "German" },
        { name: "French" },
      ],
      selectedNames: []
    },
    translate: null,
    title: ''
  }),
  computed: {
    selectedLanguage() {
      return this.lang.selectedNames[0]
    }
  },
  validations: {
    title: { required },
    selectedLanguage: { required },
    translate: { required },
  },
  beforeCreate() {
    this.id = this.$route.params.id;
    if (!this.id) {
      this.isNew = true
      return true
    }
  },
  created() {
    if (!this.isNew) {
      let data = this.getValues()
      if (data.title) {
        this.title = data.title
      }
      if (data.translate !== undefined) {
        this.translate = data.translate
      }
      if (data.refCode) {
        this.refCode = data.refCode
      }
      if (data.lang) {
        for (let i in this.lang.options) {
          if (this.lang.options[i].name == data.lang) {
            this.lang.options[i].selected = true
          }
        }
      }
    }
  },
  methods: {
    getValues() {
      return this.$store.state.event.events[this.id]
    },
    async save() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        console.log('error')
        return false
      }
      if (this.isNew) {
        await this.createNewProduct()
          .then((res)=>{
            this.id = res
          })
      } else {
        this.updateValues()
      }
      console.log(this.id)
      await this.$router.push({ path: '/product/' + this.id })
    },
    updateValues() {
      return this.$store.dispatch('updateEvent', {
        id: this.id,
        title: this.title,
        lang: this.selectedLanguage,
        translate: this.translate,
        refCode: this.refCode
      })
    },
    async createNewProduct() {
      let answer = false
      await this.$store.dispatch('addEvent', {
        title: this.title,
        lang: this.selectedLanguage,
        translate: this.translate,
        refCode: this.refCode
      })
      .then((response)=>{
        answer = response
      })
      console.log(answer)
      return answer
    }
  },
}
</script>