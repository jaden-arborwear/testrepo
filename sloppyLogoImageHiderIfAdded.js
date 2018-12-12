function hideImage() {
    var path = '/pub/media/itoris/files/w/h/white-nelson-logo-on-red-apparel_rs.png';
    var img = document.getElementById('product_corporate_logo');
    if (img && img.getAttribute('src').indexOf(path) > -1) {
        img.style.visibility = 'hidden';
        img.parentNode.removeChild(img);
    }
}

window.setInterval(function(){
  hideImage();
}, 250);

/* this thing above is nasty, would smomething like this work instead?

(function(doc,found) {
  window.addEventListener('DOMSubtreeModified', function() {

    var img = document.getElementById('product_corporate_logo');
    var path = '/pub/media/itoris/files/w/h/white-nelson-logo-on-red-apparel_rs.png';

    if(found && !img && !img.getAttribute('src').indexOf(path) > -1){
      found = false;
    }

    if(img && img.getAttribute('src').indexOf(path) > -1){
      found = true;
      img.style.visibility = 'hidden';
      img.parentNode.removeChild(img);
    }

  }, false);
})(document,false);

*/