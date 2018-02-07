const Driver = require("../models/driver.js");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  create(req, res) {
    const driverProps = req.body;
    Driver.create(driverProps).then(driver => res.send(driver));
  }
};
