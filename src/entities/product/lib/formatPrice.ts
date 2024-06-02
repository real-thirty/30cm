export function formatPrice(price: string, withSign = true) {
  return Number(price).toLocaleString()
}