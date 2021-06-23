<template>
  <div>
    <router-link to="/new-product" class="btn btn_primary btn_big">
      Create new product
    </router-link>
    <div class="block">
      <router-link to="/product/test" class="btn btn_primary btn_big">
        Open test product
      </router-link>
    </div>
    <div class="block">
      <router-link to="/components" class="btn btn_primary btn_big">
        Open page with components
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>