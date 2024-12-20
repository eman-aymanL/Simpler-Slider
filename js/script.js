var imgs = Array.from(document.querySelectorAll(".container img"))
var nextArrow = document.querySelector("#nextArrow")
var prevArrow = document.querySelector("#prevArrow")
var closeBtn = document.querySelector("#closeBtn")
var layer = document.querySelector(".layer")
var container =document.querySelector(".container")
var imgLayer =document.querySelector("#imgLayer")
var index

function getNextImg(){
    index = (index + 1) % imgs.length; 
    var img =imgs[index]
    var src =img.getAttribute('src')
    imgLayer.setAttribute('src',src)
}
function getPrevImg(){
    index = (index - 1 + imgs.length) % imgs.length;
    var img =imgs[index]
    var src =img.getAttribute('src')
    imgLayer.setAttribute('src',src)
}

container.addEventListener('click',function(e){
    var img =e.target
    index = imgs.indexOf(img)
    var src= img.getAttribute('src')
    if(src!=null){
        layer.classList.replace('d-none','d-flex')
        imgLayer.setAttribute('src',src)    }
    
})

layer.addEventListener('click',function(){
    layer.classList.replace('d-flex','d-none')

})
imgLayer.addEventListener('click', function (e) {
    e.stopPropagation();
});
nextArrow.addEventListener('click', function (e) {
    e.stopPropagation();
   getPrevImg()
});

prevArrow.addEventListener('click', function (e) {
    e.stopPropagation();
    getNextImg()
});

document.addEventListener('keyup',function(e){
   if(layer.classList.contains('d-flex')){
    if(e.code==="ArrowRight"){
        getNextImg()
    }
    else if(e.code==="ArrowLeft"){
        getPrevImg()
    }
    else{
        layer.classList.replace('d-flex','d-none')

    }
   }
})
