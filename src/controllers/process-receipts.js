import responseHelper from "../utils/response-helper.js";
import * as processReceiptsService from "../services/process-receipts.js";

export const addReceipts = async(request, response) => {
    try {
        const id = await processReceiptsService.calculatePoints(request.body);
        responseHelper.setResponse(response, 201, {"id" : id});
    } catch (error) {
        console.log(" error ", error.message);
        responseHelper.setResponse(response, 500, {"message": "Something went wrong"});
    }   
}

export const fetchReceipts = (request, response) => {
    
    const totalPoints = processReceiptsService.fetchTotalPointsFromReceiptId(request.params.id);
    if(totalPoints !== null) {
        responseHelper.setResponse(response, 201, totalPoints);
    } else {
        responseHelper.setResponse(response, 400, {"message": "Receipt with given id does not exist."});
    }
        
}


