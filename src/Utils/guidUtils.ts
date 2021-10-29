import { v4 as uuidv4 } from 'uuid';

export class GuidUtils {
    public static generateGuid() {
        return uuidv4().toString();
    }
}