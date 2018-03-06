// 字体单个显示
window.onload=function(){
		var text="Summer new dress, the little fairy's you Worth having";
		var textShow = document.getElementById("text-show");
    var i = 0;
    timer=setInterval(function(){
        textShow.innerHTML=text.substring(0,i);
        i++;
        if(textShow.innerHTML==text.innerHTML){
            clearInterval(timer);
        }
    },200);

    $("#header-button").delay('6000').show("fold");
    $("#mycanvas").delay('3000').show("fold");
    $("#mycanvas1").delay('6000').show("fold");
}




var c = document.getElementById('mycanvas');
var cc = c.getContext('2d');
cc.moveTo(30,0);
cc.lineTo(30,200);
cc.lineWidth= 2;
cc.strokeStyle='gray';
cc.stroke();
var grd=cc.createRadialGradient(40,230,10,30,220,40);
grd.addColorStop(0,"gray");
grd.addColorStop(1,"white");
 
// 填充渐变
cc.fillStyle=grd;
cc.beginPath();
cc.arc(30,220,20,0,2*Math.PI,true);
cc.fill();

var c1 = document.getElementById('mycanvas1');
var cc1 = c1.getContext('2d');
cc1.moveTo(60,0);
cc1.lineTo(60,300);
cc1.lineWidth= 2;
cc1.strokeStyle='gray';
cc1.stroke();
var grd1=cc1.createRadialGradient(70,330,10,60,320,40);
grd1.addColorStop(0,"gray");
grd1.addColorStop(1,"white");
 
// 填充渐变
cc1.fillStyle=grd1;
cc1.beginPath();
cc1.arc(60,320,20,0,2*Math.PI,true);
cc1.fill();




// 新品区块
// 鼠标图片滚动停止
$('.new-ul').on('mouseover',function(){
	$('.new-ul').css('animation-play-state','paused');
});
$('.new-ul').on('mouseout',function(){
	$('.new-ul').css('animation-play-state','running');
});
$('.sanking-slide-ul').on('mouseover',function(){
	$('.sanking-slide-ul').css('animation-play-state','paused');
});
$('.sanking-slide-ul').on('mouseout',function(){
	$('.sanking-slide-ul').css('animation-play-state','running');
});

// 客服对话框
$('.fa-user-circle-o').click(function(event) {
	/* Act on the event */
	var modalImg = $(this).attr('src');
	$('#costomer-modal').modal('toggle');
	// $('.modal-img').attr('src',modalImg);
});
// $('.button-send').click(function(){
// 	alert(1);
// 	var value = $('.modal-bottom textarea').text();
// 	alert(value);
// 	$('.modal-top textarea').text(value);
// });


// 新品浏览图
$('.new-li img').click(function(event) {
	/* Act on the event */
	var modalImg = $(this).attr('src');
	$('#new-modal').modal('toggle');
	$('.modal-img').attr('src',modalImg);
});




// 排行榜区块
$('.before6 li').mouseover(function(){
	var index = $(this).index();
	switch(index){
		case 0:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(1);
		$('.price').text('￥138');
		$('.collection b').text(100);
		break;
		case 1:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(2);
		$('.price').text('￥128');
		$('.collection b').text(95);
		break;
		case 2:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(3);
		$('.price').text('￥155');
		$('.collection b').text(90);
		break;
		case 3:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(4);
		$('.price').text('￥155');
		$('.collection b').text(85);
		break;
		case 4:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(5);
		$('.price').text('￥138');
		$('.collection b').text(80);
		break;
		case 5:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(6);
		$('.price').text('￥128');
		$('.collection b').text(75);
		break;
	}
});
$('.after6 li').mouseover(function(){
	var index = $(this).index();
	switch(index){
		case 0:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(8);
		$('.price').text('￥128');
		$('.collection b').text(65);
		break;
		case 1:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(7);
		$('.price').text('￥128');
		$('.collection b').text(70);
		break;
		case 2:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(10);
		$('.price').text('￥118');
		$('.collection b').text(55);
		break;
		case 3:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(9);
		$('.price').text('￥128');
		$('.collection b').text(60);
		break;
		case 4:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(12);
		$('.price').text('￥89');
		$('.collection b').text(45);
		break;
		case 5:
		var path = $(this).find('img').attr('src');
		$('.big-show').attr('src',path);
		$('.howMay').text(11);
		$('.price').text('￥138');
		$('.collection b').text(50);
		break;
	}
});
// 标题栏
$('.menu-collect').click(function(){
	$('.sales-sanking-top12').fadeOut();
	$('.sanking-top12').fadeIn()
	$(this).css('background-color','#000');
	$('.menu-sales').css('background-color','#707070');
});
$('.menu-sales').click(function(){
	$('.sales-sanking-top12').fadeIn();
	$('.sanking-top12').fadeOut()
	$(this).css('background-color','#000');
	$('.menu-collect').css('background-color','#707070');
});
$('.dropdown-menu li').click(function(){
	var value = $(this).text();
	$('.menu-span b').text(value);
});
$('.sanking-top12 .after6,.before6,.big-img img').click(function(){
	// window.open("clothes-details.html")
	window.location.href='clothes-details.html';
})
$('.sanking-slide-ul li img').click(function(event) {
	/* Act on the event */
	var modalImg = $(this).attr('src');
	$('#top12-modal').modal('toggle');
	$('.modal-img').attr('src',modalImg);
});
$('.top12-modal-ul li img').click(function(){
	var smallModal = $(this).attr('src');
	$('.modal-img').attr('src',smallModal);
});
$("[data-toggle='popover']").popover();


// 买家秀区块
// 买家秀图片遮罩层
$('.item1').mouseover(function() {
	$('.item1 div').css('height',$(this).height());
    $('.item1 div').fadeIn();
});
$('.item1').mouseleave(function(){
	$('.item1 div').fadeOut();
});
$('.item2').mouseover(function() {
	$('.item2 div').css('height',$(this).height());
    $('.item2 div').fadeIn();
});
$('.item2').mouseleave(function(){
	$('.item2 div').fadeOut();
});
$('.item3').mouseover(function() {
	$('.item3 div').css('height',$(this).height());
    $('.item3 div').fadeIn();
});
$('.item3').mouseleave(function(){
	$('.item3 div').fadeOut();
});
$('.item4').mouseover(function() {
	$('.item4 div').css('height',$(this).height());
    $('.item4 div').fadeIn();
});
$('.item4').mouseleave(function(){
	$('.item4 div').fadeOut();
});
$('.item5').mouseover(function() {
	$('.item5 div').css('height',$(this).height());
    $('.item5 div').fadeIn();
});
$('.item5').mouseleave(function(){
	$('.item5 div').fadeOut();
});
$('.item6').mouseover(function() {
	$('.item6 div').css('height',$(this).height());
    $('.item6 div').fadeIn();
});
$('.item6').mouseleave(function(){
	$('.item6 div').fadeOut();
});
$('.buy-show li div span').click(function(event) {
	var modalImg = $(this).parent('div').next('img').attr('src');
	$('#myModal').modal('toggle');
	$('.modal-img').attr('src',modalImg);			
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

