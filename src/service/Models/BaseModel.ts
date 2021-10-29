import { GuidUtils } from "../../Utils/guidUtils";

export class BaseModel{
    constructor(name:string){
        this.id = GuidUtils.generateGuid();
        this.name=name;
    }
    public id:string;
    public name:string;
}