<template>
  <div id="app">
    <top-bar></top-bar>
    <main class="main">
      <div class="wrapper main__wrapper">
        <router-view/>
      </div>
    </main>
    <vu-modal-wrapper></vu-modal-wrapper>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import VuModalWrapper from "@/popup/modal-wrapper";

export default {
  name: 'App',
  components: {
    TopBar, VuModalWrapper
  },
  beforeCreate() {
    this.$store.dispatch('login', {
      "password": "123456787654321",
      "email": "w111sh1@yandex.ru",
    })
    .then(()=>{
      this.$store.dispatch('getMyEventList')
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/fonts/Gilroy/stylesheet";
@import "@/assets/styles/reset";
@import "@/assets/styles/main.sass";
</style>