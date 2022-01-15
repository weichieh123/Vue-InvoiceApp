<template>
  <div id="add-invoive" class="col-10 mx-auto">
    <div class="row mb-3">
      <div class="col-12">
        <h4>發票號碼</h4>
      </div>
      <div class="col-4">
        <input type="text" placeholder="大寫英文" v-model="invNumFront" />
      </div>
      <div class="col-8">
        <input type="text" placeholder="8碼發票號碼" v-model="invNumBack" />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <h4>開立時間</h4>
      </div>
      <div class="col-4">
        <input type="text" placeholder="西元年" v-model="invTimeY" />
      </div>
      <div class="col-4">
        <input type="text" placeholder="月份" v-model="invTimeM" />
      </div>
      <div class="col-4">
        <input type="text" placeholder="日期" v-model="invTimeD" />
      </div>
    </div>
    <button type="button" class="btn mt-3" @click="handleSubmit">提交</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddInvoice',
  data() {
    return {
      invNumFront: '',
      invNumBack: '',
      invTimeY: '',
      invTimeM: '',
      invTimeD: ''
    }
  },
  methods: {
    handleSubmit(){
      if(this.invNumFront && this.invNumBack && this.invTimeY && this.invTimeM && this.invTimeD) {
        // 按下新增的時候就直接post了,還有id重複的問題,考慮用uuid
        let today = new Date()
        let milliseconds = today.getUTCMilliseconds()

        axios.post('http://localhost:3000/invoices/', {
        id: milliseconds,
        invNum: this.invNumFront+this.invNumBack,
        time: `${this.invTimeY}-${this.invTimeM}-${this.invTimeD}`,
        status: '驗證中',
      })
      .then((res) => {
        this.invoices = res.data
        console.log('POST', res.data, this.invoices)
      })
      .catch((error) => {
        console.log(error)
      })
        this.$router.push({
          name: 'InvoiceList',
          // params: {
          //   id: milliseconds,
          //   invNum: this.invNumFront+this.invNumBack,
          //   time: `${this.invTimeY}-${this.invTimeM}-${this.invTimeD}`
          // }
        })
        console.log(milliseconds, this.invNumFront+this.invNumBack, `${this.invTimeY}-${this.invTimeM}-${this.invTimeD}` )
      }
      
    }
  }
}
</script>