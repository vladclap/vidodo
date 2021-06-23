<template>
  <div>
    <router-link to="/product" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Add any physical restrictions
    </h1>
    <div class="block">
      This information will help travelers know if this is a good tour for them.
    </div>
    <yes-no v-model="accessibility" class="block_space_xxl" title="Accessibility" addAnother="true"></yes-no>
    <yes-no v-model="restrictions" class="block_space_xxl" title="Health restrictions" subtitle="Check all that apply" type="checkbox" addAnother="true"></yes-no>
    <div class="block block_space_xxl">
      <div class="option-group">
        <div class="option-title block block_space_x">Select the physical difficulty level</div>
        <label class="option check">
          <input class="check__input" type="radio" v-model="difficulty" value="easy">
          <span class="check__box check__box_circle"></span>
          Easy
          <span class="check__prompt text_gray">Most travelers can participate</span>
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="difficulty" value="moderate">
          <span class="check__box check__box_circle"></span>
          Moderate
          <span class="check__prompt text_gray">Travelers should have a moderate physical fitness level</span>
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="difficulty" value="challenging">
          <span class="check__box check__box_circle"></span>
          Challenging
          <span class="check__prompt text_gray">Travelers should have a strong physical fitness level</span>
        </label>
      </div>
    </div>
    <div class="block block_space_xxl">
      <div class="block">
        <b>Your phone number</b>
      </div>
      <div class="block">
        This is the number travelers will call if they need to reach you on the day of the travel.
      </div>
      <phone-number v-model="phoneNumber"></phone-number>
    </div>
  </div>
</template>

<script>
import PhoneNumber from "@/components/PhoneNumber";
import YesNo from "@/components/YesNo";

export default {
  name: "Info",
  data: ()=>({
    phoneNumber: [ 35, null ],
    difficulty: null,
    restrictions: [
      {
        name: 'Not recommended for travelers with back problems',
        value: false
      },
      {
        name: 'Not recommended for pregnant travelers',
        value: false
      },
      {
        name: 'Not recommended for travelers with heart problems or other serious medical conditions\n',
        value: false
      },
    ],
    accessibility: [
      {
        name: 'Is it Wheelchair accessible?',
        value: true
      },
      {
        name: 'Is all transportation wheelchair accessible?',
        value: true
      },
      {
        name: 'Are all surfaces wheelchair accessible (no uneven terrain, stairs, etc.)?',
        value: true
      },
      {
        name: 'Is it stroller accessible?',
        value: true
      },
      {
        name: 'Are service animals allowed?',
        value: true
      },
      {
        name: 'Can travelers easily arrive/depart on public transportation?',
        value: true
      },
      {
        name: 'Are infants required to sit on laps?',
        value: true
      },
      {
        name: 'Are infant seats available?',
        value: true
      },
    ]
  }),
  components: {YesNo, PhoneNumber},
}
</script>