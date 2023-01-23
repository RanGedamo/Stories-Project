const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteObj
} = require("../controllers/groups-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update/byId/:id", update);
router.delete("/delete/byId/:id", deleteObj)

module.exports = router;