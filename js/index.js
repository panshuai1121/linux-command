!function(){function e(){var e=this.$$;this.commands=linux_commands||[],this.elm_query=e("query"),this.elm_btn=e("search_btn"),this.elm_info=e("commands_info"),this.elm_result=e("result"),this.elm_search_result=e("search_list_result"),this.root_path=function(){var t=e("current_path"),n=window.location.origin+window.location.pathname;return t?n.replace(t.value,""):""}(),this.query="",this.query_size=5,this.page_size=20,this.elm_info.innerHTML=this.commands.length,this.init(),this.goToIndex()}e.prototype={$$:function(e){return document.getElementById(e)},goToIndex:function(){for(var e=document.getElementsByTagName("A"),t=0;t<e.length;t++)"/"===e[t].pathname&&(e[t].href=this.root_path.replace(/\/$/,"")+"/")},bindEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},isSreachIndexOF:function(e,t){var n=!1;if(e&&"[object Array]"===toString.call(e)){for(var r=0;r<e.length;r++)e[r].toLowerCase()===t.toLowerCase()?n=!0:null;return n}return!(!e||!t)&&e.toLowerCase().indexOf(t.toLowerCase())>-1},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/,"")).match(t);return null!=n?unescape(n[2]):null},pushState:function(){window.history&&window.history.pushState&&(this.query?history.pushState({},"linux_commands","#!kw="+this.query):history.pushState({},"linux_commands",window.location.pathname))},simple:function(e,t){return e.replace(/\$\w+\$/gi,function(e){var n=t[e.replace(/\$/g,"")];return"undefined"==typeof n?"":n})},createKeyworldsHTML:function(e,t,n){var r=e.n,i=e.d,s=new RegExp("("+t+")","ig"),l="";t&&(r=e.n.replace(s,'<i class="kw">$1</i>'),i=e.d.replace(s,'<i class="kw">$1</i>')||"");var a=this.root_path.replace(/\/$/,"");return l=n?'<a href="'+a+'/c$url$.html"><strong>$name$</strong> - $des$</a><p></p>':'<a href="'+a+'/c$url$.html"><strong>$name$</strong> - $des$</a>',this.simple(l,{name:r,url:e.p,des:i})},searchResult:function(e){var t=this.commands,n=this,r=0,i=t.length,s=[],l=e?this.page_size:this.query_size;if(t&&t.length&&toString.call(t).indexOf("Array")>-1)for(var a=0;r<i&&t[r];r++)(n.isSreachIndexOF(t[r].n,n.query)||n.isSreachIndexOF(t[r].d,n.query))&&a<l&&(s.push(n.createKeyworldsHTML(t[r],n.query,e)),++a);var o=e?this.elm_search_result:this.elm_result;o.innerHTML="";for(var r=0;r<s.length;r++){var u=document.createElement("LI");u.innerHTML=s[r],o.appendChild(u)}if(0===s.length){var u=document.createElement("LI");u.innerHTML="<span>"+this.query?"请尝试输入一些字符，进行搜索！</span>":"没有搜索到任何内容，请尝试输入其它字符！",o.appendChild(u)}},init:function(){var e=this,t=e.getQueryString("kw"),n=null;this.elm_query.value=t,this.query=t||"",this.elm_search_result&&e.searchResult(!0),this.bindEvent(this.elm_query,"input",function(t){e.query=t.target.value,e.pushState(),e.query?e.searchResult():e.elm_result.style.display="none",e.elm_search_result?e.elm_btn.click():e.elm_result.style.display=e.query?"block":"none"}),this.bindEvent(this.elm_btn,"click",function(t){e.elm_result.style.display="none",e.elm_search_result?e.searchResult(!0):window.location.href=e.root_path+"/list.html#!kw="+e.query}),this.bindEvent(this.elm_query,"focus",function(t){e.searchResult(),e.query&&(e.elm_result.style.display="block")}),this.bindEvent(this.elm_query,"blur",function(t){n=setTimeout(function(){e.elm_result.style.display="none"},300)}),this.bindEvent(document,"keyup",function(t){"Enter"==t.key&&e.elm_btn.click()}),t&&e.searchResult()}},new e}();