!function(i,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define("webflow.serve",[],a):"object"==typeof exports?exports["webflow.serve"]=a():i["webflow.serve"]=a()}(this,(()=>(()=>{var i={35:(i,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>e});const e='<div class="quiz-overlay"></div> <div class="quiz-container"> <div class="radient-wrapper"></div> <div class="content"> <div class="quiz-upper-nav"> <button class="quiz-close">CLOSE</button> </div> <div class="quiz"> <form class="quiz-form" id="quizForm"> <div class="quiz-phase active" id="phase1"> <div class="radio-question" id="q1"> <h3 class="question-header"> I enjoy attending large social gatherings and meeting new people, even if I don\'t know anyone there </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option1" value="1"/> <label class="radio-option" for="q1-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option2" value="2"/> <label class="radio-option" for="q1-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option3" value="3"/> <label class="radio-option" for="q1-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option4" value="4"/> <label class="radio-option" for="q1-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option5" value="5"/> <label class="radio-option" for="q1-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question" id="q2"> <h3 class="question-header"> I prefer working independently rather than in a team setting </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option1" value="1"/> <label class="radio-option" for="q2-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option2" value="2"/> <label class="radio-option" for="q2-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option3" value="3"/> <label class="radio-option" for="q2-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option4" value="4"/> <label class="radio-option" for="q2-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option5" value="5"/> <label class="radio-option" for="q2-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question" id="q3"> <h3 class="question-header"> I feel energized and motivated after completing a challenging task </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option1" value="1"/> <label class="radio-option" for="q3-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option2" value="2"/> <label class="radio-option" for="q3-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option3" value="3"/> <label class="radio-option" for="q3-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option4" value="4"/> <label class="radio-option" for="q3-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option5" value="5"/> <label class="radio-option" for="q3-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question" id="q4"> <h3 class="question-header"> I enjoy exploring new technologies and learning how things work </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option1" value="1"/> <label class="radio-option" for="q4-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option2" value="2"/> <label class="radio-option" for="q4-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option3" value="3"/> <label class="radio-option" for="q4-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option4" value="4"/> <label class="radio-option" for="q4-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option5" value="5"/> <label class="radio-option" for="q4-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> </div> <div class="navigation"> <div class="nav-content"> <div class="progress-container"> <p class="progress-text">25%</p> <div class="progress-bar-quiz"> <div class="progress"></div> </div> </div> <div class="button-container"> <button class="quiz-button previous" type="button" onclick="previous()"> ← BACK </button> <button class="quiz-button next" type="button" onclick="next()"> NEXT → </button> </div> </div> </div> </form> </div> </div> </div> '},934:(i,a,o)=>{"use strict";o.r(a)},965:()=>{}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var d=a[e]={exports:{}};return i[e](d,d.exports,o),d.exports}return o.d=(i,a)=>{for(var e in a)o.o(a,e)&&!o.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:a[e]})},o.o=(i,a)=>Object.prototype.hasOwnProperty.call(i,a),o.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{o(965),o(934),console.log("Hello from configuration.js!");const i=document.getElementById("quiz-content"),a=o(35);i.innerHTML=a.default,document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(function(){const i=document.querySelector(".quiz-overlay"),a=document.querySelector(".quiz-container");i.style.opacity="0",i.style.display="none",a.style.right="-125vw"}));const i=document.querySelector(".create-yours"),a=document.querySelector(".quiz-overlay"),o=document.querySelector(".quiz-container");i.addEventListener("click",(function(){a.style.display="flex",document.querySelector("body").style.overflow="hidden",setTimeout((()=>{a.style.opacity="1"}),10),o.style.right="0"})),document.querySelector(".quiz-close").addEventListener("click",(function(){document.querySelector("body").style.overflow="auto",a.style.opacity="0",setTimeout((()=>{a.style.display="none"}),300),o.style.right="-125vh"}))}))})(),{}})()));