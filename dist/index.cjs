var e=require("axios"),t=require("lodash");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/n(e),i=/*#__PURE__*/n(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var r=function(e,t,n,a,i){return new Promise(function(s,r){var o={};if(e||(o.message="Missing "+(a||"Params"),o.status=400,r(o)),"search"===i&&(e.searchQuery||(o.message="Missing searchQuery",o.status=400,r(o))),"retrieve"===i&&(e.id||(o.message="Missing id",o.status=400,r(o))),"autocomplete"===i){var c=e.field,u=["company","country","industry","location","major","region","role","school","sub_role","skill","title"];c?-1===u.indexOf(c)&&(o.message="field should be one of: "+u,o.status=400,r(o)):(o.message="Missing field",o.status=400,r(o))}"jobTitle"===i&&(e.jobTitle||(o.message="Missing jobTitle",o.status=400,r(o))),"skill"===i&&(e.skill||(o.message="Missing skill",o.status=400,r(o))),t||(o.message="Missing API Base Path",o.status=400,r(o)),(!n||n.length<36)&&(o.message="Invalid API Key",o.status=401,r(o)),s()})},o=function(e){var t={400:"Request contained either missing or invalid parameters",401:"Request contained a missing or invalid key",402:"Payment Required, You have hit your account maximum (all matches used)",404:"No records were found matching your request",405:"Request method is not allowed on the requested resource",429:"An error occurred due to requests hitting the API too quick",500:"The server encountered an unexpected condition which prevented it from fulfilling the request"};if(e.response){var n=e.response.status,a=n>=500&&n<600?500:n;return{status:a,message:t[a]}}return{status:500,message:t[500]}},c=function(e){var t={rateLimitRemaining:e.headers["x-ratelimit-remaining"]?JSON.parse(e.headers["x-ratelimit-remaining"].replace(/'/g,'"')):void 0,rateLimitReset:e.headers["x-ratelimit-reset"]||void 0,rateLimitLimit:e.headers["x-ratelimit-limit"]?JSON.parse(e.headers["x-ratelimit-limit"].replace(/'/g,'"')):void 0,totalLimitOveragesRemaining:e.headers["x-totallimit-overages-remaining"]?Number(e.headers["x-totallimit-overages-remaining"]):void 0,totalLimitPurchasedRemaining:e.headers["x-totallimit-purchased-remaining"]?Number(e.headers["x-totallimit-purchased-remaining"]):void 0,totalLimitRemaining:e.headers["x-totallimit-remaining"]?Number(e.headers["x-totallimit-remaining"]):void 0,callCreditsType:e.headers["x-call-credits-type"]||void 0,callCreditsSpent:e.headers["x-call-credits-spent"]?Number(e.headers["x-call-credits-spent"]):void 0,lifetimeUsed:e.headers["x-lifetime-used"]?Number(e.headers["x-lifetime-used"]):void 0};return Array.isArray(e.data)?{items:e.data,rateLimit:t}:s({},e.data,{rateLimit:t})},u=function(e,t,n,i){return new Promise(function(u,l){r(n,e,t,null,"cleaner").then(function(){a.default.get(e+"/"+i+"/clean",{params:s({api_key:t},n),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&u(c(e))}).catch(function(e){l(o(e))})}).catch(function(e){l(e)})})},l=function(e,t,n,s,u){return new Promise(function(l,d){r(s,e,n,null,"enrichment").then(function(){var r=s.sandbox&&"person"===u?t+"/"+u+"/enrich":e+"/"+u+"/enrich",h=i.default.cloneDeep(s),p=new URLSearchParams;delete h.sandbox,Object.entries(h).forEach(function(e){var t=e[0],n=e[1];"profile"===t?Array.isArray(n)?p.append(t,JSON.stringify(n)):p.append(t,n):"object"==typeof n?Array.isArray(n)?n.forEach(function(e){p.append(t,e)}):p.append(t,JSON.stringify(n)):p.append(t,n)}),p.append("api_key",n),a.default.get(r,{params:p,headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&l(c(e))}).catch(function(e){d(o(e))})}).catch(function(e){d(e)})})},d=function(e,t,n,i,s,u){return new Promise(function(l,d){r(s,e,n,null,"search").then(function(){var r,h=s.pretty,p=s.sandbox,f=((r={titlecase:s.titlecase||!1,dataset:s.dataset||"all",scroll_token:s.scroll_token||null,size:s.size||10})["sql"===i?"sql":"query"]=s.searchQuery,r.pretty=h||!1,r);a.default.post(p&&"person"===u?t+"/person/search":e+"/"+u+"/search",f,{headers:{"Content-Type":"application/json","Accept-Encoding":"gzip","X-Api-Key":n,"User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&l(c(e))}).catch(function(e){d(o(e))})}).catch(function(e){d(e)})})};module.exports=function(e){var t=this,n=e.apiKey,h=e.basePath,p=e.sandboxBasePath,f=e.version;this.apiKey=void 0,this.basePath=void 0,this.sandboxBasePath=void 0,this.person=void 0,this.company=void 0,this.school=void 0,this.location=void 0,this.autocomplete=void 0,this.skill=void 0,this.jobTitle=void 0,this.apiKey=n,this.basePath=h||"https://api.peopledatalabs.com/"+(f||"v5"),this.sandboxBasePath=p||"https://sandbox.api.peopledatalabs.com/"+(f||"v5"),this.person={enrichment:function(e){return l(t.basePath,t.sandboxBasePath,t.apiKey,e,"person")},search:{elastic:function(e){return d(t.basePath,t.sandboxBasePath,t.apiKey,"elastic",e,"person")},sql:function(e){return d(t.basePath,t.sandboxBasePath,t.apiKey,"sql",e,"person")}},bulk:function(e){return function(e,t,n){var i={"Content-Type":"application/json","Accept-Encoding":"gzip","X-Api-Key":t,"User-Agent":"PDL-JS-SDK"};return new Promise(function(s,u){r(n,e,t,"Records","bulk").then(function(){a.default.post(e+"/person/bulk",n,{headers:i}).then(function(e){s(c(e))}).catch(function(e){u(o(e))})}).catch(function(e){u(e)})})}(t.basePath,t.apiKey,e)},identify:function(e){return function(e,t,n,s){return new Promise(function(u,l){r(s,e,n,null,"identify").then(function(){var r=s.sandbox?t+"/person/identify":e+"/person/identify",d=i.default.cloneDeep(s),h=new URLSearchParams;delete d.sandbox,Object.entries(d).forEach(function(e){var t=e[0],n=e[1];"profile"===t?Array.isArray(n)?h.append(t,JSON.stringify(n)):h.append(t,n):"object"==typeof n?Array.isArray(n)?n.forEach(function(e){h.append(t,e)}):h.append(t,JSON.stringify(n)):h.append(t,n)}),h.append("api_key",n),a.default.get(r,{params:h,headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&u(c(e))}).catch(function(e){l(o(e))})}).catch(function(e){l(e)})})}(t.basePath,t.sandboxBasePath,t.apiKey,e)},retrieve:function(e){return function(e,t,n){return new Promise(function(i,u){r(n,e,t,"ID","retrieve").then(function(){a.default.get(e+"/person/retrieve/"+n.id,{params:s({api_key:t},n),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&i(c(e))}).catch(function(e){u(o(e))})}).catch(function(e){u(e)})})}(t.basePath,t.apiKey,e)}},this.company={enrichment:function(e){return l(t.basePath,t.sandboxBasePath,t.apiKey,e,"company")},search:{elastic:function(e){return d(t.basePath,t.sandboxBasePath,t.apiKey,"elastic",e,"company")},sql:function(e){return d(t.basePath,t.sandboxBasePath,t.apiKey,"sql",e,"company")}},cleaner:function(e){return u(t.basePath,t.apiKey,e,"company")}},this.school={cleaner:function(e){return u(t.basePath,t.apiKey,e,"school")}},this.location={cleaner:function(e){return u(t.basePath,t.apiKey,e,"location")}},this.autocomplete=function(e){return function(e,t,n){return new Promise(function(i,u){r(n,e,t,null,"autocomplete").then(function(){a.default.get(e+"/autocomplete",{params:s({api_key:t},{field:n.field,text:n.text||"",size:n.size||10,pretty:n.pretty||!1}),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&i(c(e))}).catch(function(e){u(o(e))})}).catch(function(e){u(e)})})}(t.basePath,t.apiKey,e)},this.jobTitle=function(e){return function(e,t,n){return new Promise(function(i,u){r(n,e,t,null,"jobTitle").then(function(){a.default.get(e+"/job_title/enrich",{params:s({api_key:t},{job_title:n.jobTitle,pretty:n.pretty||!1}),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&i(c(e))}).catch(function(e){u(o(e))})}).catch(function(e){u(e)})})}(t.basePath,t.apiKey,e)},this.skill=function(e){return function(e,t,n){return new Promise(function(i,u){r(n,e,t,null,"skill").then(function(){a.default.get(e+"/skill/enrich",{params:s({api_key:t},{skill:n.skill,pretty:n.pretty||!1}),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(function(e){var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&i(c(e))}).catch(function(e){u(o(e))})}).catch(function(e){u(e)})})}(t.basePath,t.apiKey,e)}};
//# sourceMappingURL=index.cjs.map
