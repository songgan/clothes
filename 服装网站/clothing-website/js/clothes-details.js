//头部内容
$('#img-png').click(function(){
	var audio = document.getElementById('audio-play');
	if(audio.paused){
		
		audio.play();
		$('#img-png').attr('class','fa fa-pause-circle-o');
	}else{
		
		audio.pause();
		$('#img-png').attr('class','fa fa-play-circle-o');
	}
});

// 切换好评差评
$('.all').click(function() {
	$('.comment-ul').fadeIn();
	$('.good-comment').fadeOut();
	$('.bad-comment').fadeOut();
});
$('.high-praise').click(function() {
	$('.comment-ul').fadeOut();
	$('.good-comment').fadeIn();
	$('.bad-comment').fadeOut();
});
$('.bad-review').click(function() {
	$('.comment-ul').fadeOut();
	$('.good-comment').fadeOut();
	$('.bad-comment').fadeIn();
});
//增加减少数量
$('.four .reduce').click(function(){
	var value = $('.four input').attr('value');
	value--;
	value = value < 1 ? 1 : value;
	$('.four input').attr('value',value);

});
$('.four .add').click(function(){
	var value = $('.four input').attr('value');
	value++;
	$('.four input').attr('value',value);
});

//切换大图
$('.img-list ul li img').on('mouseover',function(){
	var path = $(this).attr('src');
	$('.list-big-img').attr('src',path);
	$('.big img').attr('src',path);
});
$('.img-list ul li').on('mouseover',function(){
	$(this).css('border','1px solid #EE3B3B');
});
$('.img-list ul li').on('mouseleave',function(){
	$(this).css('border','1px solid #E5E5E5');
});
//放大镜
$(function(){
	$('.list-big-img').mousemove(function(e) {
		$('.text-show').hide();
		$('.small b').show();
		$('.big').show();

		var L = e.pageX;
		var l = $(this).offset().left;
		var left = L - l -50;

		var T = e.pageY;
		var t = $(this).offset().top;
		var top = T - t -50;

		left = left < 0 ? 0 : left;
		top = top < 0 ? 0 : top;
		left = left > 350 ? 350 : left;
		top = top > 350 ? 350 : top;
		$('b').css({left:left,top:top});

		var imgleft = -left*2;
		var imgtop = -top*2;
		imgleft = imgleft < -450 ? -450 : imgleft;
		imgtop = imgtop < -450 ? -450 : imgtop;

		$('.big img').css({left:imgleft,top:imgtop});
	});
})
$(function(){
	$('.small').mouseleave(function(event) {
		/* Act on the event */
		$('.small b').hide();
		$('.big').hide();
		$('.text-show').show();
	});
})

// 图片预览
$('.details-recommend ul li img').click(function(event) {
	/* Act on the event */
	var modalImg = $(this).attr('src');
	$('#myModal').modal('toggle');
	$('.modal-img').attr('src',modalImg);
});
$('.img-list ul li img').click(function(event) {
	/* Act on the event */
	var modalImg1 = $(this).attr('src');
	$('#myModal').modal('toggle');
	$('.modal-img').attr('src',modalImg1);
});

//尺寸提示工具
$("[data-toggle='tooltip']").tooltip();


// 尾部区块
// 尾部图片遮罩层
$('.partner-list ul li').mouseover(function(){
	$(this).find('div').css('height',$(this).height());
	$(this).find('div').fadeIn();
});
$('.partner-list ul li').mouseleave(function(){
	$(this).find('div').fadeOut();
});