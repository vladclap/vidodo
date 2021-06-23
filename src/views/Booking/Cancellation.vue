<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="title-indent title">Your cancellation policy</div>
        <div class="subtitle">
          <p>Select your cancellation policy</p>
          <a href="#">Learn more</a>
        </div>
        <div class="warning">
          <p>
            Travelers want flexibility, so we recommend
            the Standard Cancellation for most products.
          </p>
        </div>
      </div>
    </div>
    <div class="block block_space_x">
      <label class="option check check_booking check_m_0">
        <input class="check__input" type="radio" name="cancellation-policy">
        <span class="check__box check__box_circle check__box_acc"></span>
        Standard
        <span class="recommended">RECOMMENDED</span>
      </label>
      <p class="prompt">
        To receive a full refund, travelers may
        cancel up to 24 hours before the experience
        start date in the local timezone. No refunds
        will be given after that time period.
      </p>
      <label class="option check check_booking check_m_0">
        <input class="check__input" type="radio" name="cancellation-policy">
        <span class="check__box check__box_circle check__box_acc"></span>
        All sales final
      </label>
      <p class="prompt">
          Travelers will not receive any refund
          regardless of cancellation status.
        </p>
    </div>

    <div class="block block_space_xl">
      <div class="subtitle">
        <p class="text_acc"><b>Add to your policy</b></p>
        <a href="javascript:;">(optional)</a>
      </div>
      <div class="text">
        You may reserve the right to cancel a customer's
        booking for a full refund in case of:
      </div>
      <div class="block block_space_x">
        <label class="option check">
          <input class="check__input" type="checkbox">
          <span class="check__box"></span>
          Bad weather
        </label>
        <label class="option check">
          <input class="check__input" type="checkbox">
          <span class="check__box"></span>
          Not enough travelers
        </label>
        <label class="option check">
          <input class="check__input" type="checkbox">
          <span class="check__box"></span>
          Epidemic
        </label>
      </div>
    </div>
    <div class="save__ccontinue">
      <router-link to="/product/booking" class="btn-save">Save &amp; continue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cancelation"
}
</script>