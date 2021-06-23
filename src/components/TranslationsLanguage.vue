<template>
  <div>
    <div class="big-title title">
      Select a language to translate into
    </div>
    <div class="choices">
      <select-comp v-model="languages"></select-comp>
    </div>
    <div class="modal__footer-translate">
      <a href="javascript:;" @click="closePopup" class="btn btn-cancel-modal">Cancel</a>
      <a href="javascript:;" @click="ok" class="btn-save">Continue</a>
    </div>
  </div>
</template>

<script>
import Bus from '@/popup/utils/bus'
import SelectComp from "@/components/SelectComp";
import { required } from 'vuelidate/lib/validators'

export default {
  name: "TranslationsLanguage",
  components: { SelectComp },
  data: ()=>({
    lang: '',
    languages: {
      options: [
        { name: 'Spanish', selected: true },
        { name: 'not Spanish' },
      ],
      selectedNames: []
    }
  }),
  computed: {
    computedLang() {
      return this.languages.selectedNames[0]
    }
  },
  watch: {
    computedLang: function (val) {
      this.lang = val
    }
  },
  validations: {
    lang: {
      required
    }
  },
  methods: {
    closePopup() {
      Bus.$emit('close')
    },
    ok() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return false
      }
      Bus.$emit('langSelected', this.lang)
      Bus.$emit('close')
    }
  },
}
</script>