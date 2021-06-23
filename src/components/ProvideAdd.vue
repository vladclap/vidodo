<template>
  <div class="popup">
    <div class="page-title">
      Add an {{ (type == 'included') ? 'inclusion' : 'exclusion' }}
    </div>
    <div class="block text_lh_11">Make your list precise so travelers understand the value of this experience. Don’t add more than 10 items and avoid duplicates.</div>
    <div class="block block_space_xl">
      <div class="block">
        Category
      </div>
      <select-comp v-model="categorySelect"></select-comp>
      <div class="block" v-if="categorySelect.selected == 3 || categorySelect.selected == 4">
        <div class="info-block">
          <div class="info-block__text text">
            Be careful when adding your own inclusions! Don’t add information travelers can find elsewhere, such as the duration of your experience, discounts, or languages offered.            </div>
        </div>
      </div>
    </div>
    <div class="block block_space_xxl">
      <div class="block">
        Title
      </div>
      <select-comp v-model="selectTitle"></select-comp>
      <p class="text_small text_warning" v-if="$v.title.$dirty && !$v.title.required">Title is required</p>
    </div>
    <div class="popup__controls">
      <a href="javascript:;" @click="closePopup" class="btn btn_text_regular">
        Cancel
      </a>
      <a href="javascript:;" @click="addNew" class="btn btn_text_regular btn_primary">
        Add
      </a>
    </div>
  </div>
</template>

<script>
import SelectComp from '@/components/SelectComp'
import { required } from 'vuelidate/lib/validators'
import Bus from "@/popup/utils/bus";

export default {
  name: "ProvideAdd",
  props: {
    type: {
      type: String,
      default: 'included'
    }
  },
  components: { SelectComp },
  data: ()=>({
    title: '',
    categorySelect: {
      options: [
        { name: 'Food & drink', value: 'food' },
        { name: 'Use of Equipment', value: 'equipment' },
        { name: 'Transportation amenities', value: 'transportation' },
        { name: 'Fees', value: 'fees' },
        { name: 'Other', value: 'other' },
      ],
      selected: []
    },
    selectTitle: {
      options: [
        { name: 'title 1', value: '1' },
        { name: 'title 2', value: '2' },
      ],
      selected: [],
      selectedNames: []
    }
  }),
  watch: {
    'selectTitle.selectedNames': function (val) {
      this.title = val
    }
  },
  validations: {
    title: {
      required
    }
  },
  methods: {
    closePopup() {
      Bus.$emit('close')
    },
    addNew() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return false
      }
      Bus.$emit('close');
      if (this.type == 'included') {
        Bus.$emit('addIncluded', this.title);
      } else {
        Bus.$emit('addExcluded', this.title);
      }
    }
  },
}
</script>

<style scoped>

</style>