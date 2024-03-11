import express from "express";
import * as processReceiptsController from "../controllers/process-receipts.js";
import * as middleware from "../middleware.js";

const router = express.Router();


router.post("/process", middleware.validatePurchase, processReceiptsController.addReceipts);
router.get("/:id/points", middleware.validateId, processReceiptsController.fetchReceipts);
 
export default router;