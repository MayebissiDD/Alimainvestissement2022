document.getElementById('copyLink').addEventListener('click', function() {
    var link = document.getElementById('link');
    link.select();
    document.execCommand('copy');
    alert('Le lien a été copié !');
  });