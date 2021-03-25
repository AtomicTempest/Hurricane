/* This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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