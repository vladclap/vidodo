<template>
  <div class="home">
    <select-comp v-model="selectProps"></select-comp>
    <br>
    <select-comp v-model="selectCategoriesProps" ></select-comp>
    <br>
    <checkbox-comp></checkbox-comp>
    <br>
    <phone-number v-model="phoneNumber"></phone-number>
    <br>
    <add-another @add="add($event)"></add-another>
    <br>
    <datepicker input-class="input elem_w_200"></datepicker>
    <br>
    <tabs>
      <tab name="First tab">
        <div class="block">
          First tab content
          <div class="poppp">

          </div>
        </div>
      </tab>
      <tab name="Second tab">
        <div class="block">
          Second tab content
        </div>
      </tab>
      <tab name="Third tab">
        <div class="block">
          Third tab content
        </div>
      </tab>
    </tabs>
    <br>
    <info-comp>
      <div class="info-block__text text">
        <b>Did you come back to edit your product type?</b>
        <br>
        The information you entered on later screens was tailored to the product type you originally chose. Instead of changing your product type
      </div>
    </info-comp>
    <br>
    <price-comp v-model="currency"></price-comp>
    <br>
    <pricing-block></pricing-block>
    <br>
    <product-type></product-type>
    <br>
    <map-comp></map-comp>
    <br>
    <value-select></value-select>
    <br>
    <people-counter></people-counter>
    <br>
    <week-comp v-model="weeks"></week-comp>
    <br>
<!--    <svg xmlns="http://www.w3.org/2000/svg" width="158.716" height="188" viewBox="0 0 158.716 188" fill="#bb4949">-->
<!--      <path id="Вычитание_2" data-name="Вычитание 2" d="M-362.96,194h-21l-15.4-35h-46.881l-5.509-16h45.391l-30.2-68.6-21.778,49.469L-466.831,99.2-446.359,54h19.8l63.6,140Z" transform="translate(520.56 -41)" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>-->
<!--      <path id="Контур_1" data-name="Контур 1" d="M808,61H786l66,188h22Z" transform="translate(-786 -61)"/>-->
<!--    </svg>-->
  </div>
</template>

<script>
import WeekComp from "@/components/WeekComp";
import YesNo from "@/components/YesNo";
import Tab from "@/components/Tab";
import PriceComp from "@/components/PriceComp";
import PeopleCounter from "@/components/PeopleCounter";
import ValueSelect from "@/components/ValueSelect";
import MapComp from "@/components/MapComp";
import ProductType from "@/components/ProductType";
import PricingBlock from "@/components/PricingBlock";
import InfoComp from "@/components/InfoComp";
import Tabs from "@/components/Tabs";
import MeetingPoint from "@/components/MeetingPoint";
import LanguagesComp from "@/components/LanguagesComp";
import SelectComp from "@/components/SelectComp";
import SliderComponent from "@/components/SliderComponent";
import CheckboxComp from "@/components/CheckboxComp";
import PhoneNumber from "@/components/PhoneNumber";
import AddAnother from "@/components/AddAnother";
import Datepicker from "vuejs-datepicker";

export default {
  name: 'Components',
  components: {
    YesNo, Tab, PriceComp, WeekComp, PeopleCounter, ValueSelect, MapComp, ProductType, PricingBlock, InfoComp, Tabs, MeetingPoint, LanguagesComp, SelectComp, SliderComponent, CheckboxComp, PhoneNumber, AddAnother, Datepicker
  },
  data: () => ({
    weeks: [],
    currency: {
      sum: 0,
      currency: 'eur'
    },
    popupState: false,
    selectProps: {
      options: [
        { name: 'Airport Transfer', value: 1 },
        { name: 'City', value: 2 },
        { name: 'Cruise', value: 3, selected: true },
        { name: 'Hop-on Hop-off', value: 4 },
      ],
      multi: true,
      search: true,
    },
    selectCategoriesProps: {
      categories: [
        { name: 'Category 1', value: 1 },
        { name: 'Category 2', value: 2 },
      ],
      options: [
        { name: 'option 1', value: 1, category: 1 },
        { name: 'option 2', value: 2, category: 1 },
        { name: 'option 3', value: 3, category: 2 },
        { name: 'option 4', value: 4, category: 2 },
      ],
      inputType: 'tags',
      multi: true,
    },
    phoneNumber: [ 35, 8005553535 ]
  }),
  methods: {
    optionSelect(data, i) {
      console.log(data)
      console.log(i)
    },
    add(data) {
      console.log(data)
    }
  },
}
</script>
