const theMenu = document.getElementById('contextMenu');

document.getElementById('box').addEventListener("contextmenu", function (evt) {
    evt.preventDefault();
    // console.log('>> theMenu',theMenu);
    theMenu.style.transform = 'scale(1)';
    theMenu.style.left = evt.offsetX + 'px';
    theMenu.style.top = evt.offsetY + 'px';
})

window.addEventListener('click',function (evt) {
  theMenu.style.transform = 'scale(0)';  
})