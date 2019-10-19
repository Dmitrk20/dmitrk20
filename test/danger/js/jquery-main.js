$(document).ready(function(){
	$('input[type="radio"]').customRadio();
	$('input[type="checkbox"]').customCheckbox();
	$('select.customSelect').customSelect();
	$('.customScroll').customScrollV();
	clearInputs();
});


jQuery.fn.customSelect = function(_options) {
	var _options = jQuery.extend({
	selectStructure:'<div class="selectArea"><div class="selectIn"><div class="selectText"></div></div></div>',
	selectText:'.selectText',
	selectBtn:'.selectIn',
	selectDisabled:'.disabled',
	optStructure:'<div class="selectSub"><ul></ul></div>',
	maxHeight:false,optList:'ul'
}, _options);
	return this.each(function() {
		var select = jQuery(this);
		if(!select.hasClass('outtaHere')) {
			if(select.is(':visible')) {
				var replaced = jQuery(_options.selectStructure);
				var selectText = replaced.find(_options.selectText);
				var selectBtn = replaced.find(_options.selectBtn);
				var selectDisabled = replaced.find(_options.selectDisabled).hide();
				var optHolder = jQuery(_options.optStructure);
				var optList = optHolder.find(_options.optList);
				if(select.attr('disabled')) selectDisabled.show();
				select.find('option').each(function() {
					var selOpt = $(this);
					var _opt = jQuery('<li><a href="#">' + selOpt.html() + '</a></li>');
					if(selOpt.attr('selected')) {
						selectText.html(selOpt.html());
						_opt.addClass('selected');
					}
					_opt.children('a').click(function() {
						optList.find('li').removeClass('selected');
						select.find('option').removeAttr('selected');
						$(this).parent().addClass('selected');
						selOpt.attr('selected', 'selected');
						selectText.html(selOpt.html());
						select.change();
						optHolder.hide();
						return false;
					});
					optList.append(_opt);
				});
				replaced.width(select.outerWidth());
				replaced.insertBefore(select);
				replaced.addClass(select.attr('class'));
					optHolder.css({
						width: select.outerWidth(),
						display: 'none',
						position: 'absolute'
					});
				optHolder.addClass(select.attr('class'));
				jQuery(document.body).append(optHolder);

				var optTimer;
				replaced.hover(function() {
					if(optTimer) clearTimeout(optTimer);
				}, function() {
					optTimer = setTimeout(function() {
						optHolder.hide();
					}, 200);
				});
				optHolder.hover(function(){
					if(optTimer) clearTimeout(optTimer);
				}, function() {
					optTimer = setTimeout(function() {
						optHolder.hide();
					}, 200);
				});
				selectBtn.click(function() {
					if(optHolder.is(':visible')) {
						optHolder.hide();
					}
					else{
						optHolder.children('ul').css({height:'auto', overflow:'hidden'});
						optHolder.css({
							top: replaced.offset().top + replaced.outerHeight(),
							left: replaced.offset().left,
							display: 'block'
						});
						if(_options.maxHeight && optHolder.children('ul').height() > _options.maxHeight) optHolder.children('ul').css({height:_options.maxHeight, overflow:'auto'});
					}
					return false;
				});
				select.addClass('outtaHere');
			}
		}
	});
}

jQuery.fn.customRadio = function(_options){
	var _options = jQuery.extend({
		radioStructure: '<div></div>',
		radioDisabled: 'disabled',
		radioDefault: 'radioArea',
		radioChecked: 'radioAreaChecked'
	}, _options);
	return this.each(function(){
		var radio = jQuery(this);
		if(!radio.hasClass('outtaHere') && radio.is(':radio')){
			var replaced = jQuery(_options.radioStructure);
			replaced.addClass(radio.attr('class'));
			this._replaced = replaced;
			if(radio.is(':disabled')) {
				replaced.addClass(_options.radioDisabled);
				if(radio.is(':checked')) replaced.addClass('disabledChecked');
			}
			else if(radio.is(':checked')) replaced.addClass(_options.radioChecked);
			else replaced.addClass(_options.radioDefault);
			replaced.click(function(){
				if($(this).hasClass(_options.radioDefault)){
					radio.change();
					radio.attr('checked', 'checked');
					changeRadio(radio.get(0));
				}
			});
			radio.click(function(){
				changeRadio(this);
			});
			replaced.insertBefore(radio);
			radio.addClass('outtaHere');
		}
	});
	function changeRadio(_this){
		$('input:radio[name='+$(_this).attr("name")+']').not(_this).each(function(){
			if(this._replaced && !$(this).is(':disabled')) this._replaced.removeClass().addClass(_options.radioDefault);
		});
		_this._replaced.removeClass().addClass(_options.radioChecked);
		$(_this).trigger('change');
	}
}

jQuery.fn.customCheckbox = function(_options){
	var _options = jQuery.extend({
		checkboxStructure: '<div></div>',
		checkboxDisabled: 'disabled',
		checkboxDefault: 'checkboxArea',
		checkboxChecked: 'checkboxAreaChecked'
	}, _options);
	return this.each(function(){
		var checkbox = jQuery(this);
		if(!checkbox.hasClass('outtaHere') && checkbox.is(':checkbox')){
			var replaced = jQuery(_options.checkboxStructure);
			replaced.addClass(checkbox.attr('class'));
			this._replaced = replaced;
			if(checkbox.is(':disabled')) {
				replaced.addClass(_options.checkboxDisabled);
				if(checkbox.is(':checked')) replaced.addClass('disabledChecked');
			}
			else if(checkbox.is(':checked')) replaced.addClass(_options.checkboxChecked);
			else replaced.addClass(_options.checkboxDefault);

			replaced.click(function(){
				if(!replaced.hasClass('disabled')){
					if(checkbox.is(':checked')) checkbox.removeAttr('checked');
					else checkbox.attr('checked', 'checked');
					changeCheckbox(checkbox);
				}
			});
			checkbox.click(function(){
				changeCheckbox(checkbox);
			});
			replaced.insertBefore(checkbox);
			checkbox.addClass('outtaHere');
		}
	});
	function changeCheckbox(_this){
		if(_this.is(':checked')) _this.get(0)._replaced.removeClass().addClass(_options.checkboxChecked);
		else _this.get(0)._replaced.removeClass().addClass(_options.checkboxDefault);
		_this.trigger('change');
	}
}

/**
 * jQuery Vertical Custom Scroll min v1.0.0
 * Copyright (c) 2013 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

var types=['DOMMouseScroll','mousewheel'];if($.event.fixHooks){for(var i=types.length;i;){$.event.fixHooks[types[--i]]=$.event.mouseHooks;}}$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false);}}else{this.onmousewheel=handler;}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false);}}else{this.onmousewheel=null;}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});
function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta){delta=orgEvent.wheelDelta/120;}if(orgEvent.detail){delta=-orgEvent.detail/3;}deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta;}if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120;}if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120;}args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args);}
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;}});
jQuery.fn.customScrollV=function(_options){var _options=jQuery.extend({lineWidth:16},_options);return this.each(function(){var _box=jQuery(this);if(_box.is(':visible')){if(_box.children('.scroll-content').length==0){var line_w=_options.lineWidth;var scrollBar=jQuery('<div class="vscroll-bar">'+'	<div class="scroll-up"></div>'+'	<div class="scroll-line">'+'		<div class="scroll-slider">'+'			<div class="scroll-slider-c"></div>'+'		</div>'+'	</div>'+'	<div class="scroll-down"></div>'+'</div>');_box.wrapInner('<div class="scroll-content"><div class="scroll-hold"></div></div>').append(scrollBar);var scrollContent=_box.children('.scroll-content');var scrollSlider=scrollBar.find('.scroll-slider');var scrollSliderH=scrollSlider.parent();var scrollUp=scrollBar.find('.scroll-up');var scrollDown=scrollBar.find('.scroll-down');var box_h=_box.height();var slider_h=0;var slider_f=0;var cont_h=scrollContent.height();var _f=false;var _f1=false;var _f2=true;var _t1,_t2,_s1,_s2;var kkk=0,start=0,_time,flag=true;_box.css({position:'relative',overflow:'hidden',height:box_h});scrollContent.css({position:'absolute',top:0,left:0,zIndex:1,height:'auto'});scrollBar.css({position:'absolute',top:0,right:0,zIndex:2,width:line_w,height:box_h,overflow:'hidden'});scrollUp.css({width:line_w,height:line_w,overflow:'hidden',cursor:'pointer'});scrollDown.css({width:line_w,height:line_w,overflow:'hidden',cursor:'pointer'});slider_h=scrollBar.height();if(scrollUp.is(':visible'))slider_h-=scrollUp.height();if(scrollDown.is(':visible'))slider_h-=scrollDown.height();scrollSliderH.css({position:'relative',width:line_w,height:slider_h,overflow:'hidden'});slider_h=0;scrollSlider.css({position:'absolute',top:0,left:0,width:line_w,height:slider_h,overflow:'hidden',cursor:'pointer'});box_h=_box.height();cont_h=scrollContent.height();if(box_h<cont_h){_f=true;slider_h=Math.round(box_h/cont_h*scrollSliderH.height());if(slider_h<5)slider_h=5;scrollSlider.height(slider_h);slider_h=scrollSlider.outerHeight();slider_f=(cont_h-box_h)/(scrollSliderH.height()-slider_h);_s1=(scrollSliderH.height()-slider_h)/15;_s2=(scrollSliderH.height()-slider_h)/3;scrollContent.children('.scroll-hold').css('padding-right',scrollSliderH.width());}else{_f=false;scrollBar.hide();scrollContent.css({width:_box.width(),top:0,left:0});scrollContent.children('.scroll-hold').css('padding-right',0);};var _top=0;scrollUp.bind('mousedown',function(){_top-=_s1;scrollCont();_t1=setTimeout(function(){_t2=setInterval(function(){_top-=4/slider_f;scrollCont();},20);},500);return false;}).mouseup(function(){if(_t1)clearTimeout(_t1);if(_t2)clearInterval(_t2);}).mouseleave(function(){if(_t1)clearTimeout(_t1);if(_t2)clearInterval(_t2);});scrollDown.bind('mousedown',function(){_top+=_s1;scrollCont();_t1=setTimeout(function(){_t2=setInterval(function(){_top+=4/slider_f;scrollCont();},20);},500);return false;}).mouseup(function(){if(_t1)clearTimeout(_t1);if(_t2)clearInterval(_t2);}).mouseleave(function(){if(_t1)clearTimeout(_t1);if(_t2)clearInterval(_t2);});scrollSliderH.click(function(e){if(_f2){_top=e.pageY-scrollSliderH.offset().top-scrollSlider.outerHeight()/2;scrollCont();}else{_f2=true;};});var t_y=0;var tttt_f=(jQuery.browser.msie)?(true):(false);scrollSlider.mousedown(function(e){t_y=e.pageY-jQuery(this).position().top;_f1=true;return false;}).mouseup(function(){_f1=false;});jQuery('body').bind('mousemove',function(e){if(_f1){_f2=false;_top=e.pageY-t_y;if(tttt_f)document.selection.empty();scrollCont();}}).mouseup(function(){_f1=false;});scrollSlider.bind('touchstart',function(e){if(_time)clearTimeout(_time);scrollSlider.stop();scrollContent.stop();kkk=e.originalEvent.pageY;e.preventDefault();e.stopPropagation();return false;}).bind('touchmove',function(e){if(_f){_f=false;if(kkk>e.originalEvent.pageY)_top-=1*Math.abs(e.originalEvent.pageY-kkk);else _top-=-1*Math.abs(e.originalEvent.pageY-kkk);scrollCont();kkk=e.originalEvent.pageY;_f=true;if((_top>0)&&(_top+slider_h<scrollSliderH.height()))return false;}e.preventDefault();e.stopPropagation();return false;}).bind('touchend',function(e){e.preventDefault();e.stopPropagation();return false;});_box.bind('touchstart',function(e){if(_time)clearTimeout(_time);scrollSlider.stop();scrollContent.stop();kkk=e.originalEvent.pageY;start=kkk;flag=true;e.preventDefault();e.stopPropagation();return false;}).bind('touchend',function(e){if(flag&&Math.abs(start-kkk)>80){_top+=(start-kkk)/3;if(_top<0)_top=0;else if(_top+slider_h>scrollSliderH.height())_top=scrollSliderH.height()-slider_h;scrollSlider.animate({top:_top},{queue:false,easing:'easeOutCirc',duration:300*Math.abs(start-kkk)/40});scrollContent.animate({top:-_top*slider_f},{queue:false,easing:'easeOutCirc',duration:300*Math.abs(start-kkk)/40});}e.preventDefault();e.stopPropagation();return false;}).bind('touchmove',function(e){if(_f){_f=false;if(kkk>e.originalEvent.pageY)_top-=-1*Math.abs(e.originalEvent.pageY-kkk)/(cont_h/box_h);else _top-=1*Math.abs(e.originalEvent.pageY-kkk)/(cont_h/box_h);scrollCont();kkk=e.originalEvent.pageY;_f=true;_time=setTimeout(function(){flag=false;},200);if((_top>0)&&(_top+slider_h<scrollSliderH.height()))return false;}e.preventDefault();e.stopPropagation();return false;});scrollUp.bind('touchstart',function(){_top-=_s1;scrollCont();e.preventDefault();e.stopPropagation();return false;}).bind('touchend',function(e){e.preventDefault();e.stopPropagation();return false;}).bind('touchmove',function(e){e.preventDefault();e.stopPropagation();return false;});scrollDown.bind('touchstart',function(){_top+=_s1;scrollCont();e.preventDefault();e.stopPropagation();return false;}).bind('touchend',function(e){e.preventDefault();e.stopPropagation();return false;}).bind('touchmove',function(e){e.preventDefault();e.stopPropagation();return false;});document.body.onselectstart=function(){if(_f1)return false;};if(!_box.hasClass('not-scroll')){_box.bind('mousewheel',function(event,delta){if(_f){_top-=delta*_s1;scrollCont();if((_top>0)&&(_top+slider_h<scrollSliderH.height()))return false;}});};function scrollCont(){if(_top<0)_top=0;else if(_top+slider_h>scrollSliderH.height())_top=scrollSliderH.height()-slider_h;scrollSlider.css('top',_top);scrollContent.css('top',-_top*slider_f);};this.scrollResize=function(){box_h=_box.height();cont_h=scrollContent.height();if(box_h<cont_h){_f=true;scrollBar.show();scrollBar.height(box_h);slider_h=scrollBar.height();if(scrollUp.is(':visible'))slider_h-=scrollUp.height();if(scrollDown.is(':visible'))slider_h-=scrollDown.height();scrollSliderH.height(slider_h);slider_h=Math.round(box_h/cont_h*scrollSliderH.height());if(slider_h<5)slider_h=5;scrollSlider.height(slider_h);slider_h=scrollSlider.outerHeight();slider_f=(cont_h-box_h)/(scrollSliderH.height()-slider_h);if(cont_h+scrollContent.position().top<box_h)scrollContent.css('top',-(cont_h-box_h));_top=-scrollContent.position().top/slider_f;scrollSlider.css('top',_top);_s1=(scrollSliderH.height()-slider_h)/15;_s2=(scrollSliderH.height()-slider_h)/3;scrollContent.children('.scroll-hold').css('padding-right',scrollSliderH.width());}else{_f=false;scrollBar.hide();scrollContent.css({top:0,left:0});scrollContent.children('.scroll-hold').css('padding-right',0);};};setInterval(function(){if(_box.is(':visible')&&cont_h!=scrollContent.height())_box.get(0).scrollResize();},200);}else{this.scrollResize();};};})};

/**
 * jQuery Vertical Custom Scroll v1.0.0
 * Copyright (c) 2013 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

var types=['DOMMouseScroll','mousewheel'];if($.event.fixHooks){for(var i=types.length;i;){$.event.fixHooks[types[--i]]=$.event.mouseHooks;}}$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false);}}else{this.onmousewheel=handler;}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false);}}else{this.onmousewheel=null;}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});
function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta){delta=orgEvent.wheelDelta/120;}if(orgEvent.detail){delta=-orgEvent.detail/3;}deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta;}if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120;}if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120;}args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args);}
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;}});
jQuery.fn.customScrollV = function(_options){
var _options = jQuery.extend({
	lineWidth: 16 /* this parameter sets the width of the scroll*/
}, _options);
return this.each(function(){
	var _box = jQuery(this);
	if(_box.is(':visible')){
		if(_box.children('.scroll-content').length == 0){
			var line_w = _options.lineWidth;
			/*--- init part ---*/
			var scrollBar = jQuery(	'<div class="vscroll-bar">'+
									'	<div class="scroll-up"></div>'+
									'	<div class="scroll-line">'+
									'		<div class="scroll-slider">'+
									'			<div class="scroll-slider-c"></div>'+
									'		</div>'+
									'	</div>'+
									'	<div class="scroll-down"></div>'+
									'</div>');
			_box.wrapInner('<div class="scroll-content"><div class="scroll-hold"></div></div>').append(scrollBar);
			var scrollContent = _box.children('.scroll-content');
			var scrollSlider = scrollBar.find('.scroll-slider');
			var scrollSliderH = scrollSlider.parent();
			var scrollUp = scrollBar.find('.scroll-up');
			var scrollDown = scrollBar.find('.scroll-down');
			/*--- different variables ---*/
			var box_h = _box.height();
			var slider_h = 0;
			var slider_f = 0;
			var cont_h = scrollContent.height();
			var _f = false;
			var _f1 = false;
			var _f2 = true;
			var _t1, _t2, _s1, _s2;
			/* for touch */
			var kkk = 0, start = 0, _time, flag = true;
			/*--- set styles ---*/
			_box.css({
				position: 'relative',
				overflow: 'hidden',
				height: box_h
			});
			scrollContent.css({
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 1,
				height: 'auto'
			});
			scrollBar.css({
				position: 'absolute',
				top: 0,
				right: 0,
				zIndex:2,
				width: line_w,
				height: box_h,
				overflow: 'hidden'
			});
			scrollUp.css({
				width: line_w,
				height: line_w,
				overflow: 'hidden',
				cursor: 'pointer'
			});
			scrollDown.css({
				width: line_w,
				height: line_w,
				overflow: 'hidden',
				cursor: 'pointer'
			});
			slider_h = scrollBar.height();
			if(scrollUp.is(':visible')) slider_h -= scrollUp.height();
			if(scrollDown.is(':visible')) slider_h -= scrollDown.height();
			scrollSliderH.css({
				position: 'relative',
				width: line_w,
				height: slider_h,
				overflow: 'hidden'
			});
			slider_h = 0;
			scrollSlider.css({
				position: 'absolute',
				top: 0,
				left: 0,
				width: line_w,
				height: slider_h,
				overflow: 'hidden',
				cursor: 'pointer'
			});
			box_h = _box.height();
			cont_h = scrollContent.height();
			if(box_h < cont_h){
				_f = true;
				slider_h = Math.round(box_h/cont_h*scrollSliderH.height());
				if(slider_h < 5) slider_h = 5;
				scrollSlider.height(slider_h);
				slider_h = scrollSlider.outerHeight();
				slider_f = (cont_h - box_h)/(scrollSliderH.height() - slider_h);
				_s1 = (scrollSliderH.height() - slider_h)/15;
				_s2 = (scrollSliderH.height() - slider_h)/3;
				scrollContent.children('.scroll-hold').css('padding-right', scrollSliderH.width());
			}
			else{
				_f = false;
				scrollBar.hide();
				scrollContent.css({width: _box.width(), top: 0, left:0});
				scrollContent.children('.scroll-hold').css('padding-right', 0);
			};
			var _top = 0;
			/*--- element's events ---*/
			scrollUp.bind('mousedown', function(){
				_top -= _s1;
				scrollCont();
				_t1 = setTimeout(function(){
					_t2 = setInterval(function(){
						_top -= 4/slider_f;
						scrollCont();
					}, 20);
				}, 500);
				return false;
			}).mouseup(function(){
				if(_t1) clearTimeout(_t1);
				if(_t2) clearInterval(_t2);
			}).mouseleave(function(){
				if(_t1) clearTimeout(_t1);
				if(_t2) clearInterval(_t2);
			});
			scrollDown.bind('mousedown', function(){
				_top += _s1;
				scrollCont();
				_t1 = setTimeout(function(){
					_t2 = setInterval(function(){
						_top += 4/slider_f;
						scrollCont();
					}, 20);
				}, 500);
				return false;
			}).mouseup(function(){
				if(_t1) clearTimeout(_t1);
				if(_t2) clearInterval(_t2);
			}).mouseleave(function(){
				if(_t1) clearTimeout(_t1);
				if(_t2) clearInterval(_t2);
			});
			scrollSliderH.click(function(e){
				if(_f2){
					_top = e.pageY - scrollSliderH.offset().top - scrollSlider.outerHeight()/2;
					scrollCont();
				}
				else{
					_f2 = true;
				};
			});
			var t_y = 0;
			var tttt_f = (jQuery.browser.msie)?(true):(false);
			scrollSlider.mousedown(function(e){
				t_y = e.pageY - jQuery(this).position().top;
				_f1 = true;
				return false;
			}).mouseup(function(){
				_f1 = false;
			});
			jQuery('body').bind('mousemove', function(e){
				if(_f1){
					 _f2 = false;
					 _top = e.pageY - t_y;
					 if(tttt_f) document.selection.empty();
					 scrollCont();
				}
			}).mouseup(function(){
				_f1 = false;
			});

			/* touch event start */
			scrollSlider.bind('touchstart', function(e){
				if(_time) clearTimeout(_time);
				scrollSlider.stop();
				scrollContent.stop();
				kkk = e.originalEvent.pageY;
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchmove', function(e){
				if(_f){
					_f = false;
					if(kkk > e.originalEvent.pageY) _top -=1*Math.abs(e.originalEvent.pageY - kkk);
					else _top -=-1*Math.abs(e.originalEvent.pageY - kkk);
					scrollCont();
					kkk = e.originalEvent.pageY;
					_f = true;
					if((_top > 0) && (_top+slider_h < scrollSliderH.height())) return false;
				}
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchend', function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			_box.bind('touchstart', function(e){
				if(_time) clearTimeout(_time);
				scrollSlider.stop();
				scrollContent.stop();
				kkk = e.originalEvent.pageY;
				start = kkk;
				flag = true;
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchend', function(e){
				if(flag && Math.abs(start - kkk) > 80){
					_top += (start - kkk)/3;
					if(_top < 0) _top = 0;
					else if(_top+slider_h > scrollSliderH.height()) _top = scrollSliderH.height() - slider_h;
					scrollSlider.animate({top: _top}, {queue:false, easing: 'easeOutCirc', duration: 300*Math.abs(start - kkk)/40});
					scrollContent.animate({top: -_top*slider_f}, {queue:false, easing: 'easeOutCirc', duration: 300*Math.abs(start - kkk)/40});
				}
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchmove', function(e){
				if(_f){
					_f = false;
					if(kkk > e.originalEvent.pageY) _top -=-1*Math.abs(e.originalEvent.pageY - kkk)/(cont_h/box_h);
					else _top -=1*Math.abs(e.originalEvent.pageY - kkk)/(cont_h/box_h);
					scrollCont();
					kkk = e.originalEvent.pageY;
					_f = true;
					_time = setTimeout(function(){
						flag = false;
					}, 200);
					if((_top > 0) && (_top+slider_h < scrollSliderH.height())) return false;
				}

				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			scrollUp.bind('touchstart', function(){
				_top -= _s1;
				scrollCont();
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchend', function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchmove', function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			scrollDown.bind('touchstart', function(){
				_top += _s1;
				scrollCont();
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchend', function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			}).bind('touchmove', function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			/* touch event end */

			document.body.onselectstart = function(){
				if(_f1) return false;
			};
			if(!_box.hasClass('not-scroll')){
				_box.bind('mousewheel', function(event, delta){
					if(_f){
						_top -=delta*_s1;
						scrollCont();
						if((_top > 0) && (_top+slider_h < scrollSliderH.height())) return false;
					}
				});
			};
			function scrollCont(){
				if(_top < 0) _top = 0;
				else if(_top+slider_h > scrollSliderH.height()) _top = scrollSliderH.height() - slider_h;
				scrollSlider.css('top', _top);
				scrollContent.css('top', -_top*slider_f);
			};
			this.scrollResize = function(){
				box_h = _box.height();
				cont_h = scrollContent.height();
				if(box_h < cont_h){
					_f = true;
					scrollBar.show();
					scrollBar.height(box_h);
					slider_h = scrollBar.height();

					if(scrollUp.is(':visible')) slider_h -= scrollUp.height();
					if(scrollDown.is(':visible')) slider_h -= scrollDown.height();
					scrollSliderH.height(slider_h);
					slider_h = Math.round(box_h/cont_h*scrollSliderH.height());
					if(slider_h < 5) slider_h = 5;
					scrollSlider.height(slider_h);
					slider_h = scrollSlider.outerHeight();
					slider_f = (cont_h - box_h)/(scrollSliderH.height() - slider_h);
					if(cont_h + scrollContent.position().top < box_h) scrollContent.css('top', -(cont_h - box_h));
					_top = - scrollContent.position().top/slider_f;
					scrollSlider.css('top', _top);
					_s1 = (scrollSliderH.height() - slider_h)/15;
					_s2 = (scrollSliderH.height() - slider_h)/3;
					scrollContent.children('.scroll-hold').css('padding-right', scrollSliderH.width());
				}
				else{
					_f = false;
					scrollBar.hide();
					scrollContent.css({top: 0, left:0});
					scrollContent.children('.scroll-hold').css('padding-right', 0);
				};
			};

			setInterval(function(){
				if(_box.is(':visible') && cont_h != scrollContent.height()) _box.get(0).scrollResize();
			}, 200);

		}
		else{
			this.scrollResize();
		};
	};
})};

function clearInputs(){
	$('input:text, input:password, textarea').each(function(){
		var _el = $(this);
		var _val = _el.val();
		_el.bind('focus', function(){
			if(this.value == _val) this.value = '';
		}).bind('blur', function(){
			if(this.value == '') this.value = _val;
		});
	});
}


$(document).ready(function(){

	// var cars = document.querySelector('.cars');
	// var li = document.querySelectorAll('a');
	//
	// 	for (var i=0; i<li.length; i++) {
	// 	li[i].addEventListener('click', function(evt) {
	// 		evt.preventDefault();
	// 		li.forEach(c => {
	// 			c.classList.remove('active');
	// 		})
	// 			$(this).addClass('active');
	//
	// 	})
	// };


	$('.red-link').click(function(){
	$('.modal-credit').addClass('open-credit');
	});

	$('.close').click(function(){
	$('.modal-credit').removeClass('open-credit');
	});

	$('.testDrive').click(function(){
	$('.modal-testDrive').addClass('open-test');
	});

	$('.close').click(function(){
	$('.modal-testDrive').removeClass('open-test');
	});



	$('.blue-link').click(function(){
	$('.best-check').toggleClass('show');
	$('.first').toggleClass('hide');
	});

	$('.order').click(function(){
	$('.call').addClass('show');
	});

	$('.close').click(function(){
	$('.call').removeClass('show');
	});



	// $('.call-accept').click(function(){
	// $('.thx').addClass('thx-show');
	// $('.call').removeClass('show');
	// $('.close').click(function(){
	// $('.thx').removeClass('thx-show');
	// });
	// });
	//
	// $('.credit-accept').click(function(){
	// $('.thx').addClass('thx-show');
	// $('.modal-credit').removeClass('open-credit');
	// $('.close').click(function(){
	// $('.thx').removeClass('thx-show');
	// });
	// });
	//
	// $('.test-accept').click(function(){
	// $('.thx').addClass('thx-show');
	// $('.modal-testDrive').removeClass('open-test');
	// $('.close').click(function(){
	// $('.thx').removeClass('thx-show');
	// });
	// });







	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
	$('#nav-icon1').click(function(){
		$('.nav').toggleClass('open');
	});
	$('#nav-icon1').click(function(){
		$('.img-responsive').toggleClass('top');
	});



});
