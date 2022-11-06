const express = require("express");
const router = express.Router();
const userControllers = require("../../controllers/users.Controllers");

router.route("/random").get(userControllers.getRandomUser);

router.route("/all").get(userControllers.getAllUser);

router.route("/all/:id").get(userControllers.getUserDetails);

router.route("/save").post(userControllers.saveUser);

router.route("/update/:id").patch(userControllers.updateUser);

router.route("/bulk-update/:id").patch(userControllers.bulkUpdateUser);

router.route("/delete/:id").delete(userControllers.deleteUser);

module.exports = router;
