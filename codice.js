fetch('partecipa.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('codice').textContent = data.trim();
    document.getElementById('qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.trim()}`;
  });
