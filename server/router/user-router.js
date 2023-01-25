const router = require("express").Router();
const {
    getAll,
    getById,
    update,
    deleteUser,
    register,
    logIn,
    getByEmail
} = require("../controllers/users-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.get("/findByEmail/:email", getByEmail);
router.post("/logIn", logIn);
router.post("/register", register);
router.put("/update/byId/:id", update);
router.delete("/delete/byId/:id", deleteUser)

module.exports = router;