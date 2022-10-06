require("../models/db");
const Level = require("../models/Level");

/**
 * /api/levels
 * GET all levels of the game
 */

exports.getLevels = async (req, res) => {
    try {
        const levels = await Level.find({});
        res.json(levels);
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}