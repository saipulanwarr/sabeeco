const connection = require("../configs/mysql");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product`, (error, result) => {
        if (error) reject(new Error(error));
        resolve(result);
      });
    });
  },
  getDetail: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM product WHERE product_code = ?",
        productId,
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
};
