const router = require("express").Router();
const {create,fet,markt,markf,del,update,pending} = require("../controllers/taskControllers")

router.post("/create",create)
router.patch("/ckt",markt)
router.patch("/ckf",markf)
router.patch("/update",update)
router.delete("/delete",del)
router.post("/pending",pending)
router.post("/fetch",fet)

module.exports = router;