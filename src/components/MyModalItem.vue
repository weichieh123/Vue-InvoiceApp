<template>
    <div>
        <div class="row">
          <div class="col-6">{{detail.description}}</div>
          <div class="col-2">{{detail.quantity}}</div>
          <div class="col-2">{{detail.unitPrice}}</div>
          <div class="col-2">{{detail.amount}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyModalItem',
    props: ['detail']
}
</script>