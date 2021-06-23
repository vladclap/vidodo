<template>
  <div>
    <h1 class="page-title">
      What’s included and not included?
    </h1>
    <div class="block text_lh_15 elem_w_750">
      Let travelers know what is and what isn’t provided to help them understand what they’re paying for. Include items such as food and drinks, special equipment, and admission fees.
      <div class="show"></div>
    </div>
    <div class="block block_space_xxl">
      <provide-list v-model="included"></provide-list>
    </div>
    <div class="block block_space_xxl">
      <provide-list v-model="excluded"></provide-list>
    </div>
    <a href="javascript:;" @click="save" class="btn btn_primary btn_text_regular">
      Save &amp; continue
    </a>
  </div>
</template>

<script>
import ProvideList from "@/components/ProvideList";
export default {
  name: "Provide",
  components: {ProvideList},
  methods: {
    currentEvent() {
      return this.$store.state.event.currentEvent
    },
    save() {
      this.$store.state.event.events[this.currentEvent()].included = this.included.list
      this.$store.state.event.events[this.currentEvent()].excluded = this.excluded.list
    }
  },
  data: ()=>({
    included: {
      type: 'included',
      list: [
        { name: 'included 1' },
        { name: 'included 2' },
        { name: 'included 3' },
      ]
    },
    excluded: {
      type: 'excluded',
      list: [
        { name: 'excluded 1' },
        { name: 'excluded 2' },
        { name: 'excluded 3' },
      ]
    },
  }),
  mounted() {

  }
}
</script>

<style scoped>

</style>