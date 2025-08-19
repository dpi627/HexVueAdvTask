<template>
  <div id="app" class="container py-4">
    <div class="row">
      <!-- 商品列表區 -->
      <div class="col-md-8">
        <h2 class="mb-3">商品列表</h2>
        <div class="row">
          <div v-for="prodcut in products" :key="prodcut.id" class="col-md-4 mb-4">
            <div class="card h-100">
              <img :src="prodcut.image" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ prodcut.name }}</h5>
                <p class="card-text text-secondary">{{ prodcut.description }}</p>
                <p class="fw-bold text-primary">$ {{ formatter(prodcut.price) }}</p>
                <button @click.prevent="cartAdd(prodcut)" class="btn btn-success w-100"> 加入購物車 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 購物車區 -->
      <div class="col-md-4">
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
                <span class="text-muted">$ {{ item.subtotalDisplay }}</span>
                <button @click.prevent="cart.remove(item)" class="btn btn-sm btn-outline-danger ms-2">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </li>
          </ul>
          <div class="text-end">
            <h5>總金額：<span class="text-success">{{ cart.totalPriceDisplay }}</span></h5>
          </div>
        </template>
        <div v-else class="alert alert-success text-center text-success">
          未選擇商品
        </div>
      </div>
    </div>

    <!-- 通知容器 -->
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1050">
      <div v-for="product in notifyItems" :key="product.id"
        class="toast show align-items-center text-white bg-success border-0 mb-2 mt-2">
        <div class="d-flex align-items-center">
          <img :src="product.image" :alt="product.name" class="toast-thumbnail ms-2 me-1">
          <div class="toast-body">
            <span class="text-warning">{{ product.name }} </span>
            已加入購物車
          </div>
          <button @click.prevent="removeNotify(product)" type="button"
            class="btn-close btn-close-white me-2 m-auto"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

const cartAdd = (product) => {
  cart.add(product)
  addNotify(product)
}

const notifyItems = ref([]);

const addNotify = (product) => {
  notifyItems.value.push({
    ...product,
    id: new Date().getTime()
  });

  setTimeout(() => {
    notifyItems.value.shift()
  }, 3000)
}

const removeNotify = (product) => {
  const index = notifyItems.value.findIndex(item => item.id === product.id)
  if (index !== -1) {
    notifyItems.value.splice(index, 1)
  }
}

const formatter = (price, local = 'zh-TW') => {
  return price.toLocaleString(local)
}

const products = ref([
  {
    "id": 1,
    "name": "耳罩式藍牙耳機",
    "description": "舒適配戴，支援降噪技術",
    "price": 2490,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 2,
    "name": "無線藍牙音箱",
    "description": "高音質立體聲，防水設計",
    "price": 1890,
    "image": "https://images.unsplash.com/photo-1560701814-de5e72b8d346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGFibGUlMjBzcGVha2VyJTIwZ3JlZW58ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 3,
    "name": "智慧型手機",
    "description": "6.1吋螢幕，雙鏡頭設計",
    "price": 15990,
    "image": "https://images.unsplash.com/photo-1648962495517-8398a95fe12f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjZWxsJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 4,
    "name": "機械鍵盤",
    "description": "青軸手感，RGB背光",
    "price": 3290,
    "image": "https://plus.unsplash.com/premium_photo-1685312182226-20af33367686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGtleWJvYXJkfGVufDB8fDB8fHww"
  },
  {
    "id": 5,
    "name": "智慧手錶",
    "description": "健康監測，多種運動模式",
    "price": 4990,
    "image": "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 6,
    "name": "平板電腦",
    "description": "10.9吋，256GB儲存",
    "price": 18900,
    "image": "https://images.unsplash.com/photo-1628591459313-a64214c5bfac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
  }
])
</script>

<style scoped>
body {
  background: #f2f2f2f2;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}

.cart-item-thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #dee2e6;
}

.toast-container {
  max-height: 100vh;
  overflow-y: auto;
}

.toast {
  width: 300px;
  transition: all 0.3s ease;
}

.toast-thumbnail {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #dee2e6;
}
</style>
