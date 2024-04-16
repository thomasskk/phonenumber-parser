import{xml2js as e}from"node-utils";import t from"fs";import n from"path";const r="0-9",o=["mobile","premiumRate","tollFree","sharedCost","voip","personalNumber","pager","uan","voicemail"],a=["premiumRate","tollFree","sharedCost","voip","personalNumber","pager","uan","voicemail","fixedLine","mobile"],i=e=>a.reduce(((t,n)=>{const r=e[n];if(!r)return t;const o=r?.nationalNumberPattern.replace(/\s/g,""),a=s(r.possibleLengths.national);return o&&(t[n]={pattern:o,possibleLengths:a}),t}),{}),s=e=>{const t=[];for(const n of e.split(",")){if(!n.trim())throw new Error;const e=n.match(/^\[(\d+)-(\d+)\]$/);if(e){const[,n,r]=e.map(Number);if(r-n<2)throw new Error;for(let e=n;e<=r;e++){if(t.includes(e))throw new Error;t.push(e)}}else{const e=Number(n);if(isNaN(e)||t.includes(e))throw new Error;t.push(e)}}return t},l=e=>{const t=i(e),n=[];for(const e of Object.keys(t)){const r=t[e]?.possibleLengths;for(const e of r)n.push(e);t[e].possibleLengths=r}return n.sort(((e,t)=>e-t))},u=(e,t,n)=>{const r=i(t),o=n?r[n]:void 0,a=o?.possibleLengths||l(t);if(n&&!o)return"INVALID_LENGTH";const s=e.length,u=a[0];return u===s?"IS_POSSIBLE":u>s?"TOO_SHORT":a[a.length-1]<s?"TOO_LONG":a.indexOf(s,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"},c=e=>`([${r}]{1,${e}})`,f=new RegExp("(?:"+(()=>{const e="[ \t,]*",t="[:\\.]?[ \t,-]*",n="#?",r="[ \t]*";return";ext="+c("20")+"|"+(e+"(?:e?xt(?:ensi(?:o?))?n?|anexo)"+t+c("20")+n)+"|"+(e+"(?:[x#~]|int)"+t+c("9")+n)+"|"+("[- ]+"+c("6")+"#")+"|"+(r+"(?:,{2}|;)"+t+c("15")+n)+"|"+(r+"(?:,)+"+t+c("9")+n)})()+")$","i"),d="([0-9]|[\\-\\.\\(\\)]?)",h=new RegExp("^\\+"+d+"*["+r+"]"+d+"*$","g"),m=new RegExp("^([0-9]+((\\-)*[0-9])*\\.)*[a-zA-Z]+((\\-)*[0-9])*\\.?$","g"),g="tel:",b=";phone-context=",p=e=>{const t=(e=>{const t=e.indexOf(b);if(t<0)return null;const n=t+15;if(n>=e.length)return"";const r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)})(e);if(!(e=>null===e||0!==e.length&&(h.test(e)||m.test(e)))(t))throw new Error("NOT_A_NUMBER");let n;if(null===t){if(e.length>250)throw new Error("TOO_LONG");n=e}else{n="","+"===t.charAt(0)&&(n+=t);const r=e.indexOf(g);let o;o=r>=0?r+4:0;const a=e.indexOf(b);n+=e.substring(o,a)}const r=n.indexOf(";isub=");if(r>0&&(n=n.substring(0,r)),""!==n)return n},C=(e="",t)=>new RegExp("^(?:"+t+")$").test(e),x=(e,t)=>{const{carrierCode:n,nationalNumber:r}=((e,t)=>{const n=t.nationalPrefixForParsing||t.nationalPrefix,r=t.nationalPrefixTransformRule;if(e&&n){const o=new RegExp("^(?:"+n+")"),a=o.exec(e);if(a){let n,i;const s=a.length-1,l=s>0&&a[s];if(r&&l)n=e.replace(o,r),s>1&&(i=a[1]);else{const t=a[0];n=e.slice(t.length),l&&(i=a[1])}let u;if(l){const n=e.indexOf(a[1]);e.slice(0,n)===t.nationalPrefix&&(u=t.nationalPrefix)}else u=a[0];return{nationalNumber:n,nationalPrefix:u,carrierCode:i}}}return{nationalNumber:e}})(e,t);if(r!==e){if(!N({planMetadata:t,nationalNumberBefore:e,nationalNumberAfter:r}))return{nationalNumber:e};if(l(t)&&!y(r,t))return{nationalNumber:e}}return{nationalNumber:r,carrierCode:n}},N=e=>{const{nationalNumberBefore:t,nationalNumberAfter:n,planMetadata:r}=e,o=r.generalDesc.nationalNumberPattern;return!(C(t,o)&&!C(n,o))},y=(e,t)=>{switch(u(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}},w=({nationalNumber:e,countryMetadata:t})=>{const n=i(t),r=t.generalDesc.nationalNumberPattern;if(0!==Object.keys(n).length&&C(e,r)){if(O(e,n.fixedLine))return""===n.mobile.pattern?"fixedLineOrMobile":n.mobile?O(e,n.mobile)?"fixedLineOrMobile":"fixedLine":"fixedLineOrMobile";for(const t of o)if(O(e,n[t]))return t}},O=(e,t)=>{if(!t)return!1;const{pattern:n,possibleLengths:r}=t;return!!r.includes(e.length)&&C(e,n)};class E{metadata;constructor(e){this.metadata=e}hasCallingCode(e){return!!this.metadata.countryCallingCodes[e]||!!this.metadata.nonGeographic[e]}isNonGeographicCallingCode(e){return!!this.metadata.nonGeographic[e]}getPlanMetadata({callingCode:e}){if(!this.hasCallingCode(e))throw new Error(`Unknown calling code: ${e}`);const t=this.metadata.countryCallingCodes[e]?.[0];return t?this.metadata.countries[t]:this.metadata.nonGeographic[e]}getExactCountry(e,t){const n=this.metadata.countryCallingCodes[e];if(!n)return{countryMetadata:this.metadata.nonGeographic[e]};for(const e of n){const n=this.metadata.countries[e];if(!n)continue;const r=n.leadingDigits;if(r){if(0===t.search(r))return{country:e,countryMetadata:n}}else if(w({nationalNumber:t,countryMetadata:n}))return{country:e,countryMetadata:n}}return{countryMetadata:this.metadata.countries[n[0]],country:n[0]}}}const L=()=>{const r=new URL(".",import.meta.url).pathname;return(t=>{const n=e(t),r={},o={},a={};for(const e of n.phoneNumberMetadata.territories.territory){if("001"!==e.id&&!e.internationalPrefix)throw new Error(`"internationalPrefix" is missing for country ${e.id}`);r[e.id]=e,"001"===e.id?o[e.countryCode]=e:(r[e.id]=e,a[e.countryCode]||(a[e.countryCode]=[]),e.mainCountryForCode?a[e.countryCode].unshift(e.id):a[e.countryCode].push(e.id))}return{countries:r,nonGeographic:o,countryCallingCodes:a}})(t.readFileSync(n.join(r,"PhoneNumberMetadata.xml"),"utf8"))},P=e=>{const t=p(e);if(!t)return{};if(!(e=>e.length>=2)(t))return{};const n=(e=>{const t=e.search(f);if(t<0)return;const n=e.slice(0,t),r=e.match(f);if(!r)return;let o=1;for(;o<r.length;){if(r[o])return{number:n,ext:r[o]};o++}})(t);return n||{number:t}},M=e=>{const{number:t,ext:n}=P(e);if(!t)throw new Error("Invalid phone number");const r=new E(L()),{countryCallingCode:o,number:a}=((e,t)=>{if("+"!==e[0])return{number:e};if("0"===e[1]||e.length<=3)return{};let n=2;for(;n-1<=3&&n<=e.length;){const r=e.slice(1,n);if(t.hasCallingCode(r))return{countryCallingCode:r,number:e.slice(n)};n++}return{}})(R(t),r);if(!o)throw new Error;const{nationalNumber:i,carrierCode:s}=x(R(a),r.getPlanMetadata({callingCode:o})),{country:l,countryMetadata:c}=r.getExactCountry(o,i);if(!i||i.length<2||i.length>17)throw new Error;const f=c?w({nationalNumber:i,countryMetadata:c}):void 0;return{country:l,phone:i,countryCallingCode:o,number:`+${o}${i}`,carrierCode:s,nationalNumber:i,possible:!!c&&"IS_POSSIBLE"===u(i,c),valid:!!c&&(void 0!==f||C(i,c.generalDesc.nationalNumberPattern)),type:f,ext:n}},I=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57},R=e=>{let t="";if(!e)return t;for(const n of e.split(""))("+"===n&&!t||I(n))&&(t+=n);return t};export{M as parsePhoneNumber};