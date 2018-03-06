// 雪花
(function(){  
    function snow(left,height,src){  
        var div = document.createElement("div");  
        var img = document.createElement("img");  
        div.appendChild(img);  
        img.className = "roll";  
        img.src = src; 
        img.style.width="45px"; 
        img.style.height="45px";
        div.style.left=left+"px";  
        div.style.height=height+"px";  
        div.className="div";  
        document.getElementById("snow").appendChild(div);  
        setTimeout(function(){  
            document.getElementById("snow").removeChild(div);   
    },5000);  
    }  
    setInterval(function(){  
        var left = Math.random()*window.innerWidth;  
        var height = Math.random()*window.innerHeight;  
        var src = "images/s1.png"; 
        snow(left,height,src);  
    },1000);  
})();  
// 头部点击换图
$('.welcome-left').click(function(event) {
	$('#header').css(
		'background','linear-gradient(to right bottom,rgba(0,0,0,0.8),rgba(0,0,0,0)), url(images/header-bg1.jpg) no-repeat center');
});
$('.welcome-right').click(function(event) {
	$('#header').css(
		'background','linear-gradient(to right bottom,rgba(0,0,0,0.8),rgba(0,0,0,0)), url(images/header-bg2.jpg) no-repeat center');
});



// 尾部区块
// 尾部图片遮罩层
$('.partner-list ul li').mouseover(function(){
	$(this).find('div').css('height',$(this).height());
	$(this).find('div').fadeIn();
});
$('.partner-list ul li').mouseleave(function(){
	$(this).find('div').fadeOut();
});