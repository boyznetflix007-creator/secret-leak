function refund(orderId) {
  return { orderId, status: "refunded" };
}
module.exports = { refund };
