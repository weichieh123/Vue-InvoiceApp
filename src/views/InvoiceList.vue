<template>
  <div id="invoice-list" class="container mx-auto">
    <div class="text-center">
      <h4>110年12月</h4>
      <p>共{{ invoices.length }}張發票，總金額{{ totalPrice }}元</p>
    </div>

    <InvoiceListItem
      v-for="(invoice, index) in invoices"
      :key="index"
      :invoice="invoice"
      @toggle="toggleDetailModal"
    />
    <MyModal v-if="showDetailModal" />
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import InvoiceListItem from './InvoiceListItem.vue'
import MyModal from '../components/MyModal.vue'

export default {
  name: 'InvoiceList',
  // props: {
  //   invoices: {
  //     type: Array,
  //     default: function() {
  //       return []
  //     }
  //   }
  // },
  data() {
    return {
      invoices: [],
      showDetailModal: false,
    }
  },
  components: {
    InvoiceListItem,
    MyModal,
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
    toggleDetailModal() {
      this.showDetailModal = !this.showDetailModal
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
