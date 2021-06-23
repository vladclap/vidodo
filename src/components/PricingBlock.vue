<template>
  <div class="block block_frame block_bg_gray">
    <div class="price-table">
      <div class="price-table__left">
      </div>
      <div class="price-table__right">
        <div class="row row_price-table">
          <div class="col">Suggested retail price <span class="img-text img-text_question"></span></div>
          <div class="col">Amount you will get paid <span class="img-text img-text_question"></span></div>
        </div>
      </div>
    </div>
    <div class="price-table" v-for="item of pricingBlock">
      <div class="price-table__left">
        <label class="option check">
          <input class="check__input" type="checkbox" v-model="item.enabled">
          <span class="check__box"></span>
          {{ item.title }}
        </label>
      </div>
      <div class="price-table__right">
        <div class="row row_price-table">
          <price-comp v-model="item.suggested" class="col"></price-comp>
          <price-comp v-model="item.getPaid" class="col"></price-comp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceComp from '@/components/PriceComp'
export default {
  name: "PricingBlock",
  components: {PriceComp},
  data: ()=>({
    pricingBlock: {
      adult: {
        title: 'Adult',
        suggested: {
          sum: '',
          currency: 'eur'
        },
        getPaid: {
          sum: '',
          currency: 'eur'
        },
        enabled: false,
      },
      child: {
        title: 'Child',
        suggested: {
          sum: '',
          currency: 'eur'
        },
        getPaid: {
          sum: '',
          currency: 'eur'
        },
        enabled: false,
      },
      youth: {
        title: 'Youth',
        suggested: {
          sum: '',
          currency: 'eur'
        },
        getPaid: {
          sum: '',
          currency: 'eur'
        },
        enabled: false,
      },
      senior: {
        title: 'Senior',
        suggested: {
          sum: '',
          currency: 'eur'
        },
        getPaid: {
          sum: '',
          currency: 'eur'
        },
        enabled: false,
      },
    }
  })
}
</script>

<style scoped>

</style>