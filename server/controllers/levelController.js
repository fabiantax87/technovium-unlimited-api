require("../models/db");
const Level = require("../models/Level");

/**
 * /api/levels
 * GET all levels of the game
 */

exports.getLevels = async (req, res) => {
  let paramLimit = req.params.limit;

  if(paramLimit == undefined) {
    paramLimit = 10;
  }

  if(Number.isInteger(paramLimit)) {
    paramLimit = 10;
  }

  if(paramLimit > 100) {
    paramLimit = 100;
  }

  if(paramLimit < 1) {
    paramLimit = 1;
  }

  if (paramLimit == 0) {
    paramLimit = 10;
  }

  try {
    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const limit = parseInt(paramLimit) || 10;
    const result = {};
    const totalLevels = await Level.countDocuments().exec();
    let startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;
    result.totalLevels = totalLevels;
    if (startIndex > 0) {
      result.previous = {
        pageNmber: pageNumber - 1,
        limit: limit,
      };
    }
    if (endIndex < (await Level.countDocuments().exec())) {
      result.next = {
        pageNumber: pageNumber + 1,
        limit: limit,
      };
    }
    result.data = await Level.find()
      .sort("-_id")
      .skip(startIndex)
      .limit(limit)
      .exec();
    result.rowsPerPage = limit;
    result.currentPage = pageNumber;
    return res.json({msg: "Levels fetched successfully", data: result});

  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

/**
 * /api/levels/:game_id
 * GET all levels of the game
 */

exports.getGameLevels = async (req, res) => {
  try {
    const levels = await Level.find({ game_id: req.params.game_id });
    res.json(levels);
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
