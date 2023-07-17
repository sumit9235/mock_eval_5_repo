const mongoose = require('mongoose')
const quizSchema = mongoose.Schema({
    creator: String,
    title: String,
    description: String,
    questions: [{
        title: {
            type: String
        },
        answerOptions: {
            type: [String]
        },
        correctOptions: {
            type: [Number]
        },
    }],
}, {
    versionKey: false
})

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = {
    QuizModel
}