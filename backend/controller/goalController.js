const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}
const {getGoals} = require("../controllers/goalController")
const router = require("../routes/goalRoutes")

const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goals controller'})
}

const updateGoal = (req,res) => {
    res.status(200).json({message: `Update Goal controller ${req.params.id}`})
}

const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete Goal controller ${req.params.id}`})
}
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}

router.get("/".getGoals)