
import { BaseService } from "./BaseService";
import { ApiPath } from "./Consts";
import { Talk } from "./Models/Talk";

export class TalkService {

  private baseService: BaseService;

  constructor(baseService: BaseService) {
    this.baseService = baseService;
  }

  createTalk(conferenceId: string, talkName: string) {
    const talkToBeSaved = new Talk(talkName,conferenceId);
    return this.baseService.post(talkToBeSaved,ApiPath.ALL_TALKS);
  }

  getAllTalks(){
    return this.baseService.get(ApiPath.ALL_TALKS);
  }

}