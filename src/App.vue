<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
       <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/Header'
export default {
  name: 'App',
  components: {AppHeader}
}
</script>

<style>
body{
  padding: 30px
}
</style>
