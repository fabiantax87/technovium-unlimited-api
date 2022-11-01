require('../models/db');
const Setting = require('../models/setting');

/**
* - /api/users/settings/
* - GET all Settings 
**/

exports.listSettings = async(req, res) => {

    let { limit = 10, page = 1, username, q } = req.query;

    const limitRecords = parseInt(limit);
    const skip = (page - 1) * limit;

    let query = {};
    if(username) query.username = username;
    if(q){
        query = {$text: {$search:  q}};
    }

    try {
        const settings = await Setting.find({query}).limit(limitRecords).skip(skip);
        res.json(settings);
    } catch (err) {
        res.status(400).json({ message: err });
    }

}

/**
* - /api/users/settings/:id
* - PUT all Settings 
**/

exports.updateAllSettings = async (req, res) => {

    console.log(req.params)
    console.log(req.body)

    let paramID = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let date_of_birth = req.body.date_of_birth
    let gender = req.body.gender;
    let status = req.body.status;


    try {
        const updateSettings = await Setting.updateMany(

            { _id: paramID },
            {
                username: username, email: email, password: password,
                date_of_birth: date_of_birth, gender: gender, status: status
            }

        );
        res.json(updateSettings);
    } catch (err) {
        res.status(400).json({ message: err });
    }
}


// async function insertSettings(){

//     try {
//         await Setting.insertMany([

//             {
//                 "username": "samara",
//                 "email": "samara@email.com",
//                 "password": "password123",
//                 "date_of_birth": "12/03/2005",
//                 "gender": "woman",
//                 "status": "off"
//             }
        
        
//         ]);

//     } catch (error) {
//         console.log(error);
//     }
// }

// insertSettings();