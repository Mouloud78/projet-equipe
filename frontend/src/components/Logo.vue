<template>
  <div class="logo">
    <img src="../assets/img/logo3.svg" alt="logo" />
    <h1 class="logo-titre">Catalogue des vins</h1>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
}
</style>