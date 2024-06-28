function showAlert(message, className) {
    let div = document.createElement("div");
    div.className = `alert ${className} alert-temp bi d-flex align-items-center`;
    div.innerHTML = `<i class="${className.includes('success') ? 'bi-check-circle' : 'bi-x-circle'} me-2"></i> ${message}`;
    document.body.appendChild(div);
  
    setTimeout(() => {
      div.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(div);
      }, 1000);
    }, 3000);
  }
  
  addEventListener("online", () => {
    showAlert("آنلاین", "alert-success");
  });
  
  addEventListener("offline", () => {
    showAlert("آفلاین", "alert-danger");
  });