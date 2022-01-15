<template>
  <div id="invoice-list-item" class="row" @click="$emit('toggle')">
    <div class="col-1 d-flex flex-column">
      <div class="date">{{ toMMDD(invoice.time) }}</div>
      <div class="tag">載具</div>
    </div>
    <div class="col-8">
      <div class="seller">
        {{ invoice.sellerName ? invoice.sellerName : invoice.invNum }}
      </div>
      <div class="first-item">
        {{ invoice.details ? invoice.details[0].description : '無店家資料' }}
      </div>
    </div>
    <div class="col-3">{{ invoice.amount ? invoice.amount : '--' }}元</div>
  </div>
</template>


<script>
import moment from 'moment'
export default {
  name: 'InvoiceListItem',
  props:["invoice"],
   
  methods: {
    toMMDD(date) {
      let YearMonthDay = moment(date).format('YYYY/MM/DD')
      let Month = moment(YearMonthDay).format('M')
      let Day = moment(YearMonthDay).format('D')
      console.log('YearMonthDay', YearMonthDay)
      return `${Month}/${Day}`
    },
    toggleDetailModal() {
      this.showDetailModal = !this.showDetailModal
    },
  },
}
</script>
