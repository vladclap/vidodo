<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="big-title title">Add details about your ticket redemption</div>
        <div class="choices">
          <div class="text">
            Do travelers use a separate entry ticket?
          </div>
          <select-comp v-model="separate"></select-comp>
        </div>
        <div class="instruction-add">
          <p class="optional">Add or edit ticket redemption instructions</p>
          <textarea class="ticket-textarea" name="" id="" cols="30" rows="10" v-model="instructions"></textarea>
          <p class="prompt textarea-prompt" v-if="$v.instructions.maxLength">{{ 2000 - instructions.length }} characters remaining</p>
          <p class="text_small text_warning" v-if="!$v.instructions.maxLength && $v.instructions.$dirty">2000 characters is max. {{instructions.length}} written</p>
        </div>
      </div>
    </div>
    <div class="save__ccontinue">
      <a href="javascript:;" @click="save" class="btn-save">Save &amp; continue</a>
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp";
import { maxLength } from 'vuelidate/lib/validators'
export default {
  name: "Redemption",
  components: { SelectComp },
  data: ()=>({
    instructions: '',
    separate: {
      options: [
        { name: 'No, this is a direct entry ticket' },
        { name: 'Yes, they will have to exchange this ticket for a direct entry ticket' },
        { name: 'Yes, they will have a direct entry ticket delivered to them' },
      ]
    }
  }),
  validations: {
    instructions: { maxLength: maxLength(2000) }
  },
  methods: {
    save() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return false
      }
      this.$router.push({ path: '/product/tickets' })
    }
  }
}
</script>