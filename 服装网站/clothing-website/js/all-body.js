$('#myCarousel').carousel('cycle');
$('#myCarousel').carousel({
    interval: 100
    // wrap:true
});
$('.pagination li').click(function(){
	var index = $(this).index();
	switch(index){
		case 0:
			$('.table1').fadeIn();
			$('.table2').fadeOut();
			$('.table3').fadeOut();
		break;
		case 1:
			$('.table1').fadeOut();
			$('.table2').fadeIn();
			$('.table3').fadeOut();
		break;
		case 2:
			$('.table1').fadeOut();
			$('.table2').fadeOut();
			$('.table3').fadeIn();
		break;
	}
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

$('.table img').click(function(){
	window.location.href="clothes-details.html";
});
$('.table figure').mouseover(function(){
	$(this).css({
		'border':'1px solid #ededed',
		'box-shadow': 'rgba(0, 0, 0, 0.2) 1px 1px 5px'
	});
	$(this).find('button').css({
		
	});
});
$('.table figure').mouseleave(function(){
	$(this).css({
		'border':'none',
		'box-shadow': 'none'
	});
})

$('#sales li').mouseover(function(){
	var height = $(this).height();
	$('.mask').css('height',height);
	$('.mask').fadeIn();
});

$('.media img').click(function(){
	window.location.href="clothes-details.html";
});

// 换页
$('.pagination').click(function(){
	$('.pagination li').css('background-color','#f0f0f0');
});
