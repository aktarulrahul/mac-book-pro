// Update Sub Total
function updateSubTotal(option, price) {
  document.getElementById(option + '-cost').innerText = price;
  const bestPrice = parseInt(document.getElementById('best-price').innerText);
  const extraMemoryCost = parseInt(
    document.getElementById('memory-cost').innerText
  );
  const extraStorageCost = parseInt(
    document.getElementById('storage-cost').innerText
  );
  const extraDeliveryCost = parseInt(
    document.getElementById('delivery-cost').innerText
  );
  const totalPrice =
    bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
  updateFinalTotal(totalPrice, false);
}
// Update Final Total function
function updateFinalTotal(totalPrice, isPomoAdd) {
  if (!isPomoAdd) {
    document.getElementById('total-price').innerText = totalPrice;
  }
  document.getElementById('total').innerText = totalPrice;
}
// All event listener
document.getElementById('memory-8').addEventListener('click', function () {
  updateSubTotal('memory', 0);
});
document.getElementById('memory-16').addEventListener('click', function () {
  updateSubTotal('memory', 180);
});
document.getElementById('storage-256').addEventListener('click', function () {
  updateSubTotal('storage', 0);
});
document.getElementById('storage-512').addEventListener('click', function () {
  updateSubTotal('storage', 100);
});
document.getElementById('storage-1t').addEventListener('click', function () {
  updateSubTotal('storage', 180);
});
document.getElementById('delivery-25').addEventListener('click', function () {
  updateSubTotal('delivery', 0);
});
document.getElementById('delivery-21').addEventListener('click', function () {
  updateSubTotal('delivery', 20);
});

// Pomo functionality
document.getElementById('pomo-submit').addEventListener('click', function () {
  const pomoCode = document.getElementById('pomo-input').value;
  if (pomoCode.toLowerCase() == 'stevekaku') {
    const totalPrice = parseInt(
      document.getElementById('total-price').innerText
    );
    const totalAfterPomoAdded = totalPrice - totalPrice * 0.2;
    updateFinalTotal(totalAfterPomoAdded, true);
  }
  document.getElementById('pomo-input').value = '';
});
