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
                <p class="card-text">{{ prodcut.description }}</p>
                <p class="fw-bold text-primary">$ {{ prodcut.price }}</p>
                <button class="btn btn-success w-100"> 加入購物車 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 購物車區 -->
      <div class="col-md-4">
        <h2 class="mb-3">購物車</h2>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 class="my-0">時尚藍牙耳機</h6>
              <small class="text-muted">數量：1</small>
            </div>
            <div>
              <span class="text-muted">$7990</span>
              <button class="btn btn-sm btn-outline-danger ms-2"> 移除 </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 通知元件 -->
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1050">
      <div class="toast show align-items-center text-white bg-success border-0">
        <div class="d-flex">
          <div class="toast-body">這是通知訊息</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
    "description": "10.9吋螢幕，256GB儲存空間",
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
</style>
