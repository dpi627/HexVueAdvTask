<template>
  <h2 class="mb-3">商品列表</h2>
  <div v-if="products.length" class="row">
    <div v-for="prodcut in products" :key="prodcut.id" class="col-md-4 mb-4">
      <div class="card h-100">
        <img :src="prodcut.image" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ prodcut.name }}</h5>
          <p class="card-text text-secondary">{{ prodcut.description }}</p>
          <p class="d-flex justify-content-between align-items-end">
            <span class="fw-bold text-primary">$ {{ formatPrice(prodcut.price) }}</span>
            <small class="text-end text-muted">
              庫存:
              <span :class="prodcut.stock < 5 ? 'text-danger' : ''">
                {{ prodcut.stock }}
              </span>
            </small>
          </p>
          <button @click.prevent="cartAdd(prodcut)" :disabled="prodcut.stock === 0" class="btn btn-success w-100">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="alert alert-secondary text-center">
    查無商品資料
  </div>
</template>

<script setup>
import { defineProps, inject } from 'vue' // 可省略但建議加上
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/utils/priceFormatter'

// 定義 props 類型與預設值
defineProps({
  products: {
    type: Array,
    default: () => []
  }
})
// defineProps(['products']) // 可用縮寫(不指定類型)

const cart = useCartStore()

const cartAdd = (product) => {
  product.stock--
  cart.add(product)
  notifyAdd(product)
}

// 定義注入的變數或方法，給定預設值避免異常
const notifyAdd = inject('notifyAdd', () => { })
</script>

<style scoped>
.card-img-top {
  height: 150px;
  object-fit: cover;
}
</style>
