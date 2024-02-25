!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("webflow.checkout",[],t):"object"==typeof exports?exports["webflow.checkout"]=t():e["webflow.checkout"]=t()}(this,(()=>(()=>{var e={965:(e,t,o)=>{o(737),e.exports={getDesigns:async function(e){const t={answers:e};try{const e=await fetch("https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/designs/get-options",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}},reserveDesign:async function(e){const t={token:e};try{const e=await fetch("https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/designs/reserve-design",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}},confirmDesign:async function(e,t,o){const s={email:e,orderId:t,tokens:[o]};try{const e=await fetch("https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/designs/confirm-design",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}},viewProfile:async function(e){try{const t=await fetch(`https://ovw1bhw4bf.execute-api.ap-southeast-1.amazonaws.com/prod/profile/view?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}}}},737:e=>{let t=0,o=!1;function s(e){const t=JSON.stringify(e);localStorage.setItem("resetProcess",t)}let n={personalities:[{name:"",quiz:[],personality:{personalityType:"",personalityRole:"",extroversionScore:0,sensingScore:0,feelingScore:0,prospectingScore:0},products:[{product:"Personalized T-Shirt",collection:"Original Collection",price:"￡ 14.99 GBP",comparePrice:"￡ 25.99 GBP",image:"https://uploads-ssl.webflow.com/649a7177573e38f6a02e440d/65cf397b8adefed460afad89_product-img.webp",selectedSize:"",description:"Made from premium, 100% sustainably sourced cotton.",options:[],selectedDesign:""}]}],orderEmail:"",orderID:""},r={currentPhase:0,phases:[],totalProgress:0,nameDone:!1,quizDone:!1,personalityDone:!1,designDone:!1,sizeDone:!1};function i(e){0===r.phases.length&&e.forEach(((e,t)=>{const o=e.querySelectorAll(".phase-step"),s=e.querySelectorAll(".radio-question"),n=s?s.length:0;r.phases.push(((e,t,o,s)=>({length:e,progress:t,questions:o,completed:s}))(o.length,0,n,!1))}))}function a(e){const t=JSON.stringify(e);localStorage.setItem("order",t)}function c(e){const t=JSON.stringify(e);localStorage.setItem("configurationStatus",t)}function p(e){const t=localStorage.getItem(e);return null!==t?JSON.parse(t):null}e.exports={initialCookiesSetup:async function(e){const l=p("order");l?n=l:a(n);const u=p("configurationStatus");u?r=u:(i(e),c(r));const d=p("currentPersonality");d?t=d:function(e){const t=JSON.stringify(e);localStorage.setItem("currentPersonality",t)}(t);const h=p("resetProcess");h?o=h:s(o)},updateQuiz:function(e,t,o){n.personalities[e].quiz[t]=o,a(n)},updateName:function(e){n.personalities[t].name=e,a(n)},updateCurrentPhase:function(e){r.currentPhase=e,c(r)},updatePhase:function(e){r.phases[r.currentPhase].progress=e,c(r)},createPhases:i,moveForward:function(){const e=r.currentPhase;r.phases[e],r.phases[e].progress<=r.phases[e].length-1?r.phases[e].progress++:r.currentPhase<r.phases.length-1?(r.phases[r.currentPhase].completed=!0,r.currentPhase++):r.currentPhase===r.phases.length-1&&(r.phases[r.currentPhase].progress++,r.phases[r.currentPhase].completed=!0),c(r)},moveBackward:function(){r.currentPhase--,c(r)},updateTotalProgress:function(){const e=r.phases.filter((e=>e.questions>0));let t=0;e.forEach((e=>{t+=e.progress}));let o=0;e.forEach((e=>{o+=e.questions})),r.totalProgress=Math.round(t/o*100),c(r)},updateNameDone:function(){""===n.personalities[t].name?(r.nameDone=!1,r.phases[0].completed=!1,r.phases[0].progress=0):(r.phases[0].completed=!0,r.phases[0].progress=1,r.nameDone=!0),c(r)},updateQuizDone:function(){n.personalities[t].quiz.length<16?r.quizDone=!1:r.quizDone=!0,c(r)},getOrder:()=>n,getConfigurationStatus:()=>r,getCurrentPersonality:()=>t,phaseDone:()=>{const e=r.phases[r.currentPhase];return e.progress===e.length},skipPhases:function(){r.currentPhase++,c(r)},designsFetched:()=>p("order").personalities[t].products[0].options.length>0,designsSelected:()=>""!==n.personalities[t].products[0].selectedDesign,lastStep:()=>{const e=r.phases[r.currentPhase];return e.progress===e.length-1},updateGetDesigns:e=>{const o=e.options,s=e.personality;n.personalities[t].personality.personalityType=s.personalityType,n.personalities[t].personality.personalityRole=s.personalityRole,n.personalities[t].personality.extroversionScore=s.extroversionScore,n.personalities[t].personality.sensingScore=s.sensingScore,n.personalities[t].personality.feelingScore=s.feelingScore,n.personalities[t].personality.prospectingScore=s.prospectingScore,o.forEach((e=>{n.personalities[t].products[0].options.push(e)})),r.personalityDone=!0,r.phases[2].completed=!0,r.phases[2].progress=1,a(n),c(r)},getCookie:p,getOptions:()=>n.personalities[t].products[0].options,updateSelectedDesign:e=>{n.personalities[t].products[0].selectedDesign=e,r.phases[3].completed=!0,r.phases[3].progress=1,a(n),c(r)},getSelectedDesign:()=>n.personalities[t].products[0].selectedDesign,designDone:()=>r.designDone,updateDesignDone:()=>{r.designDone=!0,c(r)},updateSelectedSize:e=>{console.log("update size"),"Select Size"!==e?(n.personalities[t].products[0].selectedSize=e,a(n)):(n.personalities[t].products[0].selectedSize="",a(n))},personalityDone:()=>r.personalityDone,handleAddToCart:e=>{console.log("add to cart"),e&&""!==n.personalities[t].products[0].selectedSize?(r.phases[4].completed=!0,r.phases[4].progress=1,r.sizeDone=!0,c(r)):(r.phases[4].progress=0,r.phases[4].completed=!1,r.sizeDone=!1,c(r))},updateResetProcess:function(e){o=e,s(o)}}}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}return(()=>{function e(e){const t=localStorage.getItem(e);return null!==t?JSON.parse(t):null}o(965),o(965),document.getElementById("wf-ecom-email").addEventListener("input",(function(t){const o=e("order"),s=t.target.value;o.orderEmail=s,function(e){const t=JSON.stringify(e);localStorage.setItem("order",t)}(o)})),document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".w-commerce-commercecheckoutorderitemslist");new MutationObserver((o=>{o.forEach((o=>{"childList"===o.type&&t.hasChildNodes()&&(()=>{const t=e("order").personalities[0],o=t.products[0],s=t.name,n=t.personality.personalityRole,r=o.selectedDesign.prompt,i=o.selectedDesign.url,a=document.getElementById("checkout-personality"),c=document.getElementById("checkout-design-image"),p=document.getElementById("checkout-design-text");""!==i&&c&&a&&p&&(c.src=i,p.innerHTML=r,a.innerHTML="anonymous"===s?n:s+" / "+n)})()}))})).observe(t,{childList:!0})})),window.addEventListener("DOMContentLoaded",(()=>{}))})(),{}})()));