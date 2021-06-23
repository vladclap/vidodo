<template>
  <div class="list">
    <div class="row">
      <div class="col">
        <div class="list__item">
          <div class="list__item-content">
            <div class="big-title">Add an intro offer to your new product</div>
            <div class="text travels-info-text">
              <b>Why should you add an intro offer?</b>
            </div>
            <ul class="dot dot-orange offers-ul">
              <li>
                You can stand out: <br>
                compared to similar offerings,
                lower-priced products receive their
                first booking nearly twice as fast
              </li>
              <li>
                You’ll reach more travelers: <br>
                products with intro offers get
                prime placement on our site and
                marketing campaigns
              </li>
            </ul>
            <div class="text travels-info-text">
              <b>What you should know about intro offers:</b>
            </div>
            <ul class="dot dot-orange offers-ul">
              <li>
                While the intro offer is active,
                you cannot make changes that would
                impact your pre-discount price
              </li>
              <li>
                Once your intro offer expires or is canceled,
                your prices cannot be lower than your
                pre-discount price for the next 30 days
              </li>
              <li class="prompt">
                Learn more
              </li>
            </ul>
            <div class="text travels-info-text title-radio">
              <b>Do you want us to add an intro offer?</b>
            </div>
            <div class="list__item-radio">
              <input class="radio-intro" type="radio" id="intro-offer-yes" name="accompanied-by-radio">
              <label for="intro-offer-yes">Yes, add intro offer</label>
            </div>
            <div class="list__item-radio">
              <input class="radio-intro" type="radio" id="intro-offer-no" name="accompanied-by-radio" checked="">
              <label for="intro-offer-no">No thanks, skip</label>
            </div>
            <p class="prompt">
              If you change your mind, you can always
              add an offer in the Special offers tab.
            </p>
            <div id="offer-details">
              <div class="text">
                <b>Offer details</b>
              </div>
              <div class="offer-details-content">
                <div class="text">
                  <b>Booking dates:</b> Dec 15, 2020 - Jan 13, 2021
                  <br>
                  <b>Discount:</b> 20%
                </div>
                <a href="javascript:;" id="edit-specail-offer"><img :src="require('@/assets/img/edit.svg')" alt="edit"></a>
              </div>
            </div>
            <div class="save__ccontinue">
              <router-link to="/product" class="btn-save">Save &amp; continue</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="list__item">
          <div class="list__item-content">
            <div class="special-offer-sentence">
              <div class="special-offer-sentence-img"></div>
              <div class="special-offer-sentence-content">
                <div class="text">
                  <b>Surfing Experience for Beginners in Famara</b>
                </div>
                <div class="text">
                  <p class="prompt">from</p>
                  <p class="old-price">22,44 €</p>
                  <p class="new-price">15,32 €</p>
                  <p class="price-diff">7,44 € savings</p>
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
export default {
name: "SpecialOffers"
}
</script>