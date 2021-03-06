const Users = require("../models/user");


const getUsersDetails = (req, res) => {
 
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    results.next = {
      page: page + 1,
      limit: limit,
    };

    results.prev = {
      page: page - 1,
      limit: limit,
    };

    Users.find()
      .then((users) => {
        results.length = users.length;
        results.current = users.slice(startIndex, endIndex);

        res.json(results);
      })

      .catch((err) => res.status(500).json("Error" + err));

};

module.exports = {  getUsersDetails };
