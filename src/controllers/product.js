const productModel = require("../models/product");
const miscHelper = require("../helpers");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await productModel.getAll();
      miscHelper.response(res, 200, result);
    } catch (error) {
      miscHelper.customErrorResponse(res, 404, "Internal Server Error!");
    }
  },
  getDetail: async (req, res) => {
    try {
      const productId = req.params.productId;
      const result = await productModel.getDetail(productId);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  },
};
