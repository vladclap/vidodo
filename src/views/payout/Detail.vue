<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <PayoutMethodStep0 :country="country" v-if="step == 0" ref="step0"></PayoutMethodStep0>
        <PayoutMethodStep1 :country="country" :address="address" :city="city" :province="province" :zip="zip" :businessId="businessId" v-if="step == 1" ref="step1"></PayoutMethodStep1>
        <PayoutMethodStep2 :province="province" :iban="iban" :bankName="bankName" :holderName="holderName" v-if="step == 2" ref="step2"></PayoutMethodStep2>
        <div class="save__ccontinue">
          <a href="javascript:;" class="btn-save" @click="nextStep">Next</a>
        </div>
        <div class="block" v-if="step !== 0">
          <a href="javascript:;" class="btn" @click="prevStep">
            Back
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PayoutMethodStep0 from "@/components/PayoutMethodStep0";
import PayoutMethodStep1 from "@/components/PayoutMethodStep1";
import PayoutMethodStep2 from "@/components/PayoutMethodStep2";
export default {
  name: "Detail",
  data: ()=>({
    step: 0,
    totalSteps: 2,
    country: {
      options: [
        { name: 'Germany' },
        { name: 'not Germany' },
      ]
    },
    address: null,
    city: null,
    province: null,
    zip: null,
    businessId: null,
    iban: null,
    holderName: null,
    bankName: null,
  }),
  components: { PayoutMethodStep0, PayoutMethodStep1, PayoutMethodStep2 },
  methods: {
    getCurrentStep() {
      return this.$refs.step0 ||this.$refs.step1 ||this.$refs.step2
    },
    setNewValues() {
      try {
        for (let i in this.getCurrentStep().nextStep()) {
          console.log(i)
          console.log(this.getCurrentStep().nextStep()[i])
          this[i] = this.getCurrentStep().nextStep()[i]
        }
      } catch {
        console.log('nothing to update')
      }
    },
    scrollTop() {
      document.documentElement.scrollTop = 0;
    },
    nextStep() {
      try {
        this.getCurrentStep().$v.$touch()
        if (this.getCurrentStep().$v.$anyError) {
          console.log('error in validation')
          return false
        }
      } catch {
        console.log('no validations')
      }
      this.setNewValues()
      if (this.step < this.totalSteps) {
        this.step++
        this.scrollTop()
      }
    },
    prevStep() {
      if (this.step > 0) {
        this.step--
        this.scrollTop()
      }
    },
  },
}
</script>