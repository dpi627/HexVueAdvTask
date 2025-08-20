import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToastNotify = defineStore('toast', () => {
  const items = ref([])

  const add = (product) => {
    items.value.push({
      ...product,
      id: new Date().getTime(),
    })

    setTimeout(() => {
      items.value.shift()
    }, 3000)
  }

  const remove = (toast) => {
    const index = items.value.findIndex((item) => item.id === toast.id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  const totalCount = computed(() => {
    return items.value.length
  })

  return {
    items,
    add,
    remove,
    totalCount,
  }
})
