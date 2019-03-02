<template>
 <div>
  <div class="row">
    <stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></stock>
  </div>
 </div>
</template>

<script>
  import Stock from './Stock'
    export default {
        name: "Stocks",
      components: {
        Stock
      },
      data(){
        return {
          stocks: [
            {id: 1, name: 'BMW', price: 110},
            {id: 2, name: 'Google', price: 100},
            {id: 3, name: 'Car', price: 200},
            {id: 4, name: 'Good', price: 250}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
