var musty==function(){function d(a,c){return function(b){return(""+b).replace(a,c)}}function p(a){var c,b=typeof a;if("object"==b&&a){if(a.splice)return[1,a.length];for(c in a)return[0,1];return[]}return a||"number"==b&&!isNaN(a)?[0,1]:[]}function l(a){return"\\x"+("0"+a.charCodeAt(0).toString(16)).slice(-2)}function g(a){a=a.replace(/\s*$/,"").split("@");for(var c=a.length;c--;)a[c]='"'+m(a[c])+'"';return"g(d,["+a+"])"}var q=d(/[\"\/\\<>&\']/g,function(a){return"&#"+a.charCodeAt(0)+";"}),m=d(/[\x00-\x1f\"\/\\]/g,l),r=d(/\{\{\{\s*((?:\}{0,2}[^\}])*)\}\}\}|\{\{([#\/\^\!>]?)\s*((?:\}?[^\}])*)\}\}|([\x00-\x1f\"\/\\])/g,function(a,c,b,e,n){return"!"==b?"":">"==b?'"+g(d,[".","'+m(e)+'",0,d])+"':"/"==b?'"}return s})(d)+"':b?'"+(function(d){var k='+g(e)+',s="",i,c=d,p=t(k);'+("#"==b?"for(i=0;i<p[1];i++){if(p[0])d=[k[i]].concat(c);":"if(!p[1]){")+'s+="':c?'"+'+g(c)+'+"':e?'"+h('+g(e)+')+"':n?l(n):""});return function(a,c){try{var b=new Function("d","g","h","t",'return "'+r(a)+'"');return function(a,e,d){return b(d||[a],function(a,b){var f=b[0],d=e&&e[b[1]]||c&&c[b[1]],k,h,g=a.length;for(h=0;h<g&&!a[h].hasOwnProperty(f);h++);k=a[h];f=h<g?"function"==typeof k[f]?k[f]():k[f]:"."==f?a[0]:"";return d?d.apply(null,(b.splice(0,2,f),b)):f},q,p)}}catch(e){return!1}}}();