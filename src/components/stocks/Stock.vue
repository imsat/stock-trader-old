<template>
    <div class="col-sm-6 col-md-4">
      <div class="card " >
        <div class="card-header bg-success">
          <div class="">
          <h4 class="card-title">{{stock.name}} <small>(Price: {{stock.price}})</small></h4>
          </div>

        </div>
        <div class="card-body">
          <!--<p class="card-text"></p>-->
          <div class="form-group row">
            <input
              v-model="quantity"
              type="number"
              class="col-sm-6 form-control float-left"
              placeholder="Quantity"
            >
            <div class="col-sm-6">
              <button
                @click.prevent="buyStock"
                :disabled="quantity <= 0 || Number.isInteger(quantity)"
                class="btn btn-primary btn-sm float-right"
              >Buy</button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
      data(){
          return {
            quantity: 0
          }
      },
      methods: {
        buyStock(){
          const order = {
            stockid: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          }
          console.log(order)
          this.quantity = 0
        }
      }
    }
</script>

<style scoped>

</style>
