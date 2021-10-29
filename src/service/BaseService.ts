import { requestType } from "./Models/baseModels";

export class BaseService {

    public post(model: any, address: string) {
        const modelToBeSaved = JSON.stringify(model);
        return this.applyRequest(requestType.Post, address, modelToBeSaved)
    }

    public get(address: any):[] {
        const retVal= this.applyRequest(requestType.Get, address) ;
        return JSON.parse(retVal);
    }

    public delete(address: any) {
        this.applyRequest(requestType.Delete, address);
    }

    private applyRequest(type: requestType, address: string, modelObject = ""):any {

        if (type === requestType.Post) {
            if (modelObject !== "") {
                this.applyPost(address, modelObject);               
            }
        }
        else if (type === requestType.Get) {
            return this.applyGet(address);
        }
        else if (type === requestType.Delete) {
            localStorage.removeItem(address)
        }
    }

    private applyPost(address: string, modelObject: string) {
        localStorage.setItem(address, JSON.stringify(modelObject));
        this.applyGet(address);
    }

    private applyGet(address: string) {
        var response = localStorage.getItem(address);
        if (response) return JSON.parse(response);
        else return [];
    }
}