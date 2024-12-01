document.addEventListener('DOMContentLoaded', function() {
  var iframe = document.getElementById('portfolio-iframe');
  var fullscreenBtn = document.getElementById('fullscreen-btn');

  fullscreenBtn.addEventListener('click', function() {
    // Check if the browser supports the Fullscreen API
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
      iframe.msRequestFullscreen();
    } else {
      alert('Your browser does not support fullscreen mode.');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName('collapsible-button');
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      // Toggle active class on the button
      this.classList.toggle('active');

      // Toggle between hiding and showing the collapsible content
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  }
});
