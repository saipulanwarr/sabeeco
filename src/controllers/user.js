const userModel = require("../models/user");
const helper = require("../helpers");
const JWT = require("jsonwebtoken");
const { JWT_KEY } = require("../configs");

module.exports = {
  login: async (request, response) => {
    const data = {
      password: request.body.password,
      user: request.body.user,
    };

    console.log("data", data);

    const userValid = await userModel.checkUser(data.user);
    const dataUser = userValid[0];
    const hashPassword = helper.setPassword(data.password, dataUser.user);

    if (hashPassword.passwordHash === dataUser.password) {
      const token = JWT.sign(
        {
          user: dataUser.user,
          userId: dataUser.id,
        },
        JWT_KEY,
        { expiresIn: "1h" }
      );

      console.log("token", token);

      delete dataUser.salt;
      delete dataUser.password;

      dataUser.token = token;

      response.json(dataUser);
    } else {
      response.json({ message: "Login error!" });
    }
  },
};
