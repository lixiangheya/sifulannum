//轮播图
var uleft=$('.brl');
var uright=$('.bri');
var box = $id('banner_wrapper')
var ul1 = $('#ulone')
var li = $('#ulone>li')
var list = $id('banner-nav-list').children
var arr = ['rgb(168,15,18)', 'rgb(160,0,0)', 'rgb(141,4,13)', 'rgb(255,255,255)']
var index = 0;
var pow=0;

function outplay() {
	if(index == li.length - 1) {
		index = 0;
	} else {
		index++;
	}
	box.style.background = 'rgb(168,15,18)'
}
var timer = setInterval(outplay, 1000);

var i = 1;
var timer1;
$('#ulone>li').eq(0).show().siblings('#ulone>li').hide();
showTime();

function showTime() {
	//定时器
	timer1 = setInterval(function() {
		//调用一个Show()函数
		Show();
		i++;
		//当图片是最后一张的后面时，设置图片为第一张
		if(i == 4) {
			i = 0;
		}
		var pow=i
	}, 1000);
}
console.log(pow)
//创建一个Show函数
function Show() {
	//在这里可以用其他jquery的动画
	$('#ulone>li').eq(i).fadeIn(600).siblings('#ulone>li').fadeOut(500);
	////给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
	$('#banner-nav-list>li').eq(i).css("borderTopColor", "hsla(0,0%,100%,4)").siblings().css("borderTopColor", "hsla(0,0%,100%,.4)")
}
$('#banner_wrapper').mouseover(function() {
	clearInterval(timer1);
	uleft.css('display','block')
	uright.css('display','block')
	
})

$('#banner_wrapper').mouseout(function() {
		showTime()
		uleft.css('display','none')
	uright.css('display','none')

	})

$('#banner-nav-list>li').on('click', function() {
	index = $(this).index()
	console.log(index)
	$(this).siblings().css("borderTopColor", "hsla(0,0%,100%,.4)")
	$(this).css("borderTopColor", "hsla(0,0%,100%,4)")
	$('#ulone>li').eq(index).fadeIn(500).siblings().fadeOut(500)
})
	 p=0
		uright.on('click', function() {
			if (p==3) {
				p=0
			} else{
				p++
			}
			console.log(p)
		$('#ulone>li').eq(p).fadeIn(500).siblings().fadeOut(500)
			$('#banner-nav-list>li').eq(p).css("borderTopColor", "hsla(0,0%,100%,4)")
			$('#banner-nav-list>li').eq(p).siblings().css("borderTopColor", "hsla(0,0%,100%,.4)")
		})
	
	uleft.on('click', function() {
		if (p==0) {
				p=3
			} else{
				p--
			}
		$('#ulone>li').eq(p).fadeIn(500).siblings().fadeOut(500)
			$('#banner-nav-list>li').eq(p).css("borderTopColor", "hsla(0,0%,100%,4)")
			$('#banner-nav-list>li').eq(p).siblings().css("borderTopColor", "hsla(0,0%,100%,.4)")
		})

//动画
$('.Main2_1>ul>li').on('mouseover',function(){
	
	$('.Main2_1>ul>li>a>img').eq($(this).index()).animate({left:'0px'})
	
})
$('.Main2_1>ul>li').on('mouseout',function(){
	
	$('.Main2_1>ul>li>a>img').eq($(this).index()).animate({left:'16px'})
	
})
console.log($('#banner_wrapper').find(li))