<template>
  <div id="my-modal" class="modal-mask">
    <div class="modal-container" @click.self="$emit('toggle')">
      <div class="modal-header d-flex flex-column">
        <div class="title">
          {{ item.invNum }}
        </div>
        <small class="text-secondary">{{ item.time }}</small>
        <small>{{ item.sellerName }}</small>
      </div>
      <div class="modal-body">
          <div class="row">
          <div class="col-6">品項</div>
          <div class="col-2">數量</div>
          <div class="col-2">單價</div>
          <div class="col-2">小計</div>
        </div>
        <MyModalItem v-for="(detail, index) in item.details" :key="index" :detail="detail" />
      </div>
      <div class="modal-footer">總金額{{item.amount}}元</div>
    </div>
  </div>
</template>

<script>
import MyModalItem from './MyModalItem.vue'

export default {
  name: 'MyModal',
  props: ['item'],
  components: {
      MyModalItem,
  }
}
</script>
