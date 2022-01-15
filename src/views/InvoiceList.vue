<template>
  <div class="container mx-auto">
    <h4>110年12月</h4>
    <p>共{{ invoices.length }}張發票，總金額{{ totalPrice }}元</p>
    <div
      class="row"
      v-for="(invoice, index) in invoices"
      :key="index"
    >
      <div class="col-1">載具</div>
      <div class="col-6">{{ invoice.invNum }}</div>
      <div class="col-5">{{ invoice.amount }}元</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InvoiceList',
  data() {
    return { 
      invoices: [], 
      }
  },
  mounted() {
    axios
      .get('http://localhost:3000/invoices/')
      .then((res) => {
        this.invoices = res.data
        console.log(res.data, this.invoices)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {
    totalPrice() {
      let total = 0
      this.invoices.forEach((item) => {
        if (item.amount) total += item.amount
      })
      return total
    },
  },
}
</script>
