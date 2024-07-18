function showAlert(message, type) {
  const alertContainer = document.getElementById('alert-container');
  const alert = document.createElement('div');
  alert.className = `alert p-4 mb-4 text-sm rounded-lg ${type === 'online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
  alert.innerText = message;

  alertContainer.appendChild(alert);

  // Automatically remove the alert after 3 seconds
  setTimeout(() => {
      alert.remove();
  }, 3000);
}

// Event listeners for online and offline
window.addEventListener('online', () => showAlert('You are online', 'online'));
window.addEventListener('offline', () => showAlert('You are offline', 'offline'));