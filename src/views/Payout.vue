<template>
  <div class="tab">
    <ul class="tab__list">
      <router-link to="/payout" class="tab__link" active-class="active" exact>Payouts</router-link>
      <router-link to="/payout/methods" class="tab__link" active-class="active">Payout Methods</router-link>
      <router-link to="/payout/tax" class="tab__link" active-class="active">Tax Form</router-link>
    </ul>
    <div class="tab__content-area">
      <div class="tab__content active block">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payout"
}
</script>