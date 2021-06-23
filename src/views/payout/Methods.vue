<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content no-border">
        <div class="cards">
          <div class="card">
            <div class="card__header">
              <div class="pay-pal-payout">
                <img :src="require('@/assets/img/payPal.svg')" alt="">
                <div class="payout-mehods-def">
                  <p>DEFAULT</p>
                </div>
              </div>
              <img :src="require('@/assets/img/card-dots.svg')" alt="">
            </div>
            <div class="card__content">

            </div>
            <div class="card__footer">
              <div class="text">
                <b>Email: </b>anfrage@lavidatrade.de
                <br>
                <b>Currency: </b>EUR
              </div>
            </div>
          </div>
          <router-link tag="div" class="card" to="/payout/methods/detail">
            <div class="card__header">
            </div>
            <div class="card__content card-add-payout">
              <p>Add a new payout method</p>
            </div>
            <div class="card__footer">
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Methods"
}
</script>