const express = require("express");
const { QuizModel } = require("../model/quizes.model");
const quizRouter = express.Router();

quizRouter.post("/addquiz", async (req, res) => {
    const { creator, title, description, questions } = req.body
    console.log(req.body)
    try {
        const data = new QuizModel({ creator, title, description, questions });
        console.log(data)
        await data.save();
        res.status(200).send({ "msg": "Quiz added Sucessfull" });
    } catch (err) {
        res.status(500).send(err.message)
    }
})


quizRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const Email = req.body.creator;
    const quiz = await QuizModel.findById(id);
    if (!quiz) {
        res.send({"msg":"No question available to delete "})
    } else {
        const quizCreator = quiz.creator;
        if (Email === quizCreator) {
            await QuizModel.findByIdAndDelete({ _id: id })
            res.status(200).send({ "msg": "Sucesfully Deleted" })
        } else {
            res.send({ "msg": "You can delete only your created quiz" })
        }
    }
})

module.exports = {
    quizRouter
}

