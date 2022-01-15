<template>
  <div id="invoice-list" class="container mx-auto">
    <div class="text-center">
      {{ id }}{{ invNum }}{{ time }}
      <h4>110年12月</h4>
      <p>共{{ invoices.length }}張發票，總金額{{ totalPrice }}元</p>
    </div>

    <InvoiceListItem
      v-for="(invoice, index) in invoices"
      :key="index"
      :invoice="invoice"
      @toggle="toggleDetailModal(index)"
    />
    <MyModal
      v-if="showDetailModal"
      @toggle="toggleDetailModal"
      :item="invoices[modalInvIndex]"
    />
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
  //   id: { type: String, default: '66' },
  //   invNum: { type: String, default: 'UU12345678' },
  //   time: { type: String, default: '1994-06-12' },
  // },
  data() {
    return {
      invoices: [],
      showDetailModal: false,
      modalInvIndex: 0,
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
        console.log('GET:', res.data, this.invoices)
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
    toggleDetailModal(index) {
      this.showDetailModal = !this.showDetailModal
      this.modalInvIndex = index
      console.log(this.modalInvIndex)
    },
    // addInvoiceHandler() {
    //   axios.post('http://localhost:3000/invoices/', {
    //     id: this.id,
    //     invNum: this.invNum,
    //     time: this.time,
    //     status: '驗證中',
    //   })
    //   .then((res) => {
    //     this.invoices = res.data
    //     console.log('POST', res.data, this.invoices)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // },
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
  // watch: {
  //   // 目標是想要在導回list頁面時做新增，但這樣好像很怪，可能還是要直接在Add頁面post新增
  //   $route() {
  //     this.$nextTick(this.addInvoiceHandler)
  //   },
  // },
}
</script>
