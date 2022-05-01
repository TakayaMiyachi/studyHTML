const hamID = document.getElementById('js-btnHamburger');
const gnavID = document.getElementById('js-gnav');
hamID.addEventListener('click', function() {
  hamID.classList.toggle('clicked');
  gnavID.classList.toggle('clicked');
})