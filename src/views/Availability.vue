<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="list__item-main-content">
          <div class="availability__item-content">
            <div class="availability__item-col1">
              <div class="big-title">Availability</div>
              <div class="text">
                Choose "Sold out" if all spots are filled.
                Or, choose "Not operating" if you're canceling
                some/all products, product options,
                or times on a particular day.
              </div>
              <div class="discount__item-content">
                <datepicker input-class="input elem_w_200"></datepicker>
                <div class="availability-search-block">
                  <div class="discount__item-products" @click="toggleHuita">
                    <p>All products</p>
                    <p class="products-amount">(0)</p>
                  </div>
                  <div class="all-products-block" v-if="huita">
                    <input type="text" class="input option">
                    <div class="availability-search-result">
                      <input type="checkbox" id="search-select-all" checked="">
                      <label for="search-select-all">Select all</label>
                    </div>
                    <div class="all-product-footer">
                      <a href="javascript:;" class="btn btn-cancel-modal">Clear all</a>
                      <a href="javascript:;" class="btn-save" id="special-offer-next1">Save</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="availability__item-col2">
              <div class="list__item availability__list-item2">
                <div class="list__item-content">
                  <div class="warning availability-warning">
                    <div class="text">
                      What's the difference between "Sold Out"
                      and "Not Operating"? <br> <br>
                      "Sold Out" and "Not Operating" are settings
                      you’ll find in the Availability tab of the
                      Management Center. Both of these settings
                      can be used to stop accepting new bookings
                      on a particular date—whether it’s for all
                      of your products on that date, or just one
                      product or product option.
                      <br> <br>
                      Here’s how they’re different:
                      <br> <br>
                      Choose "Sold Out" if all of the spots are
                      filled. This means there’s no room for
                      additional travelers, but you’re still
                      operating and will honor all existing bookings.
                      Choose "Not Operating" if you’re
                      canceling some or all products or product
                      options on a particular date. For example,
                      you’d choose "Not Operating" if you’re
                      canceling due to bad weather or if you’re
                      closed for a public holiday.
                      Please note: If you choose “Not Operating”
                      and already have existing bookings,
                      an email will be automatically sent to
                      the Travelers asking if they would like
                      to select an alternative date or receive
                      a full refund.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "Availability",
  components: {
    Datepicker
  },
  data: ()=>({
    huita: false,
  }),
  methods: {
    toggleHuita() {
      if (this.huita) {
        this.huita = false
      } else {
        this.huita = true
      }
    },
  },
}
</script>