!function(i,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define("webflow.serve",[],a):"object"==typeof exports?exports["webflow.serve"]=a():i["webflow.serve"]=a()}(this,(()=>(()=>{var i={35:(i,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>o});const o='<div class="quiz-overlay"></div> <div class="quiz-container"> <div class="radient-wrapper"></div> <div class="content"> <div class="quiz-upper-nav"> <button class="quiz-close">CLOSE</button> </div> <div class="quiz"> <form class="quiz-form" id="quizForm"> <div class="quiz-phase name" id="phase0"> <h1 class="heading-1 phase0">PERSONALITY QUIZ</h1> <input type="text" class="phase-step active" name="nickname" id="nickname" placeholder="Your name / nickname"/> <p class="bodytext lure"> Create your design by completing 100% free personality quiz. </p> </div> <div class="quiz-phase quiz" id="phase1"> <div class="instructions"> <p class="bodytext desc"> Please rate the following statements on a scale of 1-5 based on your immediate perception. </p> </div> <div class="radio-question phase-step" id="q1"> <h3 class="question-header"> I enjoy attending large social gatherings and meeting new people, even if I don\'t know anyone there. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option1" value="1"/> <label class="radio-option" for="q1-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option2" value="2"/> <label class="radio-option" for="q1-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option3" value="3"/> <label class="radio-option" for="q1-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option4" value="4"/> <label class="radio-option" for="q1-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q1" id="q1-option5" value="5"/> <label class="radio-option" for="q1-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q2"> <h3 class="question-header"> I am generally comfortable with being the center of attention. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option1" value="1"/> <label class="radio-option" for="q2-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option2" value="2"/> <label class="radio-option" for="q2-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option3" value="3"/> <label class="radio-option" for="q2-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option4" value="4"/> <label class="radio-option" for="q2-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q2" id="q2-option5" value="5"/> <label class="radio-option" for="q2-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q3"> <h3 class="question-header"> I find solitude and quiet environments to be essential for recharging and regaining my energy. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option1" value="1"/> <label class="radio-option" for="q3-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option2" value="2"/> <label class="radio-option" for="q3-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option3" value="3"/> <label class="radio-option" for="q3-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option4" value="4"/> <label class="radio-option" for="q3-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q3" id="q3-option5" value="5"/> <label class="radio-option" for="q3-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q4"> <h3 class="question-header"> I find small talk in social interactions to be draining and superficial. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option1" value="1"/> <label class="radio-option" for="q4-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option2" value="2"/> <label class="radio-option" for="q4-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option3" value="3"/> <label class="radio-option" for="q4-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option4" value="4"/> <label class="radio-option" for="q4-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q4" id="q4-option5" value="5"/> <label class="radio-option" for="q4-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q5"> <h3 class="question-header"> I am a creative person who enjoys exploring new ideas and concepts. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q5" id="q5-option1" value="1"/> <label class="radio-option" for="q5-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q5" id="q5-option2" value="2"/> <label class="radio-option" for="q5-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q5" id="q5-option3" value="3"/> <label class="radio-option" for="q5-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q5" id="q5-option4" value="4"/> <label class="radio-option" for="q5-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q5" id="q5-option5" value="5"/> <label class="radio-option" for="q5-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q6"> <h3 class="question-header"> I often rely on my gut feelings and instincts when making decisions. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q6" id="q6-option1" value="1"/> <label class="radio-option" for="q6-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q6" id="q6-option2" value="2"/> <label class="radio-option" for="q6-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q6" id="q6-option3" value="3"/> <label class="radio-option" for="q6-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q6" id="q6-option4" value="4"/> <label class="radio-option" for="q6-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q6" id="q6-option5" value="5"/> <label class="radio-option" for="q6-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q7"> <h3 class="question-header"> I often find myself daydreaming or lost in my own thoughts. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q7" id="q7-option1" value="1"/> <label class="radio-option" for="q7-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q7" id="q7-option2" value="2"/> <label class="radio-option" for="q7-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q7" id="q7-option3" value="3"/> <label class="radio-option" for="q7-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q7" id="q7-option4" value="4"/> <label class="radio-option" for="q7-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q7" id="q7-option5" value="5"/> <label class="radio-option" for="q7-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q8"> <h3 class="question-header"> I tend to be detail-oriented, catching small details which others might miss. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q8" id="q8-option1" value="1"/> <label class="radio-option" for="q8-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q8" id="q8-option2" value="2"/> <label class="radio-option" for="q8-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q8" id="q8-option3" value="3"/> <label class="radio-option" for="q8-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q8" id="q8-option4" value="4"/> <label class="radio-option" for="q8-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q8" id="q8-option5" value="5"/> <label class="radio-option" for="q8-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q9"> <h3 class="question-header"> I easily empathize with a person whose experiences are very different from mine. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q9" id="q9-option1" value="1"/> <label class="radio-option" for="q9-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q9" id="q9-option2" value="2"/> <label class="radio-option" for="q9-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q9" id="q9-option3" value="3"/> <label class="radio-option" for="q9-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q9" id="q9-option4" value="4"/> <label class="radio-option" for="q9-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q9" id="q9-option5" value="5"/> <label class="radio-option" for="q9-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q10"> <h3 class="question-header"> My emotions tend to control me more than I control them. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q10" id="q10-option1" value="1"/> <label class="radio-option" for="q10-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q10" id="q10-option2" value="2"/> <label class="radio-option" for="q10-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q10" id="q10-option3" value="3"/> <label class="radio-option" for="q10-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q10" id="q10-option4" value="4"/> <label class="radio-option" for="q10-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q10" id="q10-option5" value="5"/> <label class="radio-option" for="q10-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q11"> <h3 class="question-header"> I prefer to approach problem-solving with a rational and logical mindset. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q11" id="q11-option1" value="1"/> <label class="radio-option" for="q11-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q11" id="q11-option2" value="2"/> <label class="radio-option" for="q11-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q11" id="q11-option3" value="3"/> <label class="radio-option" for="q11-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q11" id="q11-option4" value="4"/> <label class="radio-option" for="q11-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q11" id="q11-option5" value="5"/> <label class="radio-option" for="q11-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q12"> <h3 class="question-header"> I think the world would be a better place if people relied more on rationality rather than on their feelings. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q12" id="q12-option1" value="1"/> <label class="radio-option" for="q12-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q12" id="q12-option2" value="2"/> <label class="radio-option" for="q12-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q12" id="q12-option3" value="3"/> <label class="radio-option" for="q12-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q12" id="q12-option4" value="4"/> <label class="radio-option" for="q12-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q12" id="q12-option5" value="5"/> <label class="radio-option" for="q12-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q13"> <h3 class="question-header"> I am flexible and often go with the flow rather than sticking to strict plans. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q13" id="q13-option1" value="1"/> <label class="radio-option" for="q13-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q13" id="q13-option2" value="2"/> <label class="radio-option" for="q13-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q13" id="q13-option3" value="3"/> <label class="radio-option" for="q13-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q13" id="q13-option4" value="4"/> <label class="radio-option" for="q13-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q13" id="q13-option5" value="5"/> <label class="radio-option" for="q13-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q14"> <h3 class="question-header"> I am adaptable and comfortable with making last-minute changes to my plans. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q14" id="q14-option1" value="1"/> <label class="radio-option" for="q14-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q14" id="q14-option2" value="2"/> <label class="radio-option" for="q14-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q14" id="q14-option3" value="3"/> <label class="radio-option" for="q14-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q14" id="q14-option4" value="4"/> <label class="radio-option" for="q14-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q14" id="q14-option5" value="5"/> <label class="radio-option" for="q14-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q15"> <h3 class="question-header"> I prefer to finish one project before starting a new one. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q15" id="q15-option1" value="1"/> <label class="radio-option" for="q15-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q15" id="q15-option2" value="2"/> <label class="radio-option" for="q15-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q15" id="q15-option3" value="3"/> <label class="radio-option" for="q15-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q15" id="q15-option4" value="4"/> <label class="radio-option" for="q15-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q15" id="q15-option5" value="5"/> <label class="radio-option" for="q15-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> <div class="radio-question phase-step" id="q16"> <h3 class="question-header"> I prefer having a structured and organized schedule in my daily life. </h3> <div class="radio-container"> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q16" id="q16-option1" value="1"/> <label class="radio-option" for="q16-option1">1</label> </div> <p class="radio-label">Disagree</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q16" id="q16-option2" value="2"/> <label class="radio-option" for="q16-option2">2</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q16" id="q16-option3" value="3"/> <label class="radio-option" for="q16-option3">3</label> </div> <p class="radio-label">Not sure</p> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q16" id="q16-option4" value="4"/> <label class="radio-option" for="q16-option4">4</label> </div> </div> <div class="radio-wrapper-container"> <div class="radio-wrapper"> <input class="radio-input" type="radio" name="q16" id="q16-option5" value="5"/> <label class="radio-option" for="q16-option5">5</label> </div> <p class="radio-label">Agree</p> </div> </div> </div> </div> <div class="quiz-phase personality" id="phase2"> <div class="phase-step personality"> <div class="personality-header"> <p class="heading-4" id="personality-name"> Your personality </p> <h2 class="heading-2" id="personality-type"> DIPLOMAT </h2> </div> <p class="bodytext" id="personality-description"> Diplomats are adventurous persons curious about world and everything around them. They are not afraid to engage in difficult conversations </p> <div class="personality-metric"> <p class="heading-3 personality-netric-label"> Extroversion </p> <div class="personality-metric-data-container"> <p class="progress-text" id="extroversion-text"> 60% </p> <div class="personality-metric-data"> <div class="personality-metric-bar" id="extroversion-bar"></div> </div> </div> </div> <div class="personality-metric"> <p class="heading-3 personality-netric-label"> Sensing </p> <div class="personality-metric-data-container"> <p class="progress-text" id="sensing-text"> 60% </p> <div class="personality-metric-data"> <div class="personality-metric-bar" id="sensing-bar"></div> </div> </div> </div> <div class="personality-metric"> <p class="heading-3 personality-netric-label"> Feeling </p> <div class="personality-metric-data-container"> <p class="progress-text" id="feeling-text"> 60% </p> <div class="personality-metric-data"> <div class="personality-metric-bar" id="feeling-bar"></div> </div> </div> </div> <div class="personality-metric"> <p class="heading-3 personality-netric-label"> Prospecting </p> <div class="personality-metric-data-container"> <p class="progress-text" id="prospecting-text"> 60% </p> <div class="personality-metric-data"> <div class="personality-metric-bar" id="prospecting-bar"></div> </div> </div> </div> <div id="save-to-email-container"> <button id="save-to-email-button"> SAVE PERSONALITY TO EMAIL </button> <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.52155 9.95037H0V6.86213H5.52155V0.90625H8.47845V6.86213H14V9.95037H8.47845V15.9062H5.52155V9.95037Z" fill="#1D1D1F"/> </svg> </div> </div> </div> <div class="loading-screen personality"> <p class="loading-text">Analyzing your personality</p> <div class="blob"></div> </div> <div class="navigation"> <div class="nav-content"> <div class="progress-container" id="progress-container"> <p class="progress-text" id="progress-text">0%</p> <div class="progress-bar-quiz"> <div class="progress" id="progress-bar"></div> </div> </div> <div class="button-container" id="start-quiz-button-container"> <button class="quiz-button disabled" type="button" onclick="" id="start-quiz-button"> START QUIZ </button> </div> <div class="button-container hidden" id="quiz-button-container"> <button class="quiz-button secondary" type="button" onclick="" id="quiz-previous-button"> ← BACK </button> <button class="quiz-button" type="button" onclick="" id="quiz-next-button"> NEXT → </button> </div> <div class="button-container column hidden" id="show-designs-button-container"> <button class="quiz-button secondary center" type="button" onclick="" id="show-designs-back-button"> BACK </button> <button class="quiz-button" type="button" onclick="" id="show-designs-button"> SELECT YOUR DESIGN </button> </div> <div class="button-container column hidden" id="select-design-button-container"> <button class="quiz-button secondary center" type="button" onclick="" id="select-design-back-button"> BACK </button> <button class="quiz-button" type="button" onclick="" id="select-design-button"> CREATE YOUR DESIGN </button> </div> <div class="button-container column hidden" id="select-size-button-container"> <button class="quiz-button secondary center" type="button" onclick="" id="select-size-back-button"> BACK </button> <button class="quiz-button" type="button" onclick="" id="select-size-button"> SELECT SIZE </button> </div> </div> </div> </form> </div> </div> </div> '},934:(i,a,e)=>{"use strict";e.r(a)},965:(i,a,e)=>{e(737),i.exports={getDesigns:async function(i){const a={answers:i};console.log("Data:",a);try{const i=await fetch("https://evhmif8p8c.execute-api.ap-southeast-1.amazonaws.com/prod/designs/get-options",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw new Error("Network response was not ok");const e=await i.json();return console.log("Response Data:",e),e}catch(i){throw console.error("There was a problem with the fetch operation:",i),i}}}},737:i=>{let a=0,e={personalities:[{name:"",quiz:[],personality:{personalityType:"",personalityRole:"",extroversionScore:0,sensingScore:0,feelingScore:0,prospectingScore:0},products:[{product:"",collection:"",options:[],selectedDesign:""}]}],orderEmail:"",orderID:""},o={currentPhase:0,phases:[],totalProgress:0,nameDone:!1,quizDone:!1,designDone:!1,sizeDone:!1};function s(i){0===o.phases.length&&i.forEach(((i,a)=>{const e=i.querySelectorAll(".phase-step"),s=i.querySelectorAll(".radio-question"),t=s?s.length:0;o.phases.push(((i,a,e,o)=>({length:i,progress:a,questions:e,completed:o}))(e.length,0,t,!1))}))}function t(i){const a=JSON.stringify(i);localStorage.setItem("order",a)}function r(i){const a=JSON.stringify(i);localStorage.setItem("configurationStatus",a)}function n(i){const a=localStorage.getItem(i);return null!==a?JSON.parse(a):null}i.exports={initialCookiesSetup:async function(i){const d=n("order");d?(e=d,console.log("Order cookie found:",d)):t(e);const l=n("configurationStatus");l?(o=l,console.log("Quiz Status cookie found:",o)):(s(i),r(o));const p=n("currentPersonality");p?(a=p,console.log("Current Personality cookie found:",a)):function(i){const a=JSON.stringify(i);localStorage.setItem("currentPersonality",a)}(a)},updateQuiz:function(i,a,o){e.personalities[i].quiz[a]=o,t(e)},updateName:function(i){e.personalities[a].name=i,t(e)},updateCurrentPhase:function(i){o.currentPhase=i,r(o)},updatePhase:function(i){o.phases[o.currentPhase].progress=i,r(o)},createPhases:s,moveForward:function(){const i=o.currentPhase;o.phases[i],o.phases[i].progress<=o.phases[i].length-1?o.phases[i].progress++:o.currentPhase<o.phases.length-1?(o.phases[o.currentPhase].completed=!0,o.currentPhase++):o.currentPhase===o.phases.length-1&&(o.phases[o.currentPhase].progress++,o.phases[o.currentPhase].completed=!0),r(o)},moveBackward:function(){o.currentPhase--,r(o)},updateTotalProgress:function(){const i=o.phases.filter((i=>i.questions>0));let a=0;i.forEach((i=>{a+=i.progress}));let e=0;i.forEach((i=>{e+=i.questions})),o.totalProgress=Math.round(a/e*100),r(o)},updateNameDone:function(){""===e.personalities[a].name?o.nameDone=!1:(o.phases[0].completed=!0,o.phases[0].progress=1,o.nameDone=!0),r(o)},updateQuizDone:function(){e.personalities[a].quiz.length<16?o.quizDone=!1:o.quizDone=!0,r(o)},getOrder:()=>e,getConfigurationStatus:()=>o,getCurrentPersonality:()=>a,phaseDone:()=>{const i=o.phases[o.currentPhase];return i.progress===i.length},skipPhases:function(){o.currentPhase++,r(o)},designsFetched:()=>n("order").personalities[a].products[0].options.length>0,designsSelected:()=>""!==e.personalities[a].products[0].selectedDesign,lastStep:()=>{const i=o.phases[o.currentPhase];return i.progress===i.length-1},updateGetDesigns:i=>{const o=i.options,s=i.personality;e.personalities[a].personality.personalityType=s.personalityType,e.personalities[a].personality.personalityRole=s.personalityRole,e.personalities[a].personality.extroversionScore=s.extroversionScore,e.personalities[a].personality.sensingScore=s.sensingScore,e.personalities[a].personality.feelingScore=s.feelingScore,e.personalities[a].personality.prospectingScore=s.prospectingScore,o.forEach((i=>{e.personalities[a].products[0].options.push(i)})),t(e)},getCookie:n}}},a={};function e(o){var s=a[o];if(void 0!==s)return s.exports;var t=a[o]={exports:{}};return i[o](t,t.exports,e),t.exports}return e.d=(i,a)=>{for(var o in a)e.o(a,o)&&!e.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:a[o]})},e.o=(i,a)=>Object.prototype.hasOwnProperty.call(i,a),e.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{e(965),e(934),e(737);const i=e(737),a=e(965),o=document.getElementById("quiz-content"),s=e(35);o.innerHTML=s.default;const t=document.querySelector(".loading-screen"),r=document.querySelectorAll(".quiz-phase"),n=document.querySelector(".create-yours"),d=document.querySelector(".quiz-overlay"),l=document.querySelector(".quiz-container"),p=document.querySelector(".quiz-close"),c=(document.getElementById("previous-button"),document.getElementById("next-button"),document.getElementById("progress-container")),u=document.getElementById("progress-text"),v=document.getElementById("progress-bar"),b=document.querySelectorAll(".radio-question"),q=(document.querySelectorAll(".radio-input"),document.getElementById("nickname")),g=document.getElementById("start-quiz-button-container"),m=document.getElementById("start-quiz-button"),y=document.getElementById("quiz-button-container"),h=document.getElementById("quiz-next-button"),w=document.getElementById("quiz-previous-button"),f=document.getElementById("show-designs-button-container"),S=document.getElementById("show-designs-button"),E=document.getElementById("show-designs-back-button"),z=(document.getElementById("select-design-button-container"),document.getElementById("select-design-button"),document.getElementById("select-design-back-button"),document.getElementById("select-size-button-container"),document.getElementById("select-size-button"),document.getElementById("select-size-back-button"),document.getElementById("personality-name")),I=document.getElementById("extroversion-text"),k=document.getElementById("extroversion-bar"),L=document.getElementById("sensing-text"),D=document.getElementById("sensing-bar"),x=document.getElementById("feeling-text"),P=document.getElementById("feeling-bar"),C=document.getElementById("prospecting-text"),B=document.getElementById("prospecting-bar"),T=()=>{d.style.display="flex",document.querySelector("body").style.overflow="hidden",setTimeout((()=>{d.style.opacity="1"}),10),l.style.right="0"};function A(){document.querySelector("body").style.overflow="auto",d.style.opacity="0",setTimeout((()=>{d.style.display="none"}),300),l.style.right="-125vh"}const N=()=>{i.updateTotalProgress(),v.style.width=`${i.getConfigurationStatus().totalProgress}%`,u.innerHTML=`${i.getConfigurationStatus().totalProgress}%`};function O(){i.updateName(q.value),i.updateNameDone(),i.getConfigurationStatus().nameDone?m.classList.remove("disabled"):m.classList.add("disabled")}function M(i,a,e){const o=i.scrollTop||i.pageYOffset||document.documentElement.scrollTop,s=a.top+o-e.top-(e.height-a.height)/2;i.scrollTo({top:s,behavior:"smooth"})}function R(a){let e=null,o=null;r.forEach(((s,t)=>{t===i.getConfigurationStatus().currentPhase&&"forward"===a?o=s:t===i.getConfigurationStatus().currentPhase-1&&"forward"===a?e=s:t===i.getConfigurationStatus().currentPhase&&"backward"===a?o=s:t===i.getConfigurationStatus().currentPhase+1&&"backward"===a&&(e=s)})),function(i,a,e){a&&(a.style.opacity="0"),setTimeout((()=>{a&&a.classList.remove("active"),i.classList.add("active")}),300),setTimeout((()=>{i.style.opacity="1"}),600)}(o,e),i.getConfigurationStatus().nameDone&&(g.classList.add("hidden"),y.classList.remove("hidden"),c.classList.add("active"),f.classList.add("hidden")),i.getConfigurationStatus().quizDone&&2===i.getConfigurationStatus().currentPhase&&(f.classList.remove("hidden"),y.classList.add("hidden"),c.classList.remove("active")),i.getConfigurationStatus().designDone,i.getConfigurationStatus().sizeDone,0===i.getConfigurationStatus().currentPhase&&(c.classList.remove("active"),y.classList.add("hidden"),g.classList.remove("hidden"),O()),i.phaseDone()?h.classList.remove("disabled"):h.classList.add("disabled")}const H=a=>{"forward"==a?(i.moveForward(),i.updateQuizDone(),N(),R("forward")):"backward"===a?(i.moveBackward(),N(),R("backward")):(i.skipPhases(),N(),R("forward"))},j=()=>{const a=i.getOrder().personalities[i.getCurrentPersonality()],e=a.personality;z.innerHTML=a.name,I.innerHTML=100*e.extroversionScore+"%",k.style.width=100*e.extroversionScore+"%",L.innerHTML=100*e.sensingScore+"%",D.style.width=100*e.sensingScore+"%",x.innerHTML=100*e.feelingScore+"%",P.style.width=100*e.feelingScore+"%",C.innerHTML=100*e.prospectingScore+"%",B.style.width=100*e.prospectingScore+"%"};document.addEventListener("DOMContentLoaded",(function(){d.style.opacity="1",d.style.display="flex",l.style.right="0",n.addEventListener("click",T),p.addEventListener("click",A),i.initialCookiesSetup(r),N(),i.designsFetched()&&j(),q.value=i.getOrder().personalities[i.getCurrentPersonality()].name,q.addEventListener("input",O),m.addEventListener("click",(()=>{i.getConfigurationStatus().nameDone?H("forward-skip"):H("forward")})),R("forward"),function(){let a=0;i.getConfigurationStatus().phases.filter((i=>i.questions>0)).forEach((i=>{i.completed&&(a+=i.questions)})),b.forEach(((e,o)=>{const s=e.parentNode,t=Array.from(r).indexOf(s),n=i.getConfigurationStatus().phases[t];o-a!==n.progress||n.completed?n.completed?(s.classList.add("answered"),e.classList.add("answered")):e.classList.remove("active"):e.classList.add("active"),i.getConfigurationStatus().phases[t].progress===o&&M(s,e.getBoundingClientRect(),s.getBoundingClientRect());const d=e.querySelectorAll(".radio-input"),l=o;d.forEach(((a,s)=>{const t=i.getOrder().personalities[i.getCurrentPersonality()].quiz[l];s===t&&(a.checked=!0),a.addEventListener("click",(()=>{const a=i.getOrder().personalities[i.getCurrentPersonality()].quiz[l];i.updateQuiz(i.getCurrentPersonality(),l,s);const t=o===b.length-1,n=i.getConfigurationStatus().currentPhase,d=e,p=b[o+1];i.phaseDone()||null!=a||t?null==a&&t&&H("forward"):(H("forward"),function(a,e,o){const s=i.getConfigurationStatus().phases[o].completed,t=r[o];if(a.classList.remove("active"),t.style.overflow="scroll",e&&e.classList.add("active"),s)setTimeout((()=>{t.style.overflow="scroll",t.classList.add("answered"),a.classList.remove("active"),r[o].querySelectorAll(".radio-question").forEach((i=>{i.classList.add("answered")}))}),300);else{const i=e.getBoundingClientRect(),a=t.getBoundingClientRect();M(t,i,a)}}(d,p,n))}))}))}))}(),w.addEventListener("click",(()=>{H("backward")})),h.addEventListener("click",(()=>{H("forward"),i.designsFetched()?j():async function(){if(t.classList.add("active"),t.style.opacity="1",!i.designsFetched()){try{const e=i.getOrder().personalities[i.getCurrentPersonality()].quiz,o=await a.getDesigns(e);i.updateGetDesigns(o),j()}catch(i){console.log(i)}setTimeout((()=>{t.style.opacity="0",setTimeout((()=>{t.classList.remove("active")}),300)}),3e3)}}()})),E.addEventListener("click",(()=>{H("backward")})),S.addEventListener("click",(()=>{}))})),window.addEventListener("unload",(function(){})),window.addEventListener("load",(function(){}))})(),{}})()));