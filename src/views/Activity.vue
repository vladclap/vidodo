 <template>
  <div>
    <router-link to="/product" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Why should travelers book this tour?
    </h1>
    <div class="block block_space_xl">
      <div class="block">Briefly describe your proposal</div>
      <textarea class="option elem_w_555" v-model="proposal"></textarea>
    </div>
    <div class="block block_space_xl">
      <div class="option-group">
        <div class="option-title">
          Is this a private tour? <span class="img-text img-text_question"></span>
        </div>
        <label class="option check">
          <input class="check__input" type="radio" v-model="privateTour" :value="true">
          <span class="check__box check__box_circle"></span>
          Yes
        </label>
        <label class="option check">
          <input class="check__input" type="radio" v-model="privateTour" :value="false">
          <span class="check__box check__box_circle"></span>
          No
        </label>
      </div>
    </div>
    <div class="block block_space_xl">
      <div class="block">
        Enter the maximum number of travelers who can participate
      </div>
      <people-counter></people-counter>
    </div>
    <router-link to="product" class="btn btn_primary btn_big btn_text_regular">
      Save &amp; continue
    </router-link>
  </div>
</template>

<script>
import PeopleCounter from "@/components/PeopleCounter";

export default {
  name: "Activity",
  data: ()=>({
    proposal: '',
    privateTour: false
  }),
  components: {PeopleCounter}
}
</script>

<style scoped>

</style>