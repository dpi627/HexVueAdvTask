<template>
  <div id="app" class="container py-4">
    <div class="row">
      <!-- 商品列表區 -->
      <div class="col-md-8">
        <ProductList :products="products" />
      </div>

      <!-- 購物車區 -->
      <div class="col-md-4">
        <CartList @return-stock="handleProductStock" />
      </div>
    </div>

    <!-- 通知容器 -->
    <ToastNotify :notify-limit="5" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import ToastNotify from '@/components/ToastNotify.vue'
import ProductList from '@/components/ProductList.vue'
import CartList from '@/components/CartList.vue'

// 處理產品庫存，接收來自內層資料並返回庫存數量
const handleProductStock = (cartRemoveItem) => {
  const product = products.value.find(product => product.id === cartRemoveItem.id)
  if (product) {
    product.stock += cartRemoveItem.quantity
  }
}

//=== provide & inject 版本

const notifyItems = ref([])

const notifyAdd = (notify) => {
  notifyItems.value.push({
    ...notify,
    id: new Date().getTime(),
  })

  setTimeout(() => {
    notifyItems.value.shift()
  }, 3000)
}

const notifyRemove = (notify) => {
  const index = notifyItems.value.findIndex((item) => item.id === notify.id)
  if (index !== -1) {
    notifyItems.value.splice(index, 1)
  }
}

// 定義要開放(提供 provide)的變數或方法，設定 key
// (可使用 Symbol 避免 key 名稱衝突問題)
provide('notifyItems', notifyItems)
provide('notifyAdd', notifyAdd)
provide('notifyRemove', notifyRemove)

//=== /provide & inject 版本

const products = ref([
  {
    "id": 1,
    "name": "耳罩式藍牙耳機",
    "description": "舒適配戴，支援降噪技術",
    "price": 2490,
    "stock": 6,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 2,
    "name": "無線藍牙音箱",
    "description": "高音質立體聲，防水設計",
    "price": 1890,
    "stock": 0,
    "image": "https://images.unsplash.com/photo-1560701814-de5e72b8d346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGFibGUlMjBzcGVha2VyJTIwZ3JlZW58ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 3,
    "name": "智慧型手機",
    "description": "6.1吋螢幕，雙鏡頭設計",
    "price": 15990,
    "stock": 12,
    "image": "https://images.unsplash.com/photo-1648962495517-8398a95fe12f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjZWxsJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 4,
    "name": "機械鍵盤",
    "description": "青軸手感，RGB背光",
    "price": 3290,
    "stock": 3,
    "image": "https://plus.unsplash.com/premium_photo-1685312182226-20af33367686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGtleWJvYXJkfGVufDB8fDB8fHww"
  },
  {
    "id": 5,
    "name": "智慧手錶",
    "description": "健康監測，多種運動模式",
    "price": 4990,
    "stock": 7,
    "image": "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 6,
    "name": "平板電腦",
    "description": "10.9吋，256GB儲存",
    "price": 18900,
    "stock": 2,
    "image": "https://images.unsplash.com/photo-1628591459313-a64214c5bfac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
  }
])
</script>

<style scoped>
body {
  background: #f2f2f2f2;
}
</style>
