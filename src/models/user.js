const connection = require("../configs/mysql");

module.exports = {
  checkUser: (user) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM login WHERE user = ?",
        user,
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
};
