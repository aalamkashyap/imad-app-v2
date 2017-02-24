console.log('Loaded!');

var element= document.getElementById('main-text'
);

element.innerHTML = 'New Value';
//Move the image
var img = document.getElementById('madi'
);
function moveRight()
{
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function() {
   // img.style.marginLeft = '100px';
    var interval = setInterval(moveRight, 100);
};