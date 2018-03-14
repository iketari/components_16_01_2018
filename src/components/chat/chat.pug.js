function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function chatTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fcomponents\u002Fchat\u002Fchat.pug":"div.chat\n    div.chat__container\n        div.header\n            h2 You are logged in as %username%\n        div.chat__box\n            each message in messages\n                div(class=\"message-box \" + (message.isMine ? \"right-img\" : \"left-img\"))\n                    div.picture\n                        img(src= message.avatar)\n                        span.time= message.date.getHours() + ':' + message.date.getMinutes()\n                    div.message\n                        span=message.name\n                        p=message.text\n"};
;var locals_for_with = (locals || {});(function (messages) {var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n\u003Cdiv class=\"chat\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n  \u003Cdiv class=\"chat__container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n      \u003Ch2\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "You are logged in as %username%\u003C\u002Fh2\u003E\n    \u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"chat__box\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n      \u003Cdiv" + (pug_attr("class", pug_classes(["message-box " + (message.isMine ? "right-img" : "left-img")], [true]), false, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"picture\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", message.avatar, true, false)) + "\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"time\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.date.getHours() + ':' + message.date.getMinutes()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"message\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n          \u003Cp\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n      \u003Cdiv" + (pug_attr("class", pug_classes(["message-box " + (message.isMine ? "right-img" : "left-img")], [true]), false, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"picture\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", message.avatar, true, false)) + "\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"time\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.date.getHours() + ':' + message.date.getMinutes()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"message\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n          \u003Cp\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}