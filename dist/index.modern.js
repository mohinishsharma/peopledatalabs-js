import e from"axios";import t from"lodash";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},s.apply(this,arguments)}const a=(e,t,s,a,i)=>new Promise((n,r)=>{const o={};if(e||(o.message=`Missing ${a||"Params"}`,o.status=400,r(o)),"search"===i){const{searchQuery:t}=e;t||(o.message="Missing searchQuery",o.status=400,r(o))}if("retrieve"===i){const{id:t}=e;t||(o.message="Missing id",o.status=400,r(o))}if("autocomplete"===i){const{field:t}=e,s=["company","country","industry","location","major","region","role","school","sub_role","skill","title"];t?-1===s.indexOf(t)&&(o.message=`field should be one of: ${s}`,o.status=400,r(o)):(o.message="Missing field",o.status=400,r(o))}if("jobTitle"===i){const{jobTitle:t}=e;t||(o.message="Missing jobTitle",o.status=400,r(o))}if("skill"===i){const{skill:t}=e;t||(o.message="Missing skill",o.status=400,r(o))}t||(o.message="Missing API Base Path",o.status=400,r(o)),(!s||s.length<36)&&(o.message="Invalid API Key",o.status=401,r(o)),n()}),i=e=>{const t={400:"Request contained either missing or invalid parameters",401:"Request contained a missing or invalid key",402:"Payment Required, You have hit your account maximum (all matches used)",404:"No records were found matching your request",405:"Request method is not allowed on the requested resource",429:"An error occurred due to requests hitting the API too quick",500:"The server encountered an unexpected condition which prevented it from fulfilling the request"};if(e.response){const{status:s}=e.response,a=s>=500&&s<600?500:s;return{status:a,message:t[a]}}return{status:500,message:t[500]}},n=e=>{const t={rateLimitRemaining:e.headers["x-ratelimit-remaining"]?JSON.parse(e.headers["x-ratelimit-remaining"].replace(/'/g,'"')):void 0,rateLimitReset:e.headers["x-ratelimit-reset"]||void 0,rateLimitLimit:e.headers["x-ratelimit-limit"]?JSON.parse(e.headers["x-ratelimit-limit"].replace(/'/g,'"')):void 0,totalLimitOveragesRemaining:e.headers["x-totallimit-overages-remaining"]?Number(e.headers["x-totallimit-overages-remaining"]):void 0,totalLimitPurchasedRemaining:e.headers["x-totallimit-purchased-remaining"]?Number(e.headers["x-totallimit-purchased-remaining"]):void 0,totalLimitRemaining:e.headers["x-totallimit-remaining"]?Number(e.headers["x-totallimit-remaining"]):void 0,callCreditsType:e.headers["x-call-credits-type"]||void 0,callCreditsSpent:e.headers["x-call-credits-spent"]?Number(e.headers["x-call-credits-spent"]):void 0,lifetimeUsed:e.headers["x-lifetime-used"]?Number(e.headers["x-lifetime-used"]):void 0};return Array.isArray(e.data)?{items:e.data,rateLimit:t}:s({},e.data,{rateLimit:t})};var r=(t,r,o,h)=>new Promise((l,c)=>{a(o,t,r,null,"cleaner").then(()=>{e.get(`${t}/${h}/clean`,{params:s({api_key:r},o),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&l(n(e))}).catch(e=>{c(i(e))})}).catch(e=>{c(e)})}),o=(s,r,o,h,l)=>new Promise((c,d)=>{a(h,s,o,null,"enrichment").then(()=>{const a=h.sandbox&&"person"===l?`${r}/${l}/enrich`:`${s}/${l}/enrich`,p=t.cloneDeep(h),m=new URLSearchParams;delete p.sandbox,Object.entries(p).forEach(([e,t])=>{"profile"===e?Array.isArray(t)?m.append(e,JSON.stringify(t)):m.append(e,t):"object"==typeof t?Array.isArray(t)?t.forEach(t=>{m.append(e,t)}):m.append(e,JSON.stringify(t)):m.append(e,t)}),m.append("api_key",o),e.get(a,{params:m,headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&c(n(e))}).catch(e=>{d(i(e))})}).catch(e=>{d(e)})}),h=(t,s,r,o,h,l)=>new Promise((c,d)=>{a(h,t,r,null,"search").then(()=>{const{dataset:a,searchQuery:p,size:m,scroll_token:u,titlecase:g,pretty:y,sandbox:b}=h;e.post(b&&"person"===l?`${s}/person/search`:`${t}/${l}/search`,{titlecase:g||!1,dataset:a||"all",scroll_token:u||null,size:m||10,["sql"===o?"sql":"query"]:p,pretty:y||!1},{headers:{"Content-Type":"application/json","Accept-Encoding":"gzip","X-Api-Key":r,"User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&c(n(e))}).catch(e=>{d(i(e))})}).catch(e=>{d(e)})});class l{constructor({apiKey:l,basePath:c,sandboxBasePath:d,version:p}){this.apiKey=void 0,this.basePath=void 0,this.sandboxBasePath=void 0,this.person=void 0,this.company=void 0,this.school=void 0,this.location=void 0,this.autocomplete=void 0,this.skill=void 0,this.jobTitle=void 0,this.apiKey=l,this.basePath=c||`https://api.peopledatalabs.com/${p||"v5"}`,this.sandboxBasePath=d||`https://sandbox.api.peopledatalabs.com/${p||"v5"}`,this.person={enrichment:e=>o(this.basePath,this.sandboxBasePath,this.apiKey,e,"person"),search:{elastic:e=>h(this.basePath,this.sandboxBasePath,this.apiKey,"elastic",e,"person"),sql:e=>h(this.basePath,this.sandboxBasePath,this.apiKey,"sql",e,"person")},bulk:t=>((t,s,r)=>{const o={"Content-Type":"application/json","Accept-Encoding":"gzip","X-Api-Key":s,"User-Agent":"PDL-JS-SDK"};return new Promise((h,l)=>{a(r,t,s,"Records","bulk").then(()=>{e.post(`${t}/person/bulk`,r,{headers:o}).then(e=>{h(n(e))}).catch(e=>{l(i(e))})}).catch(e=>{l(e)})})})(this.basePath,this.apiKey,t),identify:s=>((s,r,o,h)=>new Promise((l,c)=>{a(h,s,o,null,"identify").then(()=>{const a=h.sandbox?`${r}/person/identify`:`${s}/person/identify`,d=t.cloneDeep(h),p=new URLSearchParams;delete d.sandbox,Object.entries(d).forEach(([e,t])=>{"profile"===e?Array.isArray(t)?p.append(e,JSON.stringify(t)):p.append(e,t):"object"==typeof t?Array.isArray(t)?t.forEach(t=>{p.append(e,t)}):p.append(e,JSON.stringify(t)):p.append(e,t)}),p.append("api_key",o),e.get(a,{params:p,headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&l(n(e))}).catch(e=>{c(i(e))})}).catch(e=>{c(e)})}))(this.basePath,this.sandboxBasePath,this.apiKey,s),retrieve:t=>((t,r,o)=>new Promise((h,l)=>{a(o,t,r,"ID","retrieve").then(()=>{e.get(`${t}/person/retrieve/${o.id}`,{params:s({api_key:r},o),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&h(n(e))}).catch(e=>{l(i(e))})}).catch(e=>{l(e)})}))(this.basePath,this.apiKey,t)},this.company={enrichment:e=>o(this.basePath,this.sandboxBasePath,this.apiKey,e,"company"),search:{elastic:e=>h(this.basePath,this.sandboxBasePath,this.apiKey,"elastic",e,"company"),sql:e=>h(this.basePath,this.sandboxBasePath,this.apiKey,"sql",e,"company")},cleaner:e=>r(this.basePath,this.apiKey,e,"company")},this.school={cleaner:e=>r(this.basePath,this.apiKey,e,"school")},this.location={cleaner:e=>r(this.basePath,this.apiKey,e,"location")},this.autocomplete=t=>((t,r,o)=>new Promise((h,l)=>{a(o,t,r,null,"autocomplete").then(()=>{const{field:a,text:c,size:d,pretty:p}=o;e.get(`${t}/autocomplete`,{params:s({api_key:r},{field:a,text:c||"",size:d||10,pretty:p||!1}),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&h(n(e))}).catch(e=>{l(i(e))})}).catch(e=>{l(e)})}))(this.basePath,this.apiKey,t),this.jobTitle=t=>((t,r,o)=>new Promise((h,l)=>{a(o,t,r,null,"jobTitle").then(()=>{const{jobTitle:a,pretty:c}=o;e.get(`${t}/job_title/enrich`,{params:s({api_key:r},{job_title:a,pretty:c||!1}),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&h(n(e))}).catch(e=>{l(i(e))})}).catch(e=>{l(e)})}))(this.basePath,this.apiKey,t),this.skill=t=>((t,r,o)=>new Promise((h,l)=>{a(o,t,r,null,"skill").then(()=>{const{skill:a,pretty:c}=o;e.get(`${t}/skill/enrich`,{params:s({api_key:r},{skill:a,pretty:c||!1}),headers:{"Accept-Encoding":"gzip","User-Agent":"PDL-JS-SDK"}}).then(e=>{var t;200===(null==e||null==(t=e.data)?void 0:t.status)&&h(n(e))}).catch(e=>{l(i(e))})}).catch(e=>{l(e)})}))(this.basePath,this.apiKey,t)}}export{l as default};
//# sourceMappingURL=index.modern.js.map
