<template>
  <div>
    <h1 class="big-title">Your bank details</h1>
    <p class="finance-subtitle">
      Add your bank account details so we can pay you
    </p>
    <div class="basic__details-content">
      <p><b>Account holder name</b></p>
      <input type="text" v-model.trim="stepHolderName" :class="{ 'input_error': ($v.stepHolderName.$dirty && !$v.stepHolderName.required), input: true, option: true }">
      <p class="text_small text_warning" v-if="$v.stepHolderName.$dirty && !$v.stepHolderName.required">Account holder name required</p>
    </div>
    <div class="basic__details-content">
      <p><b>Bank name</b></p>
      <input type="text" class="input option" v-model="stepBankName">
    </div>
    <div class="basic__details-content">
      <p><b>Province</b></p>
      <input type="text" class="input option" v-model="stepProvince">
    </div>
    <div class="basic__details-content">
      <p><b>IBAN</b></p>
      <p>Please enter an IBAN starting with DE.</p>
      <input type="text" class="input option" v-model="stepIban">
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: "PayoutMethodStep2",
  props: ["province", 'iban', "bankName", "holderName"],
  data: ()=>({
    stepProvince: null,
    stepIban: null,
    stepBankName: null,
    stepHolderName: null,
  }),
  validations: {
    stepHolderName: {
      required
    }
  },
  methods: {
    nextStep() {
      return {
        province: this.stepProvince,
        iban: this.stepIban,
        bankName: this.stepBankName,
        holderName: this.stepHolderName,
      }
    }
  },
  mounted() {
    if (this.province) {
      this.stepProvince = this.province
    }
    if (this.province) {
      this.stepIban = this.iban
    }
    if (this.province) {
      this.stepBankName = this.bankName
    }
    if (this.province) {
      this.stepHolderName = this.holderName
    }
  }
}
</script>