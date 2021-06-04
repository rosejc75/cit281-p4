const fs = require("fs");
const fastify = require("fastify")();
const {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require(`./p4-module.js`)

fastify.get("/cit/question", (request, reply) => {
    const questionsToReturn = getQuestions();
    const resultToReturn = JSON.stringify(questionsToReturn);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(resultToReturn);
});
fastify.get("/cit/answer", (request, reply) => {
    const answerToReturn = getAnswers();
    const resultToReturn = JSON.stringify(answerToReturn);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(resultToReturn);
});
fastify.get("/cit/questionanswer", (request, reply) => {
    const questionAnswerToReturn = getQuestionsAnswers();
    const resultToReturn = JSON.stringify(questionAnswerToReturn);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(resultToReturn);
});
fastify.get("/cit/question/:number", (request, reply) => {
    console.log(request);
    const questionNumberFromClient = request.params.number;
    const questionsFromClient = getQuestions(parrseInt(questionNumberFromClient));
    const questionNumberReturn = JSON.stringify(questionsFromClient);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(questionNumberReturn);
});

fastify.get("/cit/answer/:number", (request, reply)=> {
    console.log(request);
    const answerNumberFromClient = request.params.number;
    const answerFromClient = getAnswers(parseInt(answerNumberFromClient));
    const answerNumberReturn = JSON.stringify(answerFromClient);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(answerNumberReturn);
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
console.log(request)
const answerNumberFromClient = request.params.number;
    const answerFromClient = getQuestion(parseInt(answerNumberFromClient));
    const answerNumberReturn = JSON.stringify(answerFromClient);
    reply 
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(answerNumberReturn)
});  
    
    reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Server Error</h1>");
  
    fastify.get("*", (request, reply) => {
    reply
         .code(200)
          .header("Content-Type", "text/html; charset=utf-8")
           .send("<h1>At Unmatched Route</h1>");
          });

const listenIP = "Localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err); 
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});