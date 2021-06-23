<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <div class="header__main">
        <router-link to="/">
          <img class="logo" src="../assets/img/logo.svg">
        </router-link>
        <nav>
          <ul class="header__menu">
            <li class="header__menu-item">
              <router-link class="header__menu-link" to="/product" active-class="active">Product</router-link>
            </li>
            <li class="header__menu-item">
              <router-link class="header__menu-link" to="/payout" active-class="active">Finance</router-link>
            </li>
            <li class="header__menu-item">
              <router-link class="header__menu-link" to="/availability" active-class="active">Availability</router-link>
            </li>
            <li class="header__menu-item">
              <router-link class="header__menu-link" to="/reviews" active-class="active">Reviews</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__side">
        <select-comp v-model="lang" class="select-wrapper_user"></select-comp>
      </div>
    </div>
  </header>
</template>

<script>
import SelectComp from "@/components/SelectComp";
export default {
  name: "TopBar",
  components: { SelectComp },
  data: ()=>({
    lang: {
      options: [
        { name: 'eng', selected: true },
        { name: 'ru' },
      ],
    }
  }),
}
</script>