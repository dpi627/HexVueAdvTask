import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const add = (product) => {
    const current = getItem(product)

    if (current) {
      current.quantity++
      current.subtotal = current.quantity * current.price
      return
    }

    items.value.push({
      ...product,
      quantity: 1,
      subtotal: product.price,
    })
  }

  const remove = (product) => {
    const index = items.value.findIndex((item) => item.id === product.id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.subtotal, 0)
  })

  const getItem = (product) => {
    return items.value.find((item) => item.id === product.id)
  }

  return {
    items,
    add,
    remove,
    totalPrice,
  }
})
