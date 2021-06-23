<template>
  <div :class="{'two-side': true, 'active': side}">
    <div class="two-side__front" @click="openSecondSide">
      <slot name="front"></slot>
    </div>
    <div class="two-side__back">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoSide",
  data: ()=>({
    side: 0
  }),
  methods: {
    openSecondSide() {
      this.side = 1
    }
  }
}
</script>