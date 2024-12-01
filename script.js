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
