<template>
  <div>
    <div class="list__item">
      <div class="block block_space_xxl">
        <div class="big-title">Do you need any extra information from travelers?</div>
        <div class="block block_space_xl">
          Here's what we'll collect automatically:
        </div>
        <div class="collect-auto-text">
          <p>Lead Traveler's Name</p>
          <p class="collect-auto-text__text">(first and last name)</p>
        </div>
        <div class="collect-auto-text">
          <p>Phone Number</p>
          <a href="javascript:;"><img src="assets/images/question-mark.svg" alt=""></a>
          <p class="collect-auto-text__text">(including country code)</p>
        </div>
      </div>
    </div>
    <div class="block block_space_xxl">
      <div class="text">
        Select any personal information you need from all travelers:
      </div>
      <div class="warning">
        <p>
          Tip: Travelers are less likely to book if they have to
          enter lots of information. Only select what's absolutely necessary.
        </p>
      </div>
      <div class="block block_space_xxl">
        <label class="option check check_booking">
          <input class="check__input" type="checkbox" v-model="needFromTravelers.fullName">
          <span class="check__box"></span>
          Full Names
        </label>
        <p class="prompt prompt_booking">
          (first and last name of each traveler)
        </p>
        <label class="option check check_booking">
          <input class="check__input" type="checkbox" v-model="needFromTravelers.weights">
          <span class="check__box"></span>
          Weights
        </label>
        <label class="option check check_booking">
          <input class="check__input" type="checkbox" v-model="needFromTravelers.heights">
          <span class="check__box"></span>
          Heights
        </label>
        <label class="option check check_booking">
          <input class="check__input" type="checkbox" v-model="needFromTravelers.datesOfBirth">
          <span class="check__box"></span>
          Dates of Birth
        </label>
        <label class="option check check_booking">
          <input class="check__input" type="checkbox" v-model="needFromTravelers.passportDetails">
          <span class="check__box"></span>
          Passport Details
        </label>
        <div class="prompt prompt_booking">
            (passport number, country, expiration date)
            <div class="block block_space_x prompt__text" v-if="needFromTravelers.passportDetails">
              <label class="option check check_booking">
                <input class="check__input" type="radio" v-model="pasportDetails" value="We need passport details before the day of travel">
                <span class="check__box check__box_circle"></span>
                We need passport details before the day of travel
              </label>
              <label class="option check check_booking">
                <input class="check__input" type="radio" v-model="pasportDetails" value="We just need to see passports on the day of travel">
                <span class="check__box check__box_circle"></span>
                We just need to see passports on the day of travel
              </label>
              <label class="option check check_booking">
                <input class="check__input" type="radio" v-model="pasportDetails" value="We need passport details in advance and we need to see passports on the day of travel">
                <span class="check__box check__box_circle"></span>
                We need passport details in advance and we need to see passports on the day of travel
              </label>
            </div>
          </div>

        <div class="block" v-if="seeMore">
          <div class="block block_space_xl">
            <div class="block block_space_x">
              <b>Select any arrival/departure information you need:</b>
            </div>
            <div class="block block_space_x">
              <b>Flight Information</b>
            </div>
            <label class="option check check_booking">
              <input class="check__input" type="checkbox">
              <span class="check__box"></span>
              Arrival Flight Details
            </label>
            <p class="prompt prompt_booking">
              (passport number, country, expiration date)
            </p>
            <label class="option check check_booking">
              <input class="check__input" type="checkbox">
              <span class="check__box"></span>
              Departure Flight Details
            </label>
            <p class="prompt prompt_booking">
              (airline, flight number, time)
            </p>
          </div>
          <div class="block block_space_xl">
            <div class="block block_space_x">
              <b>Ship Information</b>
            </div>
            <label class="option check check_booking">
              <input class="check__input" type="checkbox">
              <span class="check__box"></span>
              Arrival Ship Details
            </label>
            <p class="prompt prompt_booking">
              (ship name, disembarkation time)
            </p>
            <label class="option check check_booking">
              <input class="check__input" type="checkbox">
              <span class="check__box"></span>
              Departure Ship Details
            </label>
            <p class="prompt prompt_booking">
              (ship name, boarding time)
            </p>
            <label class="option check check_booking">
              <input class="check__input" type="checkbox">
              <span class="check__box"></span>
              Shore Excursion Details
            </label>
            <p class="prompt prompt_booking">
              (ship name, disembarkation and boarding times)
            </p>
          </div>
        </div>
        <button :class="{'see-more-btn': true, 'see-more-open': seeMore, 'see-more-close': !seeMore,}" @click="toggleMore">See more</button>
        </div>
    </div>
    <div class="save__ccontinue">
      <router-link to="/product/booking" class="btn-save">Save &amp; continue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoFromTravlers",
  data: ()=>({
    seeMore: false,
    needFromTravelers: {
      fullName: false,
      weights: false,
      heights: false,
      datesOfBirth: false,
      passportDetails: false
    },
    pasportDetails: ''
  }),
  methods: {
    toggleMore() {
      if (this.seeMore) {
        this.seeMore = false
      } else {
        this.seeMore = true
      }
    }
  }
}
</script>