<template>
  <div>
    <h1 class="page-title">
      Why should travelers book this tour?
    </h1>
    <div class="block block_space_xl">
      <div class="block">Briefly describe your proposal</div>
      <textarea class="option elem_w_555">Our surf school in Famara was established in 2010 and, since 2014, every year we have been awarded with the Tripadvisor Certificate of Excellence!</textarea>
    </div>
    <div class="block block_space_xl">
      <div class="option-group">
        <div class="option-title">
          Is this a private tour? <span class="img-text img-text_question"></span>
        </div>
        <label class="option check">
          <input class="check__input" type="radio" v-model="private" :value="true">
          <span class="check__box check__box_circle"></span>
          Yes
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="private" :value="false">
          <span class="check__box check__box_circle"></span>
          No
        </label>
      </div>
    </div>
    <div class="block block_space_xl">
      <div class="block">
        Enter the maximum number of travelers who can participate
      </div>
      <div class="block">
        <input type="number" class="input option" v-model="maxTravelers">
      </div>
    </div>
    <router-link to="/product" class="btn btn_primary btn_big btn_text_regular">
      Save &amp; continue
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Unique",
  data: ()=>({
    private: null,
    maxTravelers: null
  }),
}
</script>