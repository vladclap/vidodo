<template>
  <div :class="{'select-wrapper': true, 'select-wrapper__opened': opened}" @click="openSelect" v-click-outside="hideSelect">
    <div class="select-wrapper__overlay" v-if="opened" @click="hideSelect($event)"></div>
    <span class="select-wrapper__preview-text" v-if="value.inputType == 'text' || selected.length == 0">{{ selectText }}</span>
    <div class="select-custom" v-else-if="value.inputType == 'tags'">
      <div class="select-custom__item" v-for="(item) of selected" @click="removeOption(item)">
        {{ value.options[item]['name'] }}
      </div>
    </div>
    <div class="select-wrapper__options">
      <div v-if="value.search" class="select-wrapper__search">
        <input v-model="searchReq" @input="search(searchReq)" type="text" class="input">
      </div>
      <div
        v-for="(category, index) in value.categories"
        :key="'c' + category.value"
        @click="categorySelect(index)"
        v-show="!selectedCategory"
        class="select-wrapper__option"
      >
        {{ category.name }}
      </div>
      <div
        v-show="typeof selectedCategory == 'number'"
        @click="categoryClose"
        class="select-wrapper__option select-wrapper__option_back"
      >
        close category
      </div>
      <div
        v-for="(option, index) in value.options"
        :key="option.value"
        @click="optionSelect(index, $event)"
        :class="{'select-wrapper__option': true,'select-wrapper__option_selected': option.selected}"
        v-show="option.searched && (selectedCategory === true || selectedCategory === option.category)"
      >
        {{ option.name }}
      </div>
    </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import SimpleComponent from '@/components/SimpleComponent'

export default {
  name: "SelectComp",
  watch: {
    selected: function (val) {
      this.value.selected = val
      this.value.selectedNames = this.getSelectedNames()
      this.$emit('selected', this.value.selectedNames)
    }
  },
  props: {
    value: {
      type: Object
    },
    placeholder: {
      type: String
    }
  },
  data: () => ({
    selected: [],
    opened: false,
    searchReq: '',
    selectedCategory: false
  }),
  components: { SimpleComponent },
  computed: {
    selectText() {
      if (this.selected.length > 0 && typeof this.selected == 'object') {
        let text = ''
        for (let item of this.selected) {
          if (text.length > 1) {
            text = `${text}, `
          }
          text = `${text}${this.value.options[item]['name']}`
        }
        return text
      } else if (this.placeholder) {
        return this.placeholder
      } else {
        if (this.value.multi) {
          return 'Pick one(or more)'
        }
        return 'Pick one'
      }
    }
  },
  methods: {
    // начал делать, понял что не нужно, доделывать не стал
    // selectByName(name) {
    //   for (let option in this.value.options) {
    //     if (this.value.options[option]['name'] == name) {
    //       console.log(option)
    //     }
    //   }
    // },
    getSelectedNames() {
      let selectedNames = []
      for (let i of this.selected) {
        selectedNames.push(this.value.options[i].name)
      }
      return selectedNames
    },
    search(req) {
      for (let option in this.value.options) {
        const str = this.value.options[option].name.toLowerCase()
        this.value.options[option].searched = null
        if(str.indexOf(req.toLowerCase()) + 1) {
          this.value.options[option].searched = true
        }
      }
    },
    addOption(data) {
      if (!this.value.multi) {
        for (let option in this.value.options) {
          this.value.options[option]['selected'] = false
        }
        this.selected = [data]
      } else {
        this.selected.push(data)
      }
      this.value.options[data]['selected'] = true
    },
    removeOption(data) {
      if (this.value.multi) {
        let index = this.selected.indexOf(data)
        if (index > -1) {
          this.selected.splice(index, 1)
        }
      } else {
        this.selected = []
      }
      this.value.options[data]['selected'] = false
    },
    categorySelect(data) {
      this.categoryClose()
      this.value.categories[data].selected = true
      this.selectedCategory = this.value.categories[data].value
    },
    categoryClose() {
      for (let category of this.value.categories) {
        category['selected'] = false
      }
      this.selectedCategory = false
    },
    categoryUnselect(data) {
      this.value.categories[data].selected = false
      this.selectedCategory = false
    },
    optionSelect(data, e) {
      if (this.value.options[data]['selected']) {
        this.removeOption(data)
      } else {
        this.addOption(data)
      }
      if (!this.value.multi) {
        this.hideSelect()
      }
      e.stopPropagation()
    },
    openSelect() {
      this.opened = true
    },
    hideSelect() {
      this.opened = false
    },
    toggleSelect() {
      if (this.opened) {
        this.opened = false
      } else {
        this.opened = true
      }
    },
  },
  created() {
    if (typeof this.value.multi == 'undefined') {
      this.value.multi = false
    }
    if (typeof this.value.category == 'undefined') {
      this.value.category = false
    }
    if (typeof this.value.listType == 'undefined') {
      this.value.listType = 'list'
    }
    if (typeof this.value.inputType == 'undefined') {
      this.value.inputType = 'text'
    }
    if (typeof this.value.search == 'undefined') {
      this.value.search = false
    }
    if (typeof this.value.categories !== 'undefined') {
      this.selectedCategory = false
    } else {
      this.selectedCategory = true
    }
    if (!this.value.selected) {
      this.value.selected = []
    }
    for (let option in this.value.options) {
      option = +option
      if (typeof this.value.options[option].selected == 'undefined') {
        this.$set(this.value.options[option], 'selected', false)
      } else if (this.value.options[option].selected == true) {
        this.addOption(option)
      }
      this.value.options[option].searched = true
    }
  },
  directives: {
    ClickOutside
  },
}
</script>