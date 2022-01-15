<template>
  <div id="invoice-app">
    <div id="nav" class="d-flex justify-content-center">
      <router-link to="/">發票列表</router-link>
      <div class="mx-4">|</div>
      <router-link to="/add">新增</router-link>
    </div>
    <div class="mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invoice-App',
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import './styles/invoice.scss';
</style>
