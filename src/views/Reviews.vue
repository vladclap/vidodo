<template>
  <div class="tab">
    <ul class="tab__list tab__list-reviews">
      <router-link to="/reviews" class="tab__link" active-class="active" exact>Manage reviews</router-link>
      <router-link to="/reviews/request" class="tab__link" active-class="active" exact>Request reviews</router-link>
      <li class="tab__link">Review widgets</li>
    </ul>
    <div class="tab__content-area">
      <div class="tab__content active">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews"
}
</script>