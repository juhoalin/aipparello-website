!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("webflow.checkout",[],o):"object"==typeof exports?exports["webflow.checkout"]=o():e["webflow.checkout"]=o()}(this,(()=>(()=>{var e={965:(e,o,t)=>{t(737),e.exports={getDesigns:async function(e){const o={answers:e};console.log("Data:",o);try{const e=await fetch("https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/get-options",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return console.log("Response Data:",t),t}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}},reserveDesign:async function(e){const o={token:e};console.log("Data:",o);try{const e=await fetch("https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/reserve-design",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return console.log("Response Data:",t),t}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}},confirmDesign:async function(e,o,t){const s={email:e,orderId:o,tokens:[t]};console.log("Data:",s);try{const e=await fetch("https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/confirm-design",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error("Network response was not ok");const o=await e.json();return console.log("Response Data:",o),o}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}}}},737:e=>{let o=0,t=!1;function s(e){const o=JSON.stringify(e);localStorage.setItem("resetProcess",o)}let n={personalities:[{name:"",quiz:[],personality:{personalityType:"",personalityRole:"",extroversionScore:0,sensingScore:0,feelingScore:0,prospectingScore:0},products:[{product:"Personalized T-shirt",collection:"Original",price:"￡ 14.99 GBP",comparePrice:"￡ 24.99 GBP",image:"https://uploads-ssl.webflow.com/649a7177573e38f6a02e440d/65a3cde9c0d90b9719d405fd_woman-owl.webp",selectedSize:"",description:"Premium crew neck T-Shirt with custom 001 Nature collection design based on your personality",options:[],selectedDesign:""}]}],orderEmail:"",orderID:""},r={currentPhase:0,phases:[],totalProgress:0,nameDone:!1,quizDone:!1,personalityDone:!1,designDone:!1,sizeDone:!1};function i(e){0===r.phases.length&&e.forEach(((e,o)=>{const t=e.querySelectorAll(".phase-step"),s=e.querySelectorAll(".radio-question"),n=s?s.length:0;r.phases.push(((e,o,t,s)=>({length:e,progress:o,questions:t,completed:s}))(t.length,0,n,!1))}))}function a(e){const o=JSON.stringify(e);localStorage.setItem("order",o)}function c(e){const o=JSON.stringify(e);localStorage.setItem("configurationStatus",o)}function p(e){const o=localStorage.getItem(e);return null!==o?JSON.parse(o):null}e.exports={initialCookiesSetup:async function(e){const l=p("order");l?(n=l,console.log("Order cookie found:",l)):a(n);const u=p("configurationStatus");u?(r=u,console.log("Quiz Status cookie found:",r)):(i(e),c(r));const d=p("currentPersonality");d?(o=d,console.log("Current Personality cookie found:",o)):function(e){const o=JSON.stringify(e);localStorage.setItem("currentPersonality",o)}(o);const h=p("resetProcess");h?(t=h,console.log("Reset Process cookie found:",t)):s(t)},updateQuiz:function(e,o,t){n.personalities[e].quiz[o]=t,a(n)},updateName:function(e){n.personalities[o].name=e,a(n)},updateCurrentPhase:function(e){r.currentPhase=e,c(r)},updatePhase:function(e){r.phases[r.currentPhase].progress=e,c(r)},createPhases:i,moveForward:function(){const e=r.currentPhase;r.phases[e],r.phases[e].progress<=r.phases[e].length-1?r.phases[e].progress++:r.currentPhase<r.phases.length-1?(r.phases[r.currentPhase].completed=!0,r.currentPhase++):r.currentPhase===r.phases.length-1&&(r.phases[r.currentPhase].progress++,r.phases[r.currentPhase].completed=!0),c(r)},moveBackward:function(){r.currentPhase--,c(r)},updateTotalProgress:function(){const e=r.phases.filter((e=>e.questions>0));let o=0;e.forEach((e=>{o+=e.progress}));let t=0;e.forEach((e=>{t+=e.questions})),r.totalProgress=Math.round(o/t*100),c(r)},updateNameDone:function(){""===n.personalities[o].name?(r.nameDone=!1,r.phases[0].completed=!1,r.phases[0].progress=0):(r.phases[0].completed=!0,r.phases[0].progress=1,r.nameDone=!0),c(r)},updateQuizDone:function(){n.personalities[o].quiz.length<16?r.quizDone=!1:r.quizDone=!0,c(r)},getOrder:()=>n,getConfigurationStatus:()=>r,getCurrentPersonality:()=>o,phaseDone:()=>{const e=r.phases[r.currentPhase];return e.progress===e.length},skipPhases:function(){r.currentPhase++,c(r)},designsFetched:()=>p("order").personalities[o].products[0].options.length>0,designsSelected:()=>""!==n.personalities[o].products[0].selectedDesign,lastStep:()=>{const e=r.phases[r.currentPhase];return e.progress===e.length-1},updateGetDesigns:e=>{const t=e.options,s=e.personality;n.personalities[o].personality.personalityType=s.personalityType,n.personalities[o].personality.personalityRole=s.personalityRole,n.personalities[o].personality.extroversionScore=s.extroversionScore,n.personalities[o].personality.sensingScore=s.sensingScore,n.personalities[o].personality.feelingScore=s.feelingScore,n.personalities[o].personality.prospectingScore=s.prospectingScore,t.forEach((e=>{n.personalities[o].products[0].options.push(e)})),r.personalityDone=!0,r.phases[2].completed=!0,r.phases[2].progress=1,a(n),c(r)},getCookie:p,getOptions:()=>n.personalities[o].products[0].options,updateSelectedDesign:e=>{n.personalities[o].products[0].selectedDesign=e,r.phases[3].completed=!0,r.phases[3].progress=1,a(n),c(r)},getSelectedDesign:()=>n.personalities[o].products[0].selectedDesign,designDone:()=>r.designDone,updateDesignDone:()=>{r.designDone=!0,c(r)},updateSelectedSize:e=>{"Select Size"!==e?(n.personalities[o].products[0].selectedSize=e,a(n)):(n.personalities[o].products[0].selectedSize="",a(n))},personalityDone:()=>r.personalityDone,handleAddToCart:e=>{e&&""!==n.personalities[o].products[0].selectedSize?(r.phases[4].completed=!0,r.phases[4].progress=1,r.sizeDone=!0,c(r)):(r.phases[4].progress=0,r.phases[4].completed=!1,r.sizeDone=!1,c(r))},updateResetProcess:function(e){t=e,s(t)}}}},o={};function t(s){var n=o[s];if(void 0!==n)return n.exports;var r=o[s]={exports:{}};return e[s](r,r.exports,t),r.exports}return(()=>{function e(e){const o=localStorage.getItem(e);return null!==o?JSON.parse(o):null}t(965),t(965),console.log("hello from checkout js file!"),document.getElementById("wf-ecom-email").addEventListener("input",(function(o){const t=e("order"),s=o.target.value;t.orderEmail=s,function(e){const o=JSON.stringify(e);localStorage.setItem("order",o)}(t)})),document.addEventListener("DOMContentLoaded",(function(){const o=document.querySelector(".w-commerce-commercecheckoutorderitemslist");new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&(o.hasChildNodes()?(console.log("checkout has items"),(()=>{const o=e("order"),t=o.personalities[0],s=t.products[0],n=t.name,r=t.personality.personalityRole,i=s.selectedDesign.prompt,a=s.selectedDesign.url;console.log(o);const c=document.getElementById("checkout-personality"),p=document.getElementById("checkout-design-image"),l=document.getElementById("checkout-design-text");""!==a&&p&&c&&l&&(p.src=a,l.innerHTML=i,c.innerHTML="anonymous"===n?r:n+" / "+r)})()):console.log("checkout no items"))}))})).observe(o,{childList:!0})})),window.addEventListener("DOMContentLoaded",(()=>{}))})(),{}})()));