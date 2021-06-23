<template>
  <div>
    <router-link to="/product" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Tell us how and where you meet your travelers
    </h1>
    <info-comp>
      <div class="info-block__text block">
        <b>Did you know?</b>
      </div>
      <div class="info-block__text block">
        Travelers want to book products with accurate pickup locations so they can plan their day. Adding specific meeting and pickup points will help them find your product.
      </div>
    </info-comp>
    <div class="block block_space_xxl">
      <div class="block">
        <b>How do you meet your travelers?</b>
      </div>
      <div class="block elem_w_750">
        <select-comp v-model="howDoYouMeet"></select-comp>
      </div>
    </div>
    <div class="block block_space_xxl" v-if="howDoYouMeet.selected != 2">
      <div class="block block_space_xxl">
        <h2 class="page-title">
          Now tell us where you pick up travelers
        </h2>
        <yes-no v-model="where" type="checkbox" title="Where do you pick up your travelers?"></yes-no>
      </div>
      <div class="option-group block_space_xl">
        <div class="option-title">How do you want to enter you hotel pickup information</div>
        <label class="option check">
          <input class="check__input" type="radio" v-model="pickupInfo" value="selectOnMap">
          <span class="check__box check__box_circle"></span>
          I want to define a general area of hotels I pick up from
          <span class="check__if-not-checked text_gray">
            I will select a radius in a city, neighborhood or specific address and pick up within that radius
          </span>
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="pickupInfo" value="addHotels">
          <span class="check__box check__box_circle"></span>
          I want to enter locations one at a time
          <span class="check__if-not-checked text_gray">
            I will add hotels individually
          </span>
        </label>
      </div>
      <div class="block block_space_xxl elem_w_750" v-if="pickupInfo == 'selectOnMap'">
        <div class="block block_space_xl row">
          <div class="col col_address">
            <b>Define the geographic area for hotel pickups</b>
          </div>
          <div class="col col_address-controls">
            <b>Radius</b>
          </div>
        </div>
        <div class="block row" v-for="(item, index) of addressPickups">
          <div class="col col_address">
            <map-input-autocomplete v-model="item.name" @place_changed="placeChanged($event, index)"></map-input-autocomplete>
          </div>
          <div class="col col_address-controls">
            <value-select @changed="radiusChanged(index)" v-model="item.radius"></value-select>
            <a href="javascript:;" class="col__x" @click="removeAnotherArea(index)"></a>
          </div>
        </div>
        <div class="block">
          <a href="javascript:;" class="text_acc" @click="addAnotherArea"><b>+Add another area</b></a>
        </div>
        <div class="block block_space_xl">
          <map-comp ref="mapWithRadius"></map-comp>
        </div>
      </div>
      <label class="block option check">
        <input class="check__input" type="checkbox">
        <span class="check__box"></span>
        Allow travelers to enter their own pickup location
        <span class="check__if-not-checked text_gray">
          Do not select this if you only pick up from the hotels you identified.
        </span>
      </label>
      <div class="block block_space_xxl">
        <b>How long befor departure does your pickup start?</b>
        <value-select></value-select>
      </div>
      <div class="block block_space_xxl">
        <div class="block">
          <b>Add pickup details you'd like travelers to know</b>
        </div>
        <div class="block">
          This will be displayed on both the product page and travelers' tickets.
        </div>
        <textarea class="elem_w_750" v-model="pickupDetails" placeholder="E.g. how to find the pickup location, how travelers can find you."></textarea>
      </div>
    </div>
    <div class="block block_space_xxl" v-if="howDoYouMeet.selected != 0">
      <div class="delimiter elem_w_750"></div>
      <div class="page-title block block_space_xxl">Where will you meet travelers that don’t require pickup?</div>
      <meeting-point v-model="meetingPoints"></meeting-point>
      <div class="option-group">
        <div class="option-title">Does this tour end at the same location(s) where it started?</div>
        <label class="option check">
          <input class="check__input" type="radio" v-model="endAtTheSameLocation" :value="true">
          <span class="check__box check__box_circle"></span>
          Yes
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="endAtTheSameLocation" :value="false">
          <span class="check__box check__box_circle"></span>
          No
        </label>
      </div>
    </div>
    <router-link to="/product" class="btn btn_primary btn_big btn_text_regular">
      Save &amp; continue
    </router-link>
  </div>
</template>

<script>
import AddAnother from "@/components/AddAnother";
import MapInputAutocomplete from "@/components/MapInputAutocomplete";
import MapComp from "@/components/MapComp";
import MeetingPoint from "@/components/MeetingPoint";
import ValueSelect from "@/components/ValueSelect";
import InfoComp from "@/components/InfoComp";
import SelectComp from "@/components/SelectComp";
import YesNo from "@/components/YesNo";

export default {
  name: "Meetings",
  components: {InfoComp, SelectComp, YesNo, ValueSelect, MeetingPoint, MapComp, MapInputAutocomplete, AddAnother},
  data: ()=>({
    meetingPoints: [
      {
        name: 'text',
        description: 'Briefly describe how travelers will find you, e.g., “across the street from the bus stop.”'
      }
    ],
    endAtTheSameLocation: null,
    pickupDetails: '',
    pickupInfo: '',
    addressPickups: [
      {
        address: null,
        radius: {
          type: 'radius',
          value: 0
        },
      }
    ],
    howDoYouMeet: {
      options: [
        { name: 'We pickup all travelers', value: 'We pickup all travelers' },
        { name: 'We can pick up travelers or meet them at a starting point', value: 'We can pick up travelers or meet them at a starting point' },
        { name: 'We meet all travelers at a starting point', value: 'We meet all travelers at a starting point' },
      ],
      selected: []
    },
    where: [
      { name: 'Hotels' },
      { name: 'Ports' },
      { name: 'Airports' },
      { name: 'Other' },
    ],
    map: {

    },
  }),
  methods: {
    addAnotherArea() {
      this.addressPickups.push({
        address: null,
        radius: {
          type: 'radius',
          value: 0
        },
      })
    },
    removeAnotherArea(idx) {
      this.addressPickups.splice(idx, 1)
    },
    placeChanged(payload, index) {
      this.map[index] = payload
      this.$refs.mapWithRadius.newMapPoint(payload, index, +this.addressPickups[index].radius.value)
    },
    radiusChanged(index) {
      if (this.map[index]) {
        this.$refs.mapWithRadius.newMapPoint(this.map[index], index, +this.addressPickups[index].radius.value)
      }
    }
  },
}
</script>