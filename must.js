var must=function(){function b(a,d){return function(c){return(""+c).replace(a,d)}}function h(a){var d,c=typeof a;if("object"==c){for(d in a)return[1,a.length||0];return[]}return a||"number"==c&&!isNaN(a)?[]:[0,1]}function g(a){return"\\x"+("0"+a.charCodeAt(0).toString(16)).slice(-2)}function e(a){a=a.split("@");for(var d=a.length;d--;)a[d]='"'+k(a[d])+'"';return"g(d,["+a+"])"}var l=b(/[\"\/\\<>&\']/g,function(a){return"&#"+a.charCodeAt(0)+";"}),k=b(/[\x00-\x1f\"\/\\]/g,g),m=b(/\{\{\{((?:\}{0,2}[^\}])*)\}\}\}|\{\{([#\/\^]?)((?:\}?[^\}])*)\}\}|([\b\f\n\r\t\"\/\\])/g,function(a,d,c,f,b){return"/"==c?'"}return s})(d)+"':c?'"+(function(d){var k='+e(f)+',s="",i,p=t(k);'+("#"==c?"for(i=0;i<p[1];i++){if(p[0])d=k[i];":"if(!p[1]){")+'s+="':d?'"+'+e(d)+'+"':f?'"+h('+e(f)+')+"':b?g(b):""});return function(a,d){function c(a,c){var b=c[0],b=a&&a.hasOwnProperty(b)?"function"==typeof a[b]?a[b]():a[b]:"."==b?a:"";d&&d[c[1]]&&d[c[1]].apply(null,c.splice(0,2,b));return b}try{var b=new Function("d","g","h","t",'return "'+m(a)+'"');return function(a){return b(a,c,l,h)}}catch(e){return!1}}}();
