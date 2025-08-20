export function formatPrice(price, local = 'zh-TW') {
  return price.toLocaleString(local)
}
