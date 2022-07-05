const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}
const {getGoals} = require("../controllers/goalController")
const router = require("../routes/goalRoutes")

module.exports = {
    getGoals
}

router.get("/".getGoals)