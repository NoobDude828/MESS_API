const {Router} = require("express");
const controller = require("./controller");

const router = Router();

router.get("/",controller.getReport);
router.post("/", controller.addReport);
router.get("/:id", controller.getReportById);
router.put("/:id", controller.updateReport);
router.delete("/:id", controller.removeReport);

module.exports = router;

//routes for feedbacks