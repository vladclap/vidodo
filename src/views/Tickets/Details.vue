<template>
  <div>
    <div class="block block_space_xxl">
      <div class="big-title title">Let's set up your tickets</div>
      <div class="subtitle">
        <p>
          We issue tickets for every booking so travelers
          have easy access to important <br> information on
          the day of travel.
        </p>
      </div>
    </div>
    <div class="block block_space_xxl">
      <div class="block block_space_x">
        <b>Select a ticket type</b>
      </div>
      <label class="option check check_booking check_m_0">
        <input class="check__input" type="radio" name="cancellation-policy">
        <span class="check__box check__box_circle check__box_acc"></span>
        Mobile or paper ticket accepted
        <span class="recommended">RECOMMENDED</span>
      </label>
      <label class="option check check_booking check_m_0">
        <input class="check__input" type="radio" name="cancellation-policy">
        <span class="check__box check__box_circle check__box_acc"></span>
        Paper ticket only accepted
      </label>
    </div>
    <div class="block block_space_xxl">
      <div class="block block_space_x">
        <b>How many tickets do you want us to create per booking?</b>
      </div>
      <label class="option check check_booking check_m_0">
        <input class="check__input" type="radio" name="cancellation-policy">
        <span class="check__box check__box_circle check__box_acc"></span>
        One per booking
        <span class="recommended">RECOMMENDED</span>
      </label>
      <label class="option check check_booking check_m_0">
        <input class="check__input" type="radio" name="cancellation-policy">
        <span class="check__box check__box_circle check__box_acc"></span>
        One per traveler
      </label>
    </div>
    <div class="save__ccontinue">
      <router-link to="/product/tickets" class="btn-save">Save &amp; continue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details"
}
</script>