"use strict";!function(a){a.console||(console={});for(var b="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),c=function(){},d=0;d<b.length;d++)console[b[d]]||(console[b[d]]=c)}(window),function(a){a.environment={TOUCH_DOWN_EVENT_NAME:"mousedown touchstart",TOUCH_UP_EVENT_NAME:"mouseup touchend",TOUCH_MOVE_EVENT_NAME:"mousemove touchmove",TOUCH_DOUBLE_TAB_EVENT_NAME:"dblclick dbltap",isAndroid:function(){return navigator.userAgent.match(/Android/i)},isBlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},isIOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},isOpera:function(){return navigator.userAgent.match(/Opera Mini/i)},isWindows:function(){return navigator.userAgent.match(/IEMobile/i)},isMobile:function(){return!!(a.environment.isAndroid()||a.environment.isBlackBerry()||a.environment.isIOS()||a.environment.isOpera()||a.environment.isWindows())}}}(window.CMS=window.CMS||{});var notifications=window.notifications||{};!function(a,b){var c={eventListeners:[],addListener:function(a,b,d){c.listenerExists(a,b)||c.eventListeners.push({destroyOnUse:d,handler:b,type:a})},listenerExists:function(a,b){for(var d={},e=0,f=c.eventListeners.length;e<f;e+=1)if(d=c.eventListeners[e],a===d.type&&b===d.handler)return!0;return!1},removeListener:function(a,b){for(var d={},e=0,f=c.eventListeners.length;e<f;e+=1)if(d=c.eventListeners[e],a===d.type&&b===d.handler)return void c.eventListeners.splice(e,1)},sendNotification:function(a,b){for(var d,e={},f=c.eventListeners.length-1;f>=0;f-=1)e=c.eventListeners[f],a===e.type&&(d=e.handler,e.destroyOnUse&&c.removeListener(e.type,e.handler),d(b))}};window.notifications={sendNotification:function(a,b){c.sendNotification(a,b)},addListener:function(a,b,d){d!==!0&&(d=!1),c.addListener(a,b,d)},removeListener:function(a,b){c.removeListener(a,b)},WINDOW_RESIZE:"WINDOW_RESIZE"}}(window.CMS=window.CMS||{},jQuery),function(a){a.Supports={touch:"ontouchstart"in document.documentElement||!!(window.DocumentTouch&&document instanceof DocumentTouch),touch2:"onorientationchange"in window&&"ontouchstart"in window,isAndroidNativeBrowser:function(){var a=navigator.userAgent.toLowerCase();return a.indexOf("android")!==-1&&a.indexOf("mobile")!==-1&&a.indexOf("chrome")===-1}(),viewportW:function(){var a=document.documentElement.clientWidth,b=window.innerWidth;return a<b?b:a},viewportH:function(){var a=document.documentElement.clientHeight,b=window.innerHeight;return a<b?b:a}}}(window.CMS=window.CMS||{}),function(a){a.cookies={getItem:function(a){return a&&this.hasItem(a)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},setItem:function(a,b,c,d,e,f){if(a&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(a)){var g="";if(c)switch(c.constructor){case Number:g=c===1/0?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+c;break;case String:g="; expires="+c;break;case Date:g="; expires="+c.toGMTString()}document.cookie=escape(a)+"="+escape(b)+g+(e?"; domain="+e:"")+(d?"; path="+d:"")+(f?"; secure":"")}},removeItem:function(a,b){a&&this.hasItem(a)&&(document.cookie=escape(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(b?"; path="+b:""))},hasItem:function(a){return new RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),b=0;b<a.length;b++)a[b]=unescape(a[b]);return a}}}(window.CMS=window.CMS||{}),function(a,b,c,d,e){a.cookiePolicy=function(){var c=b("#cookie-acceptance");"true"!==a.cookies.getItem("cookies-agreed")&&(c.removeClass("is-hidden"),c.find(".accept-button").on("click",function(b){a.cookies.setItem("cookies-agreed","true",1/0,"/")}))}}(window.CMS=window.CMS||{},jQuery,window,document),function(a,b,c,d,e){b(function(){a.Config.init()}),a.Config={$body:b(d.body),init:function(){a.foundationConfig.init(),a.UI.init(),a.cookiePolicy(),a.windowResize.init(),a.Supports.touch&&a.touch.init(),b(c).load(function(){})}},a.foundationConfig={init:function(){Foundation.Reveal.defaults.animationIn="fade-in",Foundation.Reveal.defaults.animationOut="fade-out",Foundation.Reveal.defaults.resetOnClose=!0,Foundation.Reveal.defaults.closeOnClick=!0,Foundation.Reveal.defaults.closeOnEsc=!0,Foundation.Orbit.defaults.animInFromRight="fade-in",Foundation.Orbit.defaults.animOutToRight="fade-out",Foundation.Orbit.defaults.animInFromLeft="fade-in",Foundation.Orbit.defaults.animOutToLeft="fade-out",Foundation.Orbit.defaults.autoPlay=!1,Foundation.Orbit.defaults.timerDelay=8e3,Foundation.Orbit.defaults.infiniteWrap=!1,Foundation.Orbit.defaults.swipe=!0,Foundation.Orbit.defaults.pauseOnHover=!0,Foundation.Orbit.defaults.accessible=!0,Foundation.Orbit.defaults.useMUI=!0,Foundation.Orbit.defaults.bullets=!0,Foundation.Orbit.defaults.navButtons=!0,Foundation.Accordion.defaults.slideSpeed=250,Foundation.Accordion.defaults.multiExpand=!1,Foundation.Accordion.defaults.allowAllClosed=!0,Foundation.OffCanvas.defaults.closeOnClick=!0,b(d).foundation(),a.foundationConfig.setEnhancements()},setEnhancements:function(){b(".header-sticky-container").on("sticky.zf.unstuckfrom:top",function(){var a=b(this).find(".sticky").first().outerHeight(!0);b(this).css("height",a+"px")}),b(".header-sticky-container").on("sticky.zf.stuckto:top",function(){}),b(".reveal").on("open.zf.reveal",Foundation.util.throttle(function(){b(".reveal [data-orbit]").each(function(b){a.foundationConfig.reInitOrbit(this)})},100))},reInitOrbit:function(a){var c=b(a),d=new Foundation.Orbit(c);d.destroy(),c.data("orbit",""),c.attr("style",""),c.find("ul").attr("style",""),c.find("li").attr("style",""),d=new Foundation.Orbit(c)}},a.UI={init:function(){a.Forms.ajaxSubmittedForm("#contactform_form","#contactFormBtn","json",!0,!0),a.Forms.ajaxSubmittedForm("#commentform_form","#submitCommentBtn","json",!0,!0),a.Forms.ajaxSubmittedForm("#sonata_user_custom_user_registration_form","#userRegisterFormBtn","json",!1,!1),a.Forms.ajaxSubmittedForm("#sonata_user_generic_details_form","#userGenericDetailsFormBtn","json",!0,!1),a.Forms.ajaxSubmittedForm("#sonata_user_contact_details_form","#userContactDetailsFormBtn","json",!0,!1),a.Forms.ajaxSubmittedForm("#sonata_user_account_preferences_form","#userAccountPreferencesFormBtn","json",!0,!1),a.Forms.ajaxSubmittedForm("#sonata_user_change_password_form","#userPasswordFormBtn","json",!0,!0),a.Forms.ajaxSubmittedForm("#sonata_user_resetting_request","#userResetPasswordFormBtn","json",!1,!1),a.Forms.ajaxSubmittedForm("#sonata_user_resetting_form","#userResetFormBtn","json",!1,!1),a.Forms.ajaxSubmittedForm("#user_login_form","#loginBtn","json",!1,!1),a.Forms.ajaxSubmittedForm("#sonata_user_filter_users_form","#filterResultsBtn","json",!1,!1),a.Forms.datepicker(),a.Forms.setupFilters()}},a.Forms={$datepickerInputs:b(".datepickerField"),setupFilters:function(){b("#resetFilters").change(function(){var a=b(this).closest("form").find(":checkbox").not(this);a.removeAttr("checked")})},ajaxSubmittedForm:function(a,d,e,f,g){var h=b(a),i=b(d);h.length>0&&i.on("click",function(d){d.preventDefault(),i.prop("disabled",!0),i.addClass("button-loading");var j=h.serializeArray();j.push({name:"isAjax",value:"true"});var k=h.attr("action"),l=b.post(k,j,null,e);l.always(function(){i.prop("disabled",!1),i.removeClass("button-loading")}),l.done(function(d){if(b(".formError").remove(),b(".formSuccess").remove(),b("label.error").removeClass("error"),b("input.error").removeClass("error"),b("select.error").removeClass("error"),b("textarea.error").removeClass("error"),d.hasErrors===!1){if("undefined"!=typeof d.newComment&&d.newComment.length>0){var e='<div class="row comment odd">';e+='<div id="comment-'+d.newComment[0].id+'" class="large-12 small-12 columns panel">',e+="<h4>"+d.newComment[0].title+"</h4>",e+="<p>"+d.newComment[0].comment+"</p></div></div>",b(".previous-comments").prepend(e)}f?(g&&h.trigger("reset"),d.formMessage&&""!==d.formMessage&&(b('<span class="form-message error form-error formSuccess callout is-visible success">'+d.formMessage+"</span>").hide().insertAfter(i),b(".formSuccess").fadeIn(200))):d.redirectURL&&(c.location.href=d.redirectURL)}else{if(null!==d.errors){var j=d.errors;b.each(j,function(c,d){d.hasOwnProperty("first")?(b(a+"_"+c+"_first").addClass("error"),b(a+"_"+c+"_first").after(b('<span class="formError error form-error is-visible">'+d.first[0]+"</span>").hide())):d.hasOwnProperty("second")?(b(a+"_"+c+"_second").addClass("error"),b(a+"_"+c+"_second").after(b('<span class="formError error form-error is-visible">'+d.second[0]+"</span>").hide())):(b(a+"_"+c).addClass("error"),b(a+"_"+c).after(b('<span class="formError error form-error is-visible">'+d[0]+"</span>").hide()))})}d.formMessage&&""!==d.formMessage&&b('<span class="form-message error form-error formError callout is-visible alert">'+d.formMessage+"</span>").hide().insertBefore(i),b(".formError").fadeIn(200)}}),l.fail(function(a,c,d){b(".formError").remove(),b(".formSuccess").remove(),b("label.error").removeClass("error"),b('<span class="form-message error form-error formError callout is-visible alert">There was a '+c+" error submitting the details. Please try again.</span>").hide().insertAfter(i),b(".formError").fadeIn(200)})})},datepicker:function(){a.Forms.$datepickerInputs.fdatepicker({autoShow:!0,disableDblClickSelection:!1,closeButton:!0,pickTime:!1,isInline:!1})}},a.touch={init:function(){}},a.windowResize={init:function(){var d=Foundation.MediaQuery.current;b(c).on("resize",Foundation.util.throttle(function(){notifications.sendNotification(notifications.WINDOW_RESIZE),b("[data-orbit]").each(function(b){a.foundationConfig.reInitOrbit(this)})},100)),b(c).on("changed.zf.mediaquery",function(a,b,c){d=Foundation.MediaQuery.current})}}}(window.CMS=window.CMS||{},jQuery,window,document);
//# sourceMappingURL=scripts.min.js.map