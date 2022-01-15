<template>
  <div id="invoice-list" class="container mx-auto">
    <h4>110年12月</h4>
    <p>共{{ invoices.length }}張發票，總金額{{ totalPrice }}元</p>
    <div class="row" v-for="(invoice, index) in invoices" :key="index">
      <div class="col-1 d-flex flex-column">
        <div class="date">{{ toMMDD(invoice.time) }}</div>
        <div class="tag">載具</div>
      </div>
      <div class="col-6 text-start">
        <div class="seller">
          {{ invoice.sellerName ? invoice.sellerName : invoice.invNum }}
        </div>
        <div class="first-item">
          {{ invoice.details ? invoice.details[0].description : '無店家資料' }}
        </div>
      </div>
      <div class="col-5">{{ invoice.amount ? invoice.amount : '--' }}元</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
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
  methods: {
    toMMDD(date) {
      let YearMonthDay = moment(date).format('YYYY/MM/DD')
      let Month = moment(YearMonthDay).format('M')
      let Day = moment(YearMonthDay).format('D')
      console.log('YearMonthDay', YearMonthDay)
      return `${Month}/${Day}`
    },
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
