const {data} = require("./p4-data.js");

//returns an array of strings 
function getQuestions() {
    let questionNumber = data.map(function(element){
        return element.question
    });
    return questionNumber;

};

//returns array of strings (Answer)
function getAnswers() {
    let questionAnswer = data.map(function(element){
        return element.answer
    });
    return questionAnswer;

};

//retuns copy of original data
//two lines of code to consilidate previous functions together

function getQuestionsAnswers() {
    let fullQuestion = JSON.parse(JSON.stringify(data));
    return fullQuestion;

    };
function getQuestion(number = ""){
    let objToReturn = {
        error: '',
        answer: '',
        number: '',
    };
    if (parseInt(number) == false) {
        objToReturn.error = 'Question number must be an integer';
}
    else if (number < 1){
    objToReturn.error = 'Question number must be greater or equal to 1'
}
    else if (number >= data.length+1) {
    objToReturn.error = `Question number must be less than the number of questions (${data.length})`
}
else {
    objToReturn.question = ` ${data[number-1].question}`
    objToReturn.number = number;
}
};
function getAnswer(number = ""){
    let fullAnswer = {
        error: '',
        answer: '',
        number: '',
    };
    if (parseInt(number) == false) {
        fullAnswer.error = 'Answer number must be an integer';
}
else if (number < 1){
    fullAnswer.error = 'Answer number must be greater or equal to 1'
}
else if (number >= data.length+1){
    fullAnswer.error = `Answer number must be less than the number of questions (${data.length})`
}
else {
    fullAnswer.question = ` ${data[number-1].answer}`
    fullAnswer.number = number;
}
return fullAnswer;
};

function getQuestionAnswer(number = ""){
    let questionAndAnswer = {
        error: '',
        answer: '',
        number: '',
        question: '',  
    };
    if (parseInt(number) == false) {
        questionAndAnswer.error = 'Question number must be an integer';
}
else if (number < 1){
    questionAndAnswer.error = 'Question number must be greater or equal to 1'
}
else if (number >= data.length+1){
    questionAndAnswer.error = `Question number must be less than the number of questions (${data.length})`
}
else {
    questionAndAnswer.question = `${data[number-1].question}`
    questionAndAnswer.answer = `${data[number-1].answer}`
    questionAndAnswer.number = number;
}
return questionAndAnswer;
};


module.exports = {
getQuestions,
getAnswers,
getQuestionsAnswers,
getQuestion,
getAnswer,
getQuestionAnswer,
}
/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion"
    )
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer" 
    )
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
        "getQuestionAnswer"
    )
  }
  

