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
