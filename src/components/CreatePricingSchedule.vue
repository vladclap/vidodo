<template>
  <div>
    <div class="block">
      Step {{step + 1}} of 2
    </div>
    <div class="page-title">
      Create a pricing schedule
    </div>
    <div class="delimiter"></div>
    <PricingScheduleStep1 v-if="step == 0"></PricingScheduleStep1>
    <PricingScheduleStep2 v-if="step == 1"></PricingScheduleStep2>
    <div class="popup__controls popup__controls_type_2">
      <a href="javascript:;" @click="closePopup" class="btn btn_text_regular">
        Cancel
      </a>
      <div class="popup__steps">
        <div :class="{'popup__steps-item': true, 'active': step == 0}" @click="toStep(0)"></div>
        <div :class="{'popup__steps-item': true, 'active': step == 1}" @click="toStep(1)"></div>
      </div>
      <a href="javascript:;" @click="nextStep" class="btn btn_text_regular btn_primary">
        Next
      </a>
    </div>
  </div>
</template>

<script>
import PricingScheduleStep1 from "@/components/PricingScheduleStep1";
import PricingScheduleStep2 from "@/components/PricingScheduleStep2";
import Bus from "@/popup/utils/bus";
export default {
  name: "CreatePricingSchedule",
  data: ()=>({
    step: 0,
    maxSteps: 1
  }),
  components: {
    PricingScheduleStep1, PricingScheduleStep2
  },
  methods: {
    nextStep() {
      if (this.step < this.maxSteps) {
        this.step++
      }
    },
    closePopup() {
      Bus.$emit('close');
    },
    toStep(step) {
      this.step = step
    }
  }
}
</script>