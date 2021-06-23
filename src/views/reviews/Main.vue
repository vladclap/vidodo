<template>
  <div class="reviews__item-content">
    <div class="reviews__item-col1">
      <div class="reviews__item-content">
        <div class="raitng-drop-dawn" @click="hideRating">
          <a href="javascript:;">
            <div class="item-products-all-ratings item-products">
              <p>All ratings</p>
              <p class="products-amount">(0)</p>
            </div>
          </a>
          <div ref="hide" class="raitings__stars hide">
            <div class="ratings-five-star raitings__stars-item">
              <input type="checkbox" id="ratings-five-star" checked="">
              <label for="ratings-five-star"></label>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
            </div>
            <div class="ratings-four-star raitings__stars-item">
              <input type="checkbox" id="ratings-four-star">
              <label for="ratings-four-star"></label>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
            </div>
            <div class="ratings-three-star raitings__stars-item">
              <input type="checkbox" id="ratings-three-star">
              <label for="ratings-three-star"></label>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
            </div>
            <div class="ratings-two-star raitings__stars-item">
              <input type="checkbox" id="ratings-two-star">
              <label for="ratings-two-star"></label>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
            </div>
            <div class="ratings-one-star raitings__stars-item">
              <input type="checkbox" id="ratings-one-star">
              <label for="ratings-one-star"></label>
              <a href="javascript:;"><img :src="require('@/assets/img/star.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
              <a href="javascript:;"><img :src="require('@/assets/img/star-inacive.svg')" alt=""></a>
            </div>
          </div>
        </div>
        <div class="all-review-drop-dawn">
          <select-comp class="select-wrapper_m_no" v-model="allReview"></select-comp>
        </div>
      </div>
      <div class="reviews__item-content reviews-row2">
        <datepicker input-class="input elem_w_200"></datepicker>
        <datepicker input-class="input elem_w_200"></datepicker>
        <p class="asked-question"><b>Frequently asked questions</b></p>
      </div>
      <div class="reviews__item-content reviews-row3">
        <p class="all-reviews-filter">
          Please use the "All reviews" filter to view your product reviews.
        </p>
      </div>
    </div>
    <div class="reviews__item-col2">
      <div class="list__item reviews__list-item2">
        <div class="list__item-content">
          <div class="reviews-collection reviews-collection-more">
            <div class="text">
              Get more bookings <br> <br>
              If you have travelers' permission,
              you can request reviews from people
              who booked on any platform.
            </div>
            <a href="javascript:;" class="btn-save">Collect reviews</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import SelectComp from "@/components/SelectComp";
export default {
  name: "Main",
  components: {SelectComp,Datepicker},
  data: ()=>({
    allReview: {
      options: [
        { name: 'All reviews' },
        { name: '2-Hour Surfing Experience for Beginners in Famara (21374137)' },
      ]
    }
  }),
  methods: {
    hideRating() {
      this.$refs.hide.classList.toggle('hide')
    },
  }
}
</script>