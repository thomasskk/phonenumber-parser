import{valueInObj as e}from"@thomasskk/node-utils";import t from"../metadata.json"assert{type:"json"};const n="0-9",r=["mobile","premiumRate","tollFree","sharedCost","voip","personalNumber","pager","uan","voicemail"],o=["premiumRate","tollFree","sharedCost","voip","personalNumber","pager","uan","voicemail","fixedLine","mobile"],a=e=>o.reduce(((t,n)=>{const r=e[n];if(!r)return t;const o=r?.nationalNumberPattern.replace(/\s/g,""),a=i(r.possibleLengths.national);return o&&(t[n]={pattern:o,possibleLengths:a}),t}),{}),i=e=>{const t=[];for(const n of e.split(",")){if(!n.trim())throw new Error;const e=n.match(/^\[(\d+)-(\d+)\]$/);if(e){const[,n,r]=e.map(Number);if(r-n<2)throw new Error;for(let e=n;e<=r;e++){if(t.includes(e))throw new Error;t.push(e)}}else{const e=Number(n);if(Number.isNaN(e)||t.includes(e))throw new Error;t.push(e)}}return t},s=e=>{const t=a(e),n=[];for(const e of Object.keys(t)){const r=t[e]?.possibleLengths;for(const e of r)n.push(e);t[e].possibleLengths=r}return n.sort(((e,t)=>e-t))},u=(e,t,n)=>{const r=a(t),o=n?r[n]:void 0,i=o?.possibleLengths||s(t);if(n&&!o)return"INVALID_LENGTH";const u=e.length,c=i[0];return c===u?"IS_POSSIBLE":c>u?"TOO_SHORT":i[i.length-1]<u?"TOO_LONG":i.indexOf(u,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"},c=(e="",t)=>new RegExp(`^(?:${t})$`).test(e),l=({nationalNumber:e,countryMetadata:t})=>{const n=a(t),o=t.generalDesc.nationalNumberPattern;if(0!==Object.keys(n).length&&c(e,o)){if(f(e,n.fixedLine))return""===n.mobile.pattern?"fixedLineOrMobile":n.mobile?f(e,n.mobile)?"fixedLineOrMobile":"fixedLine":"fixedLineOrMobile";for(const t of r)if(f(e,n[t]))return t}},f=(e,t)=>{if(!t)return!1;const{pattern:n,possibleLengths:r}=t;return!!r.includes(e.length)&&c(e,n)},m=n=>!!e(n,t.countryCodes)||!!e(n,t.nonGeographic),d=({countryCode:n})=>{if(e(n,t.countryCodes)){const r=t.countryCodes[n][0];if(e(r,t.countries))return t.countries[r]}if(e(n,t.nonGeographic))return t.nonGeographic[n];throw new Error(`Unknown country code: ${n}`)},p=e=>void 0===e?[]:Array.isArray(e)?e:[e],h=e=>`([${n}]{1,${e}})`,b=new RegExp(`(?:${(()=>{const e="[ \t,]*",t="[:\\.]?[ \t,-]*",n="#?",r="[ \t]*";return`${";ext="+h("20")}|${e+"(?:e?xt(?:ensi(?:o?))?n?|anexo)"+t+h("20")+n}|${e+"(?:[x#~]|int)"+t+h("9")+n}|${"[- ]+"+h("6")+"#"}|${r+"(?:,{2}|;)"+t+h("15")+n}|${`${r}(?:,)+${t}${h("9")}${n}`}`})()})$`,"i"),g=`([${n}]|[\\-\\.\\(\\)]?)`,N=new RegExp(`^\\+${g}*[${n}]${g}*$`,"g"),$=new RegExp(`^(${`[${n}]+((\\-)*[${n}])*`}\\.)*${`[a-zA-Z]+((\\-)*[${n}])*`}\\.?$`,"g"),x="tel:",y=";phone-context=",O=e=>{const t=(e=>{const t=e.indexOf(y);if(t<0)return null;const n=t+15;if(n>=e.length)return"";const r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)})(e);if(!(e=>null===e||0!==e.length&&(N.test(e)||$.test(e)))(t))throw new Error("NOT_A_NUMBER");let n;if(null===t){if(e.length>250)throw new Error("TOO_LONG");n=e}else{n="","+"===t.charAt(0)&&(n+=t);const r=e.indexOf(x);let o;o=r>=0?r+4:0;const a=e.indexOf(y);n+=e.substring(o,a)}const r=n.indexOf(";isub=");if(r>0&&(n=n.substring(0,r)),""!==n)return n},E=(e,t)=>{const n=((e,t)=>{const n=t.nationalPrefixForParsing||t.nationalPrefix,r=t.nationalPrefixTransformRule;if(n){const t=new RegExp(`^(?:${n})`),o=t.exec(e);if(o){const n=o.length-1,a=n>0&&o[n];if(r&&a)return e.replace(t,r);const i=o[0];return e.slice(i.length)}}return e})(e,t);if(n!==e){if(!w({planMetadata:t,nationalNumberBefore:e,nationalNumberAfter:n}))return e;if(s(t)&&!L(n,t))return e}return n},w=e=>{const{nationalNumberBefore:t,nationalNumberAfter:n,planMetadata:r}=e,o=r.generalDesc.nationalNumberPattern;return!(c(t,o)&&!c(n,o))},L=(e,t)=>{switch(u(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}},I=/(\$\d)/,A=(e,t,n,r,o)=>{const a=((e,t)=>{if(e&&t)return e.replace("$NP",t).replace("$FG","$1")})(t.nationalPrefixFormattingRule,o),i=e.replace(new RegExp(t.pattern),n?t.intlFormat||t.format:r&&a?t.format.replace(I,a):t.format);return n?i.replace(new RegExp("[-/.()~ ]+","g")," ").trim():i},C=(e,t,n)=>{const r=n.availableFormats?.numberFormat;if(!r)return e;for(const o of p(r)){const r=p(o.leadingDigits);if(r.length>0){const t=r[r.length-1];if(0!==e.search(t))continue}if(c(e,o.pattern))return A(e,o,"INTERNATIONAL"===t,!!o.nationalPrefixOptionalWhenFormatting,n.nationalPrefix)}return e},T=(e,t,n)=>{if(!n)return e;return`${e}${t.preferredExtnPrefix??" ext. "}${n}`},R=({format:e,nationalNumber:t,countryCode:n,planMetadata:r,ext:o})=>{switch(e){case"NATIONAL":return T(C(t,"NATIONAL",r),r,o);case"INTERNATIONAL":return t?T(`+${n} ${C(t,"INTERNATIONAL",r)}`,r,o):`+${n}`;case"E.164":return`+${n}${t}`;case"RFC3966":return(({number:e,ext:t})=>`tel:${e}${t?`;ext=${t}`:""}`)({number:`+${n}${t}`,ext:o})}},M=e=>{const t=O(e);if(!t)return{};if(!(e=>e.length>=2)(t))return{};const n=(e=>{const t=e.search(b);if(t<0)return;const n=e.slice(0,t),r=e.match(b);if(!r)return;let o=1;for(;o<r.length;){if(r[o])return{number:n,ext:r[o]};o++}})(t);return n||{number:t}},P=n=>{const{number:r,ext:o}=M(n);if(!r)throw new Error("Invalid phone number");const{countryCode:a,number:i}=(e=>{if("+"!==e[0])return{number:e};if("0"===e[1]||e.length<=3)return{};let t=2;for(;t-1<=3&&t<=e.length;){const n=e.slice(1,t);if(m(n))return{countryCode:n,number:e.slice(t)};t++}return{}})(F(r));if(!a||!i)throw new Error("Invalid phone number");const s=d({countryCode:a}),f=E(F(i),d({countryCode:a}));if(f.length<2||f.length>17)throw new Error("Invalid phone number");const p=R({countryCode:a,nationalNumber:f,planMetadata:s,format:"NATIONAL"}),h=R({countryCode:a,nationalNumber:f,planMetadata:s,format:"INTERNATIONAL"}),b=R({countryCode:a,nationalNumber:f,planMetadata:s,format:"E.164"}),g=R({countryCode:a,nationalNumber:f,planMetadata:s,format:"RFC3966"}),{country:N,countryMetadata:$}=((n,r)=>{if(!e(n,t.countryCodes))return e(n,t.nonGeographic)?{countryMetadata:t.nonGeographic[n]}:{};const o=t.countryCodes[n];for(const n of o){if(!e(n,t.countries))continue;const o=t.countries[n];if("leadingDigits"in o){if(0===r.search(o.leadingDigits))return{country:n,countryMetadata:o}}else if(l({nationalNumber:r,countryMetadata:o}))return{country:n,countryMetadata:o}}return e(o[0],t.countries)?{countryMetadata:t.countries[o[0]],country:o[0]}:{country:o[0]}})(a,f),x=$?l({nationalNumber:f,countryMetadata:$}):void 0,y=!!$&&(void 0!==x||c(f,$.generalDesc.nationalNumberPattern));return{country:N,phone:i,countryCode:a,international:h,national:p,E164:b,RFC3966:g,possible:!!$&&"IS_POSSIBLE"===u(f,$),valid:y,type:x,ext:o}},v=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57},F=e=>{let t="";if(!e)return t;for(const n of e.split(""))("+"===n&&!t||v(n))&&(t+=n);return t};export{P as parsePhoneNumber};
