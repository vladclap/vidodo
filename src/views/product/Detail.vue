<template>
  <div>
    <a href="javascript:;" class="back">Back to product list</a>
    <h1 class="page-title">
      2-Hour Surfing Experience for Beginners in Famara
    </h1>
    <div class="info-line">
      <select-comp class="select-wrapper_mini select-wrapper_dot" v-model="selectType"></select-comp>
      <div class="info-line__tags">
        <div class="info-line__tag">Product code: 2873528765278</div>
        <div class="info-line__tag">half day surf lesson</div>
      </div>
    </div>
    <div class="tab">
      <ul class="tab__list">
        <router-link :to="`/product/${id}`" class="tab__link" exact active-class="active">Product content</router-link>
        <router-link :to="`/product/${id}/prices`" class="tab__link" active-class="active">Schedules &amp; prices</router-link>
        <router-link :to="`/product/${id}/booking`" class="tab__link" active-class="active">Booking details</router-link>
        <router-link :to="`/product/${id}/tickets`" tag="li" class="tab__link" active-class="active">Tickets</router-link>
        <router-link :to="`/product/${id}/translations`" tag="li" class="tab__link" active-class="active">Translations</router-link>
        <router-link :to="`/product/${id}/special-offers`" class="tab__link" active-class="active">Special offers</router-link>
      </ul>
      <div class="tab__content-area">
        <div class="tab__content active">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
export default {
  name: "Detail",
  components: {SelectComp},
  data: ()=>({
    selectType: {
      options: [
        {
          name: 'In Review',
          value: 'review'
        },
        {
          name: 'some text',
          value: 'text'
        },
      ]
    }
  }),
  beforeCreate() {
    this.id = this.$route.params.id;
  }
}
</script>