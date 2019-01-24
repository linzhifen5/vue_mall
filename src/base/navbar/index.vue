<template>
    <div>
      <div class="mine-navbar-left">
        <slot class="left"></slot>
      </div>
      <div class="mine-navbar-center">
        <slot class="center"></slot>
      </div>
      <div class="mine-navbar-right">
        <slot class="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MeNavbar"
    }
</script>

<style scoped>

</style>
