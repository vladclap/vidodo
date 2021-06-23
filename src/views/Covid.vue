<template>
  <div>
    <router-link to="/product" class="back">Back to product content</router-link>
    <h1 class="page-title">
      COVID-19 safety updates
    </h1>
    <div class="block">
      Tell travelers about your COVID-19 safety measures.
    </div>
    <div class="block block_space_xl">
      <div class="block">
        <b>
          Select all that apply
        </b>
      </div>
      <div class="block">
        <b class="text_fz_13">Security measures are being taken</b>
      </div>
      <yes-no v-model="beingTaken" type="checkbox"></yes-no>
    </div>
    <div class="block block_space_xl">
      <div class="block">
        <b class="text_fz_13">Transportation vehicles regularly sanitized</b>
      </div>
      <yes-no v-model="regularlySanitized" type="checkbox"></yes-no>
    </div>
    <div class="block block_space_xxl">
      <div class="block">
        <b>Additional safety measures</b>
        <span class="text_small">(optional)</span>
      </div>
      <div class="block">
        Use the text box below to include any additional safety measure you think travelers should know about.
      </div>
      <textarea class="option elem_w_750" v-model="safetyMeasures"></textarea>
      <span class="text_gray text_small">{{charactersRemaining}} characters remaining</span>
    </div>
    <router-link to="product" class="btn btn_primary btn_text_regular">
      Save &amp; continue
    </router-link>
  </div>
</template>

<script>
import YesNo from "@/components/YesNo";
export default {
  name: "Covid",
  data: ()=>({
    beingTaken: [
      {
        name: 'Face masks required for travelers in public areas',
        value: false
      },
      {
        name: 'Face masks required for guides in public areas\n',
        value: false
      },
      {
        name: 'Face masks provided for travelers',
        value: false
      },
      {
        name: 'Hand sanitizer available to travelers and staff',
        value: false
      },
      {
        name: 'Social distancing enforced throughout experience',
        value: false
      },
      {
        name: 'Regularly sanitized high-traffic areas',
        value: false
      },
      {
        name: 'Gear/equipment sanitized between use',
        value: false
      },
      {
        name: 'Transportation vehicles regularly sanitized',
        value: false
      },
    ],
    regularlySanitized: [
      {
        name: 'Guides required to regularly wash hands',
        value: false
      },
      {
        name: 'Regular temperature checks for staff',
        value: false
      },
      {
        name: 'Temperature checks for travelers upon arrival',
        value: false
      },
      {
        name: 'Paid stay-at-home policy for staff with symptoms',
        value: false
      },
      {
        name: 'Contactless payments for gratuities and add-ons',
        value: false
      },
    ],
    safetyMeasures: ''
  }),
  watch: {
    beingTaken: function (val) {
      console.log(val)
    }
  },
  computed: {
    charactersRemaining() {
      return 300 - this.safetyMeasures.length
    }
  },
  components: {YesNo}
}
</script>