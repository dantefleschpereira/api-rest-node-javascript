const router = require("Express").Router();

// Service router
const serviceRouter = require("./services");

router.use("/", serviceRouter);

module.exports = router;


