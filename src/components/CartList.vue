<template>
  <h2 class="mb-3">購物車</h2>
  <template v-if="cart.totalCount">
    <ul class="list-group mb-3">
      <li v-for="item in cart.items" :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img :src="item.image" :alt="item.name" class="cart-item-thumbnail me-3">
          <div>
            <h6 class="my-0">{{ item.name }}</h6>
            <small class="text-muted">數量：{{ item.quantity }}</small>
          </div>
        </div>
        <div>
          <span class="text-muted">$ {{ formatPrice(item.subtotal) }}</span>
          <button @click.prevent="cartRemove(item)" class="btn btn-sm btn-outline-danger ms-2">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </div>
      </li>
    </ul>
    <div class="text-end">
      <h5>總金額：<span class="text-success">{{ formatPrice(cart.totalPrice) }}</span></h5>
    </div>
  </template>
  <div v-else class="alert alert-success text-center text-success">
    未選擇商品
  </div>
</template>

<script setup>
import { defineEmits } from 'vue' // 可省略但建議加上
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/utils/priceFormatter'
import Swal from 'sweetalert2'

const cart = useCartStore()

// 宣告 emits 與其中事件名稱 return-stock
const emits = defineEmits(['return-stock'])

const cartRemove = (item) => {
  Swal.fire({
    title: '確定移除',
    text: `移除商品：${item.name}`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '移除',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      cart.remove(item)
      emits('return-stock', item) // 設定事件(名稱)與對應資料
    }
  })
}
</script>

<style scoped>
.cart-item-thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #dee2e6;
}
</style>
