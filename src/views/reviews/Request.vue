<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="list__item-main-content no-border">
          <div class="reviews__item-content">
            <div class="reviews__item-col1">
              <p class="steps">STEP 1 / 2</p>
              <h1 class="big-title">Set up your email</h1>
              <div class="text">
                <b>Select a product or listing</b>
              </div>
              <div class="reviews__item-content">
                <div class="all-review-drop-dawn">
                  <select-comp v-model="product"></select-comp>
                  <span class="text_warning text_small" v-if="$v.computedProduct.$dirty && !$v.computedProduct.required">this field is required</span>
                </div>
              </div>
              <div class="request-reviews-row2">
                <div class="text">
                  <div class="halper-question">
                    <b>Select the language for this email</b>
                    <a href="javascript:;"><img src="assets/images/question-mark.svg" alt=""></a>
                  </div>
                </div>
                <div class="reviews__item-content">
                  <div class="all-review-drop-dawn">
                    <select-comp v-model="languageEmail"></select-comp>
                    <span class="text_warning text_small" v-if="$v.computedLanguageEmail.$dirty && !$v.computedLanguageEmail.required">this field is required</span>
                  </div>
                </div>
              </div>
              <div class="request-reviews-row2">
                <div class="text">
                  <div class="halper-question">
                    <b>Enter the sender's email address</b>
                  </div>
                </div>
                <input type="text" class="input option" v-model="email">
                <span class="text_warning text_small" v-if="$v.email.$dirty && !$v.email.email">it's not email</span>
                <span class="text_warning text_small" v-if="$v.email.$dirty && !$v.email.required">this field is required</span>
              </div>
              <div class="reviews__footer">
                <a href="javascript:;" @click="continueClick" class="btn-save">Continue</a>
              </div>
            </div>
            <div class="reviews__item-col2">
              <div class="list__item reviews__list-item2">
                <div class="list__item-content">
                  <div class="reviews-collection reviews-collection-anchor">
                    <div class="text">
                      Did you know? <br> <br>
                      If you have travelers' permission,
                      you can request reviews from people
                      who booked on any platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
import { email, required } from 'vuelidate/lib/validators'
export default {
  name: "Request",
  components: { SelectComp },
  data: ()=>({
    email: '',
    product: {
      options: [
        { name: '2-Hour Surfing Experience for Beginners in Famar..' },
        { name: 'Что-то ещё' },
      ],
      selectedNames: []
    },
    languageEmail: {
      options: [
        { name: "Spanish" },
        { name: "English" },
      ],
      selectedNames: []
    }
  }),
  computed: {
    computedLanguageEmail() {
      return this.languageEmail.selectedNames[0]
    },
    computedProduct() {
      return this.product.selectedNames[0]
    },
  },
  validations: {
    computedLanguageEmail: { required },
    computedProduct: { required },
    email: { required, email },
  },
  methods: {
    continueClick() {
      this.$v.$touch()
      console.log(this.$v)
      if (this.$v.$anyError) {
        return false
      }
      this.$router.push({ path: '/reviews' })
    }
  }
}
</script>