<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="big-title">Now let's customize your booking process</div>
        <div class="choices">
          <h2><b>How would you like to set your cut-off time?</b></h2>
          <div class="subtitle">
            <p>This is the time when you stop accepting new bookings for this tour.</p>
            <a href="#">Learn more</a>
          </div>
          <div class="choices-line">
            <select-comp v-model="cutOff"></select-comp>
          </div>
        </div>
        <div class="choices choices-number">
          <h2><b>How many hours in advance will you stop accepting new bookings?</b></h2>
          <div class="choices-line">
            <input type="number" class="input option elem_w_200">
          </div>
        </div>
        <div class="block block_space_xxl">
          <h2><b>Choose your confirmation method</b></h2>
          <div class="subtitle">
            <p>This will determine how you process bookings for this tour.</p>
            <a href="#">Learn more</a>
          </div>
          <div class="block block_space_x">
            <select-comp v-model="confirmationMethod"></select-comp>
          </div>
        </div>
      </div>
    </div>
    <div class="save__ccontinue">
      <router-link to="/product/booking" class="btn-save">Save &amp; continue</router-link>
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
export default {
  name: "process",
  components: { SelectComp },
  data: ()=>({
    cutOff: {
      options: [
        { name: 'One set time' },
        { name: 'Relative to start time' },
      ],
    },
    confirmationMethod: {
      options: [
        { name: 'Instant confirmation (Recommended)' },
        { name: 'Instant confirmation then becomes manual' },
        { name: 'Manual confirmation' },
      ]
    }
  }),
}
</script>