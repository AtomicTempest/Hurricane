const https = require("https");

class Question {
    constructor(prompt, answer){
        this.prompt = prompt;
        this.answer = answer;
    }
}

function getTriviaQuestion() {
    https.get('https://opentdb.com/api.php?amount=1&type=boolean&encode=base64', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const JSONdata = JSON.parse(data);
            const results = JSONdata.results;
            console.log(results);

            var promt = atob(results[0].question);
            var answer = atob(results[0].correct_answer);

            return new Question(prompt, answer);
        });
    });
};

exports.getTriviaQuestion = getTriviaQuestion;
exports.Question = Question;