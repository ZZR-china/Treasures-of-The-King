$(document).ready(function() {
	var $item = $('.item');
	var $self = $('.self-route div');
	$item.click(function (e) {
		itemchange(e);
	});
	$self.click(function (e) {
		selfroute(e);
	});

});
function itemchange(e) {
	var target = $(e.currentTarget),
		val = target.attr('val'),
		selfRoute = $('.self-route');
	var selfDiv = $('.self-route div');
	selfRoute.css('cssText','background:url(/assets/images/contactus/selfdrive/'+val+'.jpg) no-repeat');
	$('.all-routes').find('.item').removeClass('bggray');
	target.addClass('bggray');
	console.log(selfDiv[0]);
	for (var i = 0; i <6; i++) {
		if ($(selfDiv[i]).attr('val') == val) {
			$(selfDiv[i]).css('display','none').siblings().css('display','block');
		}
	}
}


function selfroute(e) {
	var target = $(e.currentTarget),
		val = target.attr('val'),
		selfRoute = $('.self-route');
	selfRoute.css('cssText','background:url(/assets/images/contactus/selfdrive/'+val+'.jpg) no-repeat');
	target.css('display','none').siblings().css('display','block');
}