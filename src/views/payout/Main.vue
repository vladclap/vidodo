<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="payout-content">
          <div class="text">
            <b>Next payout</b>
          </div>
          <div class="text-flex payout-text-flex">
            <p>We'll send this to you around</p>
            <p>Dec 21, 2020</p>
          </div>
          <div class="payout-price">
            <p class="extralarge-text">€0</p>
            <div class="price-estimated">
              <p>ESTIMATED</p>
            </div>
            <img :src="require('@/assets/img/question-mark.svg')" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="list__item list__item-payouts">
      <div class="list__item-content">
        <p class="payout-past">
          You don't have any past payouts.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>