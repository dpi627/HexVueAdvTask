<template>
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1050">
    <template v-if="toast.totalCount <= 5">
      <div v-for="product in notifyItems" :key="product.id" class="toast show border-0 mb-2 mt-2">
        <div class="d-flex align-items-center text-white bg-success rounded">
          <img :src="product.image" :alt="product.name" class="toast-thumbnail ms-2 me-1">
          <div class="toast-body">
            <span class="text-warning">{{ product.name }} </span>
            已加入購物車
          </div>
          <button @click.prevent="toast.remove(product)" type="button"
            class="btn-close btn-close-white me-2 m-auto"></button>
        </div>
      </div>
    </template>
    <div v-else class="toast show border-0 mb-2 mt-2">
      <div class="text-center text-white bg-danger rounded p-2">
        抵達通知上限，請稍後...
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToastNotify } from '@/stores/toast';

const toast = useToastNotify()

const notifyItems = toast.items;
</script>

<style scoped>
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
