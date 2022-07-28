const userController = require("../controller/userController");

const router = require("express").Router();

router.post("/addUser", userController.addUser);
router.get("/getUsers", userController.getAllUsers);
router.get("/publishedUser", userController.publishedUser);
router.get("/:id", userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;