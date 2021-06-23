<template>
  <div>
    <h1 class="big-title">Basic details</h1>
    <p class="finance-subtitle">
      Please note the fields in this payout
      wizard only support Latin characters -
      for example (A-Z, 0-9). <br> This is to ensure
      you get paid correctly for your bookings.
    </p>
    <br>
    <a href="javascript:;" class="external-link">I need help setting up my payment details</a>
    <div class="basic__details-content">
      <p><b>Currency</b></p>
      <div class="finance-select item-products select-gray">
        <p>Euro</p>
      </div>
    </div>
    <div class="basic__details-content">
      <div class="text">
        <b>Currency</b>
        <br>
        This is the country your payout account is located in
      </div>
      <select-comp v-model="country"></select-comp>
    </div>
    <div class="basic__details-content">
    <div class="text">
      <b>Payout method</b>
      <br>
      We don't charge any fees for processing your payouts, however your
      bank or <br> preferred payout method may charge a separate receiving fee.
    </div>
    <div class="payout-method">
      <div class="payout-method-row1">
        <div class="list__item-radio">
          <input type="radio" id="basic-details-bank" name="accompanied-by-radio" checked="">
          <label for="basic-details-bank"></label>
        </div>
        <img :src="require('@/assets/img/clarity_bank-line.svg')" alt="">
        <p><b>Bank</b></p>
      </div>
      <div class="bank-payout-method-text">
        <p>Get paid monthly</p>
        <p>40 EUR minimum payout threshold</p>
      </div>
    </div>
    <div class="payout-method">
      <div class="payout-method-row1">
        <div class="list__item-radio">
          <input type="radio" id="payPal-details-bank" name="accompanied-by-radio">
          <label for="payPal-details-bank"></label>
        </div>
        <img :src="require('@/assets/img/payPal-line.svg')" alt="">
        <p><b>PayPal</b></p>
      </div>
      <div class="bank-payout-method-text">
        <p>Get paid weekly</p>
        <p>No minimum payout threshold</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
export default {
  name: "PayoutMethodStep0",
  components: { SelectComp },
  props: ["country"]
}
</script>

<style scoped>

</style>