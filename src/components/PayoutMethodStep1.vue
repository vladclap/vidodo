<template>
  <div>
    <h1 class="big-title">Add your billing address</h1>
    <p class="finance-subtitle">
      We've copied over your office address, but
      feel free to change it if your billing
      address is different.
    </p>
    <div class="basic__details-content">
      <p><b>Country</b></p>
      <select-comp v-model="country"></select-comp>
    </div>
    <div class="basic__details-content">
      <p><b>Street address</b></p>
      <input type="text" v-model.trim="stepAddress" :class="{ 'input_error': ($v.stepAddress.$dirty && !$v.stepAddress.required), input: true, option: true }">
      <p class="text_small text_warning" v-if="$v.stepAddress.$dirty && !$v.stepAddress.required">Address is required</p>
      <input type="text" class="input option">
    </div>
    <div class="basic__details-content">
      <p><b>City</b></p>
      <input type="text" class="input option" v-model="stepCity">
    </div>
    <div class="basic__details-content">
      <p><b>Province</b></p>
      <input type="text" class="input option" v-model="stepProvince">
    </div>
    <div class="basic__details-content">
      <p><b>Zip / Post code</b></p>
      <input type="text" class="input option" v-model="stepZip">
    </div>
    <div class="basic__details-content">
      <p><b>Business ID (Optional)</b></p>
      <p>Please enter your business/tax id, for example a TIN, ABN or VAT number</p>
      <input type="text" class="input option" v-model="stepBusinessId">
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
import { required } from 'vuelidate/lib/validators'
export default {
  name: "PayoutMethodStep1",
  components: { SelectComp },
  props: ["country", 'address', "city", "province", "zip", "businessId"],
  data: ()=>({
    stepAddress: null,
    stepCity: null,
    stepProvince: null,
    stepZip: null,
    stepBusinessId: null
  }),
  validations: {
    stepAddress: {
      required
    }
  },
  methods: {
    nextStep() {
      return {
        address: this.stepAddress,
        city: this.stepCity,
        province: this.stepProvince,
        zip: this.stepZip,
        businessId: this.stepBusinessId,
      }
    }
  },
  mounted() {
    if (this.address) {
      this.stepAddress = this.address
    }
    if (this.city) {
      this.stepCity = this.city
    }
    if (this.province) {
      this.stepProvince = this.province
    }
    if (this.zip) {
      this.stepZip = this.zip
    }
    if (this.businessId) {
      this.stepBusinessId = this.businessId
    }
  }
}
</script>