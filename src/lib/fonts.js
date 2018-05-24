import FontFaceObserver from 'fontfaceobserver'

var font = new FontFaceObserver('Open Sans');

font.load().then(function () {
  document.documentElement.className += " fonts-loaded";
});
