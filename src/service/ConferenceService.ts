import { toast } from "react-toastify";
import { BaseService } from "./BaseService";
import { ApiPath } from "./Consts";
import { Attendee } from "./Models/Attendee";
import { Conference } from "./Models/Conference";
import { Talk } from "./Models/Talk";

export class ConferenceService {
  [x: string]: any;

  private baseService: BaseService;

  constructor(baseService: BaseService) {
    this.baseService = baseService;
  }

  public saveConference(conferenceName: string) {
    const allconferences = this.getAllConferences();
    return this.createNewConference(allconferences, conferenceName);
  }
  public getAllConferences(): Conference[] {
    const retVal = this.baseService.get(ApiPath.ALL_CONFERENCES) as Conference[];
    return retVal;
  }

  public bulkSaveConferences(allconferences:Conference[]=[]) {
    return this.baseService.post(allconferences, ApiPath.ALL_CONFERENCES);
  }
  public createConfereneTalk(conferenceId: string, talkName: string) {
    const allconferences = this.getAllConferences();
    const conferenceIndex = allconferences.findIndex(function (conf) {
      return conf.id === conferenceId;
    });
    if (conferenceIndex != null && conferenceIndex != undefined) {
      const talk = new Talk(talkName, conferenceId);
      const conference = allconferences[conferenceIndex];
      allconferences[conferenceIndex].talks.push(talk);
      this.baseService.post(allconferences, ApiPath.ALL_CONFERENCES);
      return conference;
    }
  }
  public addConferenceAttendee(conferenceId: string, attendeeName: string) {
    const allconferences = this.getAllConferences();
    const conferenceIndex = allconferences.findIndex(function (conf) {
      return conf.id === conferenceId;
    });
    if (conferenceIndex != null && conferenceIndex != undefined) {
      const attendee = new Attendee(attendeeName);
      const conference = allconferences[conferenceIndex];
      allconferences[conferenceIndex].attendees.push(attendee);
      this.baseService.post(allconferences, ApiPath.ALL_CONFERENCES);
      return conference;
    }
  }

 

  private createNewConference(allconferences: Conference[], conferenceName: string) {
    const confrenceToBeSaved = new Conference(conferenceName);
    allconferences.push(confrenceToBeSaved);
    this.baseService.post(allconferences, ApiPath.ALL_CONFERENCES);
    return confrenceToBeSaved;
  }

}