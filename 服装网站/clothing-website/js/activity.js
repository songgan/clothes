$('#myCarousel').carousel('cycle');
$('#myCarousel').carousel({
    interval: 100,
    wrap:true
});

// 倒计时
var endtime = new Date("2018-5-10");
setInterval(function () {
	var nowtime = new Date();
	var time = endtime - nowtime;
	var day = parseInt(time / 1000 / 60 / 60 / 24);
	var hour = parseInt(time / 1000 / 60 / 60 % 24);
	var minute = parseInt(time / 1000 / 60 % 60);
	var seconds = parseInt(time / 1000 % 60);
	$('.timespan').html(day + " : " + hour + " : " + minute + " : " + seconds);
}, 1000);
// 图片预览
$('.to-snap-up ul li img').click(function(event) {
	/* Act on the event */
	var modalImg = $(this).attr('src');
	$('#myModal').modal('toggle');
	$('.modal-img').attr('src',modalImg);
});
$('.hot-design ul li img').click(function(event) {
	/* Act on the event */
	var modalImg = $(this).attr('src');
	$('#myModal').modal('toggle');
	$('.modal-img').attr('src',modalImg);
	$('#myModal').find('.timespan').css('color','#4cd964')
});
// 设计师遮罩层
$('.designer ul li').mouseover(function(){
	$('.designer-mask').css('height',$(this).find('img').height());
	$('.designer-mask').css('width',$(this).find('img').width());
    $(this).find('.designer-mask').fadeIn();
});
$('.designer ul li').mouseleave(function(){
    $(this).find('.designer-mask').fadeOut();
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