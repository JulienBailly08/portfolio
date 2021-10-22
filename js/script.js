//PLUG-IN JQUERY TYPED.JS
/* Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com */!function(t){"use strict";var s=function(s,o){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,o),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){t.typewrite(t.strings[t.arrayPos],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<i class="typed-cursor">'+this.cursorChar+"</i>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.typeSpeed,e=this;e.timeout=setTimeout(function(){var o=0,i=t.substr(s);if("^"===i.charAt(0)){var r=1;/^\^\d+/.test(i)&&(i=/\d+/.exec(i)[0],r+=i.length,o=parseInt(i)),t=t.substring(0,s)+t.substring(s+r)}if("html"===e.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}e.timeout=setTimeout(function(){if(s===t.length){if(e.options.onStringTyped(e.arrayPos),e.arrayPos===e.strings.length-1&&(e.options.callback(),e.curLoop++,e.loop===!1||e.curLoop===e.loopCount))return;e.timeout=setTimeout(function(){e.backspace(t,s)},e.backDelay)}else{0===s&&e.options.preStringTyped(e.arrayPos);var o=t.substr(0,s+1);e.attr?e.el.attr(e.attr,o):e.isInput?e.el.val(o):"html"===e.contentType?e.el.html(o):e.el.text(o),s++,e.typewrite(t,s)}},o)},o)}},backspace:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.backSpeed,e=this;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var o="";"<"!==t.substr(s).charAt(0);)o-=t.substr(s).charAt(0),s--;s--,o+="<"}var i=t.substr(0,s);e.attr?e.el.attr(e.attr,i):e.isInput?e.el.val(i):"html"===e.contentType?e.el.html(i):e.el.text(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.init()):e.typewrite(e.strings[e.arrayPos],s))},o)}},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(o){return this.each(function(){var e=t(this),i=e.data("typed"),r="object"==typeof o&&o;i||e.data("typed",i=new s(this,r)),"string"==typeof o&&i[o]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

$("#typed").typed({
    showCursor :false,
    cursorChar :":D",
    fadeOut: true,
    strings: ["Bienvenue !","Developeur Web"],
    backSpeed :100,
    typeSpeed: 30
});


!function($,e,t,a){var n=function(){if(t.documentMode)return t.documentMode;for(var e=7;e>0;e--){var n=t.createElement("div");if(n.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",n.getElementsByTagName("span").length)return n=null,e;n=null}return a}(),r=e.console||{log:function(){},time:function(){}},i="blast",s={latinPunctuation:"–—′’'“″„\"(«.…¡¿′’'”″“\")».…!?",latinLetters:"\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"},l={abbreviations:new RegExp("[^"+s.latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+s.latinLetters+"]","ig"),innerWordPeriod:new RegExp("["+s.latinLetters+"].["+s.latinLetters+"]","ig"),onlyContainsPunctuation:new RegExp("[^"+s.latinPunctuation+"]"),adjoinedPunctuation:new RegExp("^["+s.latinPunctuation+"]+|["+s.latinPunctuation+"]+$","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:new RegExp("(^| )"+i+"( |$)","gi")};$.fn[i]=function(d){function o(e){return e.replace(l.abbreviations,function(e){return e.replace(/\./g,"{{46}}")}).replace(l.innerWordPeriod,function(e){return e.replace(/\./g,"{{46}}")})}function c(e){return e.replace(/{{(\d{1,3})}}/g,function(e,t){return String.fromCharCode(t)})}function u(e,a){var n=t.createElement(a.tag);if(n.className=i,a.customClass&&(n.className+=" "+a.customClass,a.generateIndexID&&(n.id=a.customClass+"-"+f.blastedIndex)),a.generateValueClass===!0&&!a.search&&("character"===a.delimiter||"word"===a.delimiter)){var r,s=e.data;"word"===a.delimiter&&l.onlyContainsPunctuation.test(s)&&(s=s.replace(l.adjoinedPunctuation,"")),r=i+"-"+a.delimiter.toLowerCase()+"-"+s.toLowerCase(),n.className+=" "+r}return a.aria&&n.setAttribute("aria-hidden","true"),n.appendChild(e.cloneNode(!1)),n}function g(e,t){var a=-1,n=0;if(3===e.nodeType&&e.data.length){if(f.nodeBeginning&&(e.data=t.search||"sentence"!==t.delimiter?c(e.data):o(e.data),f.nodeBeginning=!1),a=e.data.search(p),-1!==a){var r=e.data.match(p),i=r[0],s=r[1]||!1;f.blastedIndex++,""===i?a++:s&&s!==i&&(a+=i.indexOf(s),i=s);var d=e.splitText(a);d.splitText(i.length),n=1,t.search||"sentence"!==t.delimiter||(d.data=c(d.data));var m=u(d,t,f.blastedIndex);d.parentNode.replaceChild(m,d),f.wrappers.push(m)}}else if(1===e.nodeType&&e.hasChildNodes()&&!l.skippedElements.test(e.tagName)&&!l.hasPluginClass.test(e.className))for(var h=0;h<e.childNodes.length;h++)f.nodeBeginning=!0,h+=g(e.childNodes[h],t);return n}function m(t,s){s.debug&&r.time("blast reversal");var l=!1;t.removeClass(i+"-root").removeAttr("aria-label").find("."+i).each(function(){var e=$(this);if(e.closest("."+i+"-root").length)l=!0;else{var t=this.parentNode;7>=n&&t.firstChild.nodeName,t.replaceChild(this.firstChild,this),t.normalize()}}),e.Zepto?t.data(i,a):t.removeData(i),s.debug&&(r.log(i+": Reversed Blast"+(t.attr("id")?" on #"+t.attr("id")+".":".")+(l?" Skipped reversal on the children of one or more descendant root elements.":"")),r.timeEnd("blast reversal"))}var h=$.extend({},$.fn[i].defaults,d),p,f={};if(h.search.length&&("string"==typeof h.search||/^\d/.test(parseFloat(h.search))))h.delimiter=h.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g,"\\$&"),p=new RegExp("(?:^|[^-"+s.latinLetters+"])("+h.delimiter+"('s)?)(?![-"+s.latinLetters+"])","i");else switch("string"==typeof h.delimiter&&(h.delimiter=h.delimiter.toLowerCase()),h.delimiter){case"letter":case"char":case"character":p=/(\S)/;break;case"word":p=/\s*(\S+)\s*/;break;case"sentence":p=/(?=\S)(([.]{2,})?[^!?]+?([.…!?]+|(?=\s+$)|$)(\s*[′’'”″“")»]+)*)/;break;case"element":p=/(?=\S)([\S\s]*\S)/;break;default:if(!(h.delimiter instanceof RegExp))return r.log(i+": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting."),!0;p=h.delimiter}if(this.each(function(){var e=$(this),n=e.text();if(d!==!1){f={blastedIndex:0,nodeBeginning:!1,wrappers:[]},e.data(i)===a||"search"===e.data(i)&&h.search!==!1||(m(e,h),h.debug&&r.log(i+": Removed element's existing Blast call.")),e.data(i,h.search!==!1?"search":h.delimiter),h.aria&&e.attr("aria-label",n),h.stripHTMLTags&&e.html(n);try{t.createElement(h.tag)}catch(s){h.tag="span",h.debug&&r.log(i+": Invalid tag supplied. Defaulting to span.")}e.addClass(i+"-root"),h.debug&&r.time(i),g(this,h),h.debug&&r.timeEnd(i)}else d===!1&&e.data(i)!==a&&m(e,h);h.debug&&$.each(f.wrappers,function(e,t){r.log(i+" ["+h.delimiter+"] "+this.outerHTML),this.style.backgroundColor=e%2?"#f12185":"#075d9a"})}),d!==!1&&h.returnGenerated===!0){var b=$().add(f.wrappers);return b.prevObject=this,b.context=this.context,b}return this},$.fn.blast.defaults={returnGenerated:!0,delimiter:"word",tag:"span",search:!1,customClass:"",generateIndexID:!1,generateValueClass:!1,stripHTMLTags:!1,aria:!0,debug:!1}}(window.jQuery||window.Zepto,window,document);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

$("h1").blast({ delimiter: "character" });
$("h1").hover(
  function(){
    var $spans = $(this).find('span');
    $spans.each(function(){
        var offsetX = getRandom(-300, 300);
        var offsetY = getRandom(-20, 20);
        var scale = getRandom(.5, 3);
         $(this).velocity({translateX : offsetX, translateY: offsetY, scale: scale, color: '#f2a365'}, 300, [ 50, 5 ]);
    });
  },
  function(){
    var $spans = $(this).find('span');
    $spans.each(function(){;
        $(this).velocity({translateX : 0, translateY: 0, scale: 1, color: '#ffffff'}, 100);
    });
  }
);

const submitButton = $("#submit");
const infoMail =$("#infoMail");
let firstname = $("#firstname");
let lastname = $("#lastname");
let mail = $("#mail");
let text = $("#text");



submitButton.on("click",function(envoi){
    envoi.preventDefault();
    $.ajax({
        url:"../mail/sendEmail.php",
        type:"POST",
        data:{
            firstname: firstname.val(),
            lastname: lastname.val(),
            mail: mail.val(),
			text: text.val()
        },
    }).done(function(OK){
	
	
		if(OK =='ok'){
		infoMail.text("Message envoyé");
    firstname.val("");
    lastname.val("");
    mail.val("");
    text.val("");
		setTimeout(function(){
			infoMail.text("");
		}, 3000);

	}
	else{
		infoMail.text("Merci de renseigner tout les champs");
		setTimeout(function(){
			infoMail.text("");
		}, 3000);
	}
	
    }).fail(function(erreur){
        console.log(erreur);
    });
});






