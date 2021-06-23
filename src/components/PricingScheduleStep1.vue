<template>
  <div class="block block_space_xxl">
    <div class="block">
      When does your schedule start?
    </div>
    <datepicker input-class="input elem_w_200"></datepicker>
    <div class="block block_space_xxl">Give this schedule an end date <span class="text_gray">(optional)</span></div>
    <div class="block">
      Select the option that best describes the timing of your experience
    </div>
    <label class="option check">
      <input class="check__input" type="radio" v-model="experience" value="Start times">
      <span class="check__box check__box_circle"></span>
      Start times
    </label>
    <label class="option check">
      <input class="check__input" type="radio" v-model="experience" value="Opening hours">
      <span class="check__box check__box_circle"></span>
      Opening hours
    </label>
    <label class="option check">
      <input class="check__input" type="radio" v-model="experience" value="Coordinated start times">
      <span class="check__box check__box_circle"></span>
      Coordinated start times
    </label>
    <label class="option check">
      <input class="check__input" type="radio" v-model="experience" value="None of the above">
      <span class="check__box check__box_circle"></span>
      None of the above
    </label>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "PricingScheduleStep1",
  data: ()=>({
    experience: ''
  }),
  components: {
    Datepicker
  },
}
</script>